import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
    function middleware(req) {
        if (
            req.nextUrl.pathname.startsWith("/admin") &&
            !(
                req.nextauth.token?.decoded?.realm_access.roles.includes("ROLE_ADMIN") ||
                req.nextauth.token?.decoded?.realm_access.roles.includes("ROLE_TEACHER")
            )
        ) {
            return new NextResponse("You do not have permission to access this page");
        }
    },
    {
        callbacks: {
            authorized: (params) => {
                let { token } = params;
                return !!token;
            },
        },
    },
);

export const config = {
    matcher: ["/request-directions", "/admin/:path*"],
};
