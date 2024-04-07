import {INTERNAL_WHATSAPP_API} from "$env/static/private";

export async function POST({ request }) {
    const sessionCheckResp = await fetch(INTERNAL_WHATSAPP_API + "/api/sessions/default/me", {
        method: "GET"
    });

    if (sessionCheckResp.status === 404) {
        const sessionResp = await fetch(INTERNAL_WHATSAPP_API + "/api/sessions/start", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: "default",
                config: {
                    proxy: null,
                    webhooks: [],
                    debug: false
                }
            })
        });

        if (sessionResp.status !== 201) {
            return new Response(sessionResp.statusText, {
                status: 500
            });
        }
    }

    const QRCodeResp = await fetch(INTERNAL_WHATSAPP_API + "/api/default/auth/qr?format=image", {
        method: "GET"
    });

    console.log(QRCodeResp.statusText, " - ", QRCodeResp.status);

    if (QRCodeResp.status !== 200) {
        return new Response(QRCodeResp.statusText, {
            status: 500
        });
    }

    const QRCodeBlob = await QRCodeResp.blob();

    return new Response(QRCodeBlob, {
        status: 200,
        headers: {
            'Content-Type': 'image/png'
        }
    });
}

/** @type {import('./$types').RequestHandler} */
export async function fallback({ request }) {
    return text(`Unrecognized request: ${request.method} ${request.url}`);
}