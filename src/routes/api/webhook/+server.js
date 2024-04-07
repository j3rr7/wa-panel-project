import { text } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function fallback({ request }) {
    return text(`Unrecognized request: ${request.method} ${request.url}`);
}