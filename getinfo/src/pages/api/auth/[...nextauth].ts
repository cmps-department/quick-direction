import NextAuth from "next-auth";
import { AuthConfig } from "../../../configs/auth";

export default NextAuth(AuthConfig);