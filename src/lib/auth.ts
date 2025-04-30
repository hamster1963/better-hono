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
    trustedOrigins: ["https://localhost:4001","https://ai-api.nosion.ac.cn","https://192.168.2.118:4001","https://ai.buycoffee.top"],
    plugins: [],
    advanced: {
      crossSubDomainCookies: {
        enabled: true
      },
    },
    emailAndPassword: {
      enabled: true,
    },
  });
};