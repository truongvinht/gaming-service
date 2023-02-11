import '../styles/globals.css'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import Provider from './provider'
import Navigator from '../components/Navigator'
import ReactQueryWrapper from './reactQueryWrapper';
import ReactReducer from './reactReducer';


export default function RootLayout({ children }) {

  // I'm in heaven 
  const title = 'iHv Service'; 
  return (
    <html>
      <head />
      <body>
        <Provider>
        <Navigator appTitle={title}/>
        <ReactQueryWrapper>
          <ReactReducer>
          {children}
          </ReactReducer>
        </ReactQueryWrapper>
        </Provider>
      </body>
    </html>
  )
}
