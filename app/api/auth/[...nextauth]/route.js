import User from "@/models/user";
import { connectDB } from "@/utils/database";
import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'



 const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        })
    ],
    callbacks: {
        async session({session}){
            const sessionUser = await User.findOne({email: session.user.email})
            session.user.id = sessionUser._id.toString()
            return session;
        },
        async signIn({profile}){
            try {
                await connectDB()
                const userExists = await User.findOne({email: profile.email})
             if(!userExists){
                await User.create({
                    username: profile.name,
                    email: profile.email,
                    image: profile.picture
                })
             }
            } catch (error) {
                console.log(error)
            }
            return true;
        }
    }
})

export { handler as GET, handler as POST}