import '../styles/globals.css'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import Navigator from '../components/Navigator'
import ReactQueryWrapper from './reactQueryWrapper';
import ReactReducer from './reactReducer';

export default function RootLayout({ children }) {
  const title = 'Gaming'; 
  return (
    <html>
      <head />
      <body>
        <Navigator appTitle={title}/>
        <ReactQueryWrapper>
          <ReactReducer>
          {children}
          </ReactReducer>
        </ReactQueryWrapper>
      </body>
    </html>
  )
}
