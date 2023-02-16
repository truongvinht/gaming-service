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
      async authorize(credentials, req) {
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
          return response.json();
        } else {
          throw new Error('User doesnt exist or bad password');
        }
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
  theme: {
    colorScheme: 'auto', // "auto" | "dark" | "light"
    brandColor: '#33FF5D', // Hex color code #33FF5D
    logo: '/next.svg', // Absolute URL to image
  },
  // Enable debug messages in the console if you are having problems
  debug: process.env.NODE_ENV === 'development',
});
