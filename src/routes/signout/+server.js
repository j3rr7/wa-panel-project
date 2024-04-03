import {lucia} from "$lib/server/auth";

/** @type {import('./$types').RequestHandler} */
export async function POST(event) {
    if (!event.locals.session) {
        return new Response("Not signed in", {
            status: 401,
            headers: {
                'Content-Type': 'text/plain'
            }
        });
    }

    await lucia.invalidateSession(event.locals.session.id);
    const sessionCookie = lucia.createBlankSessionCookie();
    event.cookies.set(sessionCookie.name, sessionCookie.value, {
        path: ".",
        ...sessionCookie.attributes
    });
    return new Response("Signed out successfully", {
        status: 200,
        headers: {
            'Content-Type': 'text/plain'
        }
    });
}

/** @type {import('./$types').RequestHandler} */
export async function fallback({request}) {
    return text('permission denied!');
}