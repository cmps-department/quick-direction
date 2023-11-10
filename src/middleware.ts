export { default } from "next-auth/middleware";

export const config = {
    matcher: [
        "/request-directions",
        "/admin/:path*"
    ]
}
