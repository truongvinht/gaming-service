import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import mongoConnector from "../../../utils/mongoConnector";
import User from "../../../models/User";
import bcrypt from 'bcrypt'

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Username", type: "username", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        await mongoConnector();
        console.log(credentials);
        const username = credentials.username;
        const password = credentials.password;
        const user = await User.findOne({ username });
        if (!user) {
          throw new Error("You haven't registered yet");
        }
        if (user) return signinUser({ password, user });
      },
    }),
    // ...add more providers here
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/login",
  },
  theme: {
    colorScheme: "auto", // "auto" | "dark" | "light"
    brandColor: "#33FF5D", // Hex color code #33FF5D
    logo: "/next.svg", // Absolute URL to image
  },
  // Enable debug messages in the console if you are having problems
  debug: process.env.NODE_ENV === "development",
});

const signinUser = async ({ password, user }) => {
  if (!user.password) {
    throw new Error("Please enter password");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Password Incorrect.");
  }
  return user;
};
