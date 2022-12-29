import '../styles/globals.css'

import Navigator from '../components/navigator'

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <Navigator />
        {children}
      </body>
    </html>
  )
}
