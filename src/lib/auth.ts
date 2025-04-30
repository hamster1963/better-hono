import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { createDb } from "@/db";
import { Environment } from "@/env";

export const createAuth = (env: Environment) => {
  const db = createDb(env); // create db per request
  return betterAuth({
    database: drizzleAdapter(db, {
      provider: "pg"
    }),
    trustedOrigins: ["*"],
    plugins: [],
    advanced: {
      crossSubDomainCookies: {
        enabled: true
      }
    },
    emailAndPassword: {
      enabled: true,
    },
  });
};