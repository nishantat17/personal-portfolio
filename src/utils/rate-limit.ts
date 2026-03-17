import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const redis = new Redis({
    url: import.meta.env.UPSTASH_REDIS_REST_URL,
    token: import.meta.env.UPSTASH_REDIS_REST_TOKEN,
});

// 3 requests per IP every 10 minutes
export const ratelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(3, "10 m"),
    analytics: true,
    prefix: "contact_form",
});