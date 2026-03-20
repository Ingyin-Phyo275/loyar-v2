import { getSession } from "next-auth/react";
import type { Session } from "next-auth";

interface CustomSession extends Session {
    accessToken?: string | null;
}

export async function getAccessToken() {
    const session = await getSession();

    return (session as CustomSession)?.accessToken
}