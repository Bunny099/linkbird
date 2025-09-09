import { betterAuth, createMiddleware } from "better-auth"
import { Content } from "next/font/google"
import { db } from "@/db/index";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { schema } from "@/db/schema";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({

    database: drizzleAdapter(db,{
        provider: "pg",
        schema: schema
    }),
    emailAndPassword:{
        enabled:true
    },
    socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID as string, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, 
        }, 
    },
  plugins:[nextCookies()]
  
})