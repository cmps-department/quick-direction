import { AuthOptions } from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";
import { jwtDecode } from "jwt-decode";
import { encrypt } from "../utils/encryption";

declare module 'next-auth/jwt' {
    interface JWT {
        decoded?: {
            realm_access: {
                roles: string[];
            }
        };
        access_token?: string;
        id_token?: string;
        expires_at?: number;
        refresh_token?: string;
        provider?: string;
    }
}

declare module "next-auth" {
    interface Session {
        access_token: string;
        id_token: string;
        roles: string[];
        user: {
            name: string;
            email: string;
        }
    }
  }

export const authConfig: AuthOptions = {
    providers: [
        KeycloakProvider({
            clientId: process.env.KEYCLOAK_ID!,
            clientSecret: process.env.KEYCLOAK_SECRET!,
            issuer: process.env.KEYCLOAK_ISSUER,
        }),
    ],
    callbacks: {
        async jwt({ token, account }) {
            const nowTimeStamp = Math.floor(Date.now() / 1000);
            if (account) {
                token.decoded = jwtDecode(account.access_token!);
                token.access_token = account.access_token;
                token.id_token = account.id_token;
                token.expires_at = account.expires_at;
                token.refresh_token = account.refresh_token;
                token.provider = account.provider;
                return token;
            } else if (nowTimeStamp < token.expires_at!) {
                return token;
            } else {
                return token;
            }
        },
        async session({ session, token }) {
            session.access_token = encrypt(token.access_token!);
            session.id_token = encrypt(token.id_token!);
            session.roles = token.decoded?.realm_access.roles!;
            return session;
        },
    },
    events: {
        async signOut({ token }) {
            if (token.provider === "keycloak") {
                const logoutUrl = `${process.env.END_SESSION_URL}?id_token_hint=${token.id_token}&post_logout_redirect_uri=${encodeURIComponent(process.env.NEXTAUTH_URL!)}`;
                await fetch(logoutUrl);
            }
        }
    }
}