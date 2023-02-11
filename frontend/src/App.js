import Container from 'react-bootstrap/Container';
import Header from './components/Header.js';
import { RouterProvider } from 'react-router-dom';
import StoreProvider from './Store.js';

import router from './Routes.js';

const App = () => {

  return (
    <Container fluid>
      <Header />
      <StoreProvider>
        <RouterProvider router={router} />
      </StoreProvider>
    </Container>
  )
}

export default App;
