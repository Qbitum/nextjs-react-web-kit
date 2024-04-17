 import NextAuth from "next-auth";

declare module "next-auth" {
   interface Session {
    error?: string;
    roles?: string[];
    id_token?: string;
  }

}

declare module "next-auth/jwt" {
  interface JWT {
    expires_at: number;
    refresh_token?: string;
    access_token?: string;
    id_token?: string;
    error?: string;
  }
}
