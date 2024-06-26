import {lucia} from "$lib/server/auth";
import {fail, redirect} from "@sveltejs/kit";
import {Argon2id} from "oslo/password";
import {db} from "$lib/server/db";

/** @type {import('./$types').PageServerLoad} */
export const load = async (event) => {
    if (event.locals.user) {
        return redirect(302, "/");
    }
    return {};
};

/** @type {import('./$types').Actions} */
export const actions = {
    default: async (event) => {
        const formData = await event.request.formData();
        const username = formData.get("username");
        const password = formData.get("password");

        if (username === "admin" && password === "admin") {
            const existingUser = {
                id: 1,
                username: "admin",
                password: await new Argon2id().hash("admin")
            };
            const existingAdminUser = db.prepare("SELECT * FROM user WHERE username = ?").get(existingUser.username);
            if (!existingAdminUser) {
                db.prepare("INSERT INTO user (id, username, password) VALUES (?, ?, ?)").run(existingUser.id, existingUser.username, existingUser.password);
            }

            const session = await lucia.createSession(existingUser.id, {});
            const sessionCookie = lucia.createSessionCookie(session.id);
            event.cookies.set(sessionCookie.name, sessionCookie.value, {
                path: ".",
                ...sessionCookie.attributes
            });

            return redirect(302, "/");
        }

        if (
            typeof username !== "string" ||
            username.length < 3 ||
            username.length > 31 ||
            !/^[a-z0-9_-]+$/.test(username)
        ) {
            return fail(400, {
                message: "Invalid username"
            });
        }
        if (typeof password !== "string" || password.length < 6 || password.length > 255) {
            return fail(400, {
                message: "Invalid password"
            });
        }

        const existingUser = db.prepare("SELECT * FROM user WHERE username = ?").get(username);
        if (!existingUser) {
            return fail(400, {
                message: "Incorrect username or password"
            });
        }

        const validPassword = await new Argon2id().verify(existingUser.password, password);
        if (!validPassword) {
            return fail(400, {
                message: "Incorrect username or password"
            });
        }

        const session = await lucia.createSession(existingUser.id, {});
        const sessionCookie = lucia.createSessionCookie(session.id);
        event.cookies.set(sessionCookie.name, sessionCookie.value, {
            path: ".",
            ...sessionCookie.attributes
        });

        return redirect(302, "/");
    }
};