import { Lucia } from "lucia";
import { dev } from "$app/environment";
import { BetterSqlite3Adapter } from "@lucia-auth/adapter-sqlite";
import { db } from "./db";

const adapter = new BetterSqlite3Adapter(db, {
    user: "user",
    session: "session"
});

export const lucia = new Lucia(adapter, {
    sessionCookie: {
        attributes: {
            secure: !dev
        }
    },
    getUserAttributes: (attributes) => {
        return {
            username: attributes.username
        };
    }
});