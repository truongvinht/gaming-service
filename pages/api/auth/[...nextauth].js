import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const KEY = process.env.JWT_SECRET;
const URL = process.env.NEXTAUTH_URL;

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'text' },
      },
      async authorize(credentials) {
        const { username } = credentials;
        const { password } = credentials;
        const response = await fetch(`${URL}/api/users/validate`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': KEY,
          },
          body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
          const { user } = await response.json();
          // eslint-disable-next-line no-underscore-dangle
          const id = user._id;
          const name = user.username;
          const { email } = user;
          const token = user;
          return { id, name, email, token };
        }
        throw new Error('User doesnt exist or bad password');
      },
    }),
    // ...add more providers here
  ],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/auth/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // eslint-disable-next-line no-param-reassign
        token.role = user.role;
      }
      return token;
    },
    session({ session, token }) {
      if (token && session.user) {
        // eslint-disable-next-line no-param-reassign
        session.user.role = token.role;
      }

      return session;
    },
  },
  theme: {
    colorScheme: 'auto', // "auto" | "dark" | "light"
    brandColor: '#33FF5D', // Hex color code #33FF5D
    logo: '/next.svg', // Absolute URL to image
  },
  // Enable debug messages in the console if you are having problems
  debug: process.env.NODE_ENV === 'development',
});
