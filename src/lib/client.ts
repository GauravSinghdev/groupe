// client.ts
import { treaty } from "@elysiajs/eden";
import type { App } from "@/app/api/[[...slugs]]/route";

export const client = treaty<App>("https://groupe.codewithkara.com").api;

// typesafety for api routes -->
// const res = client.user.get()
