import NextAuth from "next-auth"
import providers from "next-auth/providers"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      scope: 'read:user'
    }),
  ],
})