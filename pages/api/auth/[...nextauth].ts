import NextAuth  from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import prisma from "../db";
import { Prisma } from '@prisma/client';

export const authOptions = {

    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: '159925926764-0s0f69pan7evuatqtn1cpp4pujcda3dp.apps.googleusercontent.com',
            clientSecret: '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',
        }),
        // ...add more providers here
    ],
    secret : 'k8DpWXiDeaZKCtJbN203iY5m/Op1pvNplQGipbzkKH4=', // random 으로 생성한 해시키
    callbacks: {
        async signIn({ user, account, profile, email, credentials }: any) {

            let userFromDB;

            try {
                userFromDB = await prisma.user.findUnique({
                    where : {
                        id : user.id
                    }
                });
            } catch (e) {
                if (e instanceof Prisma.PrismaClientKnownRequestError) {
                    console.error(e);
                } else {
                    console.error(`Unknown Error : `);
                    console.error(e);
                }
            }

            return !!(userFromDB?.authorizedYN);
        },
        //sign in 할때와, useSession 등을 통해 접근하면서 jwt 를 업데이트 할 때 실행
        async jwt({ token, account }: any) {
            // Persist the OAuth access_token to the token right after signin
            if (account) {
                token.accessToken = account.access_token
            }
            return token
        },
        //업데이트된 jwt 기반으로 세션토큰을 구성할 때 실행
        async session({ session, token, user }: any) {
            // Send properties to the client, like an access_token from a provider.
            session.accessToken = token.accessToken
            return session
        }
    },

    /*
    아래의 초 전에 useSession 등을 통해 세션에 접근하면 jwt는 업데이트 된다. : expiry time 이 갱신된다.
    session : {
        maxAge: 30 * 24 * 60 * 60, // 30 days
    }
    */
}

export default NextAuth(authOptions)