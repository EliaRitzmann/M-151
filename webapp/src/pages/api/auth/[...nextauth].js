import { PrismaClient } from '@prisma/client';
import NextAuth from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials";

const prisma = new PrismaClient()



export default NextAuth({
    secret: "F-JaNdRgUkXp2s5v8y/B?D(G+KbPeShVmYq3t6w9z$C&F)H@McQfTjWnZr4u7x!A",
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
              username: { label: "username", type: "text", placeholder: "username" },
              email: { label: "email", type: "email", placeholder: "email" },
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const user = await prisma.user.findUnique({where: {email: credentials.email} })

                if(user){
                    if (user.password === credentials.password) {
                        // Any object returned will be saved in `user` property of the JWT
                        console.log(user)
                        return user
                      } else {
                        // If you return null then an error will be displayed advising the user to check their details.
                        return null
                
                        // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                      }
                }else{
                    return null
                }

              
            }
          })
    ]
  })