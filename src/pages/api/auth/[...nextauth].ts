import NextAuth, { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials"

async function refreshAccessToken(token: JWT) {

    const params = new URLSearchParams();
    params.set("client_id", process.env.CLIENT_ID!);
    params.set("client_secret", process.env.NEXTAUTH_SECRET!)
    params.set("grant_type", "refresh_token");
    params.set("refresh_token", token.refresh_token!);

    const resp = await fetch(`${process.env.REFRESH_TOKEN_URL}`, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params,
        method: "POST",
    });
    const refreshToken = await resp.json();
    if (!resp.ok) throw refreshToken;

    return {
        ...token,
        access_token: refreshToken.access_token,
        id_token: refreshToken.id_token,
        expires_at: Math.floor(Date.now() / 1000) + refreshToken.expires_in,
        refresh_token: refreshToken.refresh_token,
    };
}

const authOption: NextAuthOptions = {

    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            type: 'credentials',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const { username, password } = credentials as {
                    username: string;
                    password: string;
                };
                const res = await fetch(`${process.env.NEXTAUTH_URL}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        username: username,
                        password: password
                    }),
                });
                const user = await res.json();
                if (!res?.ok) {
                    throw new Error(res.statusText);
                }
                // If no error and we have user data, return it
                if (res?.ok && user) {
                    return user;
                }

                // Return null if user data could not be retrieved
                return null;
            }
        })
    ],
    callbacks: {
        async jwt({ token, user, account }) {
            const nowTimeStamp = Math.floor(Date.now() / 1000);
            // first call of jwt function just user object is provided
            if (account) {
                token.access_token = account.access_token;
                token.id_token = account.id_token;
                token.expires_at = account.expires_at!;
                token.refresh_token = account.refresh_token;
                return token;
            }
            else if (nowTimeStamp < token.expires_at) {
                // token has not expired yet, return it
                return token;
            } else {
                // token is expired, try to refresh it
                console.log("Token has expired. Will refresh...")
                try {
                    const refreshedToken = await refreshAccessToken(token);
                    console.log("Token is refreshed.")
                    return refreshedToken;
                } catch (error) {
                    console.error("Error refreshing access token", error);
                    return { ...token, error: "RefreshAccessTokenError" };
                }
            }

        },
        async session({ session, token }) {
            session.id_token = token.id_token;  // see utils/sessionTokenAccessor.js
            session.roles = ['user_mgr','create'];
            session.error = token.error ;
            return session;
        }
    },
    pages: {
        signIn: '/',
    },

}


export default NextAuth(authOption);