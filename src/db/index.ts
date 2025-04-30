import { drizzle } from "drizzle-orm/neon-http";
import { Environment } from '@/env';
import { neon } from "@neondatabase/serverless";
import * as schema from "@/db/schema";

export function createDb(env: Environment) {
    const sql = neon(env.DATABASE_URL);
    return drizzle({
        client: sql,
        casing: 'camelCase',
        schema,
    });
}
