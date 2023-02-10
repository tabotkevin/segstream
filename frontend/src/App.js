import {useState, createContext } from 'react'
import { RouterProvider } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import router from './Routes.js';
import Header from './components/Header.js';

export const ResponseContext = createContext()

const App = () =>  {
  const [response, setResponse] = useState()

    const responseContext = {
      response: response,
      newResponse: (_response ) => { setResponse(_response) },
  }

    return (
    <Container fluid>
      <Header/>
      <ResponseContext.Provider value={responseContext}>
        <RouterProvider router={router} />
      </ResponseContext.Provider>
    </Container>
  )
}

export default App;
