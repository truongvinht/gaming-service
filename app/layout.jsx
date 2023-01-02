import '../styles/globals.css'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import Navigator from '../components/Navigator'
import ReactQueryWrapper from './reactQueryWrapper';

export default function RootLayout({ children }) {
  const title = 'Title'; 
  return (
    <html>
      <head />
      <body>
        <Navigator appTitle={title}/>
        <ReactQueryWrapper>{children}</ReactQueryWrapper>
      </body>
    </html>
  )
}
