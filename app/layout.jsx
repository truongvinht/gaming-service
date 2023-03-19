import '../styles/globals.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import Provider from './provider';
import Navigator from '../components/Navigator';
import ReactQueryWrapper from './reactQueryWrapper';
import ReactReducer from './reactReducer';

export default function RootLayout({ children }) {
  const title = 'Gaming Service';

  const links = [
    { title: 'Benutzer', link: '/users' },
    { title: 'Genshin', link: '/genshin' },
    { title: 'Impressum', link: '/about' },
  ];

  return (
    <html lang="en">
      <head />
      <body>
        <Provider>
          <Navigator appTitle={title} nodes={links} />
          <ReactQueryWrapper>
            <ReactReducer>{children}</ReactReducer>
          </ReactQueryWrapper>
        </Provider>
      </body>
    </html>
  );
}
