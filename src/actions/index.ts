import { z } from "astro/zod";
import { ActionError, defineAction } from "astro:actions";
import { Resend } from "resend";
import { ratelimit } from "../utils/rate-limit";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
    sendEmail: defineAction({
        accept: "form",
        input: z.object({
            name: z.string().max(100),
            email: z.email(),
            phoneNumber: z.string().optional(),
            message: z.string().max(1000)
        }),
        handler: async ({ name, email, phoneNumber, message }, { request }) => {
            const ip =
                request.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
                "anonymous";


            const { success, reset } = await ratelimit.limit(ip);

            if (!success) {
                const retryAfterSecs = Math.ceil((reset - Date.now()) / 1000);

                throw new ActionError({
                    code: "TOO_MANY_REQUESTS",
                    message: `Too many requests. Please try again in ${retryAfterSecs} seconds.`
                });
            }

            const { data, error } = await resend.emails.send({
                from: "Contact Form <contact-form@contact.nishantat17.in>",
                to: ["nishant17bhagat@outlook.com"],
                subject: "Message from your website",
                html: `
                    <h3>Name: ${name}</h3>
                    <h4>Email: ${email}</h4>
                    <h4>Phone Number: ${phoneNumber}</h4>
                    <p>${message}</p>
                `,
                replyTo: email,
            });

            if (error) {
                throw new ActionError({
                    code: "BAD_REQUEST",
                    message: error.message
                });
            }

            return data;
        }
    })
}