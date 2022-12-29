import '../styles/globals.css'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import Navigator from '../components/navigator'

export default function RootLayout({ children }) {
  const title = 'Gaming'; 
  return (
    <html>
      <head />
      <body>
        <Navigator appTitle={title}/>
        {children}
      </body>
    </html>
  )
}
