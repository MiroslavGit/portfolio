//const buildUrl = (path: string) => `http://localhost:3000/${path}`;
const buildUrl = (path: string) => `https://miroslav-hanisko-server.vercel.app/${path}`;

export const sendEmail = async (email: object) => {
    const url = buildUrl('sendEmail');

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(email),
    });

    return await response.json();
}