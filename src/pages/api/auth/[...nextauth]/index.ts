import NextAuth from "next-auth";
import { authConfig } from "../../../../configs/auth";

export default NextAuth(authConfig);