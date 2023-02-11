import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';

import api from '../../Api';

const Requests = () => {
  const [hits, setHits] = useState();

  useEffect(() => {
    api.requests.fetchAll().then((response) => {
      setHits(JSON.stringify(response.hits));
    }).catch((error) => {
      console.log(JSON.stringify(error))
    });
  }, []);

  return (
    <Container>
      <h2>Hits: {hits}</h2>
    </Container>
  )
}
export default Requests;
