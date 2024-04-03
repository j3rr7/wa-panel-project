import { lucia } from "$lib/server/auth";
import { fail, redirect } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export const load = async (event) => {
    if (!event.locals.user) {
        return redirect(302, "/login");
    }
    return {
        user: event.locals.user
    };
};