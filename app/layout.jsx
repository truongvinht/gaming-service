import '../styles/globals.css'

import Navigator from '../components/navigator'

export default function RootLayout({ children }) {
  const title = 'Gaming'; 
  return (
    <html>
      <head appTitle={title}/>
      <body>
        <Navigator appTitle={title}/>
        {children}
      </body>
    </html>
  )
}
