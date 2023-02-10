import { useState, createContext } from 'react'
import Container from 'react-bootstrap/Container';
import Header from './components/Header.js';
import { RouterProvider } from 'react-router-dom';

import router from './Routes.js';

export const ResponseContext = createContext();

const App = () => {
  const [response, setResponse] = useState();

  const responseContext = {
    response: response,
    newResponse: (_response) => { setResponse(_response) },
  };

  return (
    <Container fluid>
      <Header />
      <ResponseContext.Provider value={responseContext}>
        <RouterProvider router={router} />
      </ResponseContext.Provider>
    </Container>
  )
}

export default App;
