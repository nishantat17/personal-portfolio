import './server_DASCuxah.mjs';
import { Resend } from 'resend';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
import { d as defineAction, o as object, s as string, e as email, A as ActionError } from './entrypoint_CZyKt9aM.mjs';

const redis = new Redis({
  url: "https://wealthy-minnow-75242.upstash.io",
  token: "gQAAAAAAASXqAAIncDFmMGNmOGIwNDUyZGE0ZjZhYTI3NDZkMDEzZDBkYzIzOXAxNzUyNDI"
});
const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(3, "10 m"),
  analytics: true,
  prefix: "contact_form"
});

const resend = new Resend("re_3Wykcpmy_mdaB2J8JWevkQJQgjiccmERJ");
const server = {
  sendEmail: defineAction({
    accept: "form",
    input: object({
      name: string().max(100),
      email: email(),
      phoneNumber: string().optional(),
      message: string().max(1e3)
    }),
    handler: async ({ name, email, phoneNumber, message }, { request }) => {
      const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "anonymous";
      const { success, reset } = await ratelimit.limit(ip);
      if (!success) {
        const retryAfterSecs = Math.ceil((reset - Date.now()) / 1e3);
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
        replyTo: email
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
};

export { server };
