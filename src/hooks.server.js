import { lucia } from "$lib/server/auth.js";
import { ADMIN_LOGIN } from "$env/static/private";

/**
 * Handles the event by setting user and session information in the event locals
 * @param {Object} param0 - The event and resolve function
 * @param {Object} param0.event - The event object
 * @param {Function} param0.resolve - The resolve function
 * @returns {Object} - The modified event object
 */
export const handle = async ({ event, resolve }) => {
    // check if url originate from /signup
    if (event.url.pathname.startsWith('/signup')) {
        const auth = event.request.headers.get("Authorization");
        if (auth !== `Basic ${btoa(ADMIN_LOGIN)}`) {
            return new Response("Not authorized", {
                status: 401,
                headers: {
                    "WWW-Authenticate": 'Basic realm="User Visible Realm", charset="UTF-8"',
                },
            });
        }
    }

    // Get the session ID from the cookies
    const sessionId = event.cookies.get(lucia.sessionCookieName);

    // If no session ID is found, set user and session to null and return the event
    if (!sessionId) {
        event.locals.user = null;
        event.locals.session = null;
        return resolve(event);
    }

    // Validate the session using the session ID
    const { session, user } = await lucia.validateSession(sessionId);

    // If the session is valid and fresh, create and set a new session cookie
    if (session && session.fresh) {
        const sessionCookie = lucia.createSessionCookie(session.id);
        event.cookies.set(sessionCookie.name, sessionCookie.value, {
            path: ".",
            ...sessionCookie.attributes
        });
    }

    // If the session is not valid, create and set a new blank session cookie
    if (!session) {
        const sessionCookie = lucia.createBlankSessionCookie();
        event.cookies.set(sessionCookie.name, sessionCookie.value, {
            path: ".",
            ...sessionCookie.attributes
        });
    }

    // Set the user and session in the event locals and return the modified event
    event.locals.user = user;
    event.locals.session = session;
    return resolve(event);
};