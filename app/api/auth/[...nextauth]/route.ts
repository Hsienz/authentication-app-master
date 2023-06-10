import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
import TwitterProvider from 'next-auth/providers/twitter'
import GithubProvider from 'next-auth/providers/github'
import FacebookProvider from 'next-auth/providers/facebook'
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from '@/lib/mongodb'
import CredentialsProvider from 'next-auth/providers/credentials'
import {hashSync} from 'bcryptjs'


export const authOptions:NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID ?? "",
            clientSecret: process.env.GOOGLE_SECRET ?? ""
        }),
        TwitterProvider({
            clientId: process.env.TWITTER_ID ?? "",
            clientSecret: process.env.TWITTER_SECRET ?? "",
            version: '2.0'
        }),
        GithubProvider({
            clientId:process.env.GITHUB_ID ?? "",
            clientSecret:process.env.GITHUB_SECRET ?? ""
        }),
        FacebookProvider({
            clientId:process.env.FACEBOOK_ID ?? "",
            clientSecret:process.env.FACEBOOK_SECRET ?? ""
        }),
        CredentialsProvider({
            type:'credentials',
            credentials: {},
            async authorize(credentials) {
                const {email, password} = credentials as {
                    email: string,
                    password: string
                }
                const db = (await clientPromise).db()
                const users = db.collection('users')
                const user = await users.findOne({email, password:hashSync(password)})
                return {id: '0', ...user}

            }
        })
    ],
    adapter: MongoDBAdapter(clientPromise),
    session: {
        strategy: 'jwt'
    }
}

const handler = NextAuth(authOptions)

export {
    handler as GET,
    handler as POST
}