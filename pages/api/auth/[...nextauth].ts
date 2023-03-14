import NextAuth from "next-auth"
import DiscordProvider from "next-auth/providers/discord";


export default NextAuth({
    providers: [
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID || '',
            clientSecret: process.env.DISCORD_CLIENT_SECRET || '',
            authorization: {
                params: {
                    scope: 'identify email guilds'
                }
            },
            token: "https://discord.com/api/oauth2/token",
            userinfo: "https://discord.com/api/users/@me", 
        })
    ],
    callbacks: {
        async session({ session, token, user }) {
            // @ts-ignore
            session.token = token
            return session;
        }
      }
});