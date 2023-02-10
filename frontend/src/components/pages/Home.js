import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import CreateForm from "../forms/CreateForm"
import ListUsers from "../forms/ListUsers"
import ResponseForm from "../forms/ResponseForm"
import RequestForm from "../forms/RequestForm"


const Home = () => {
  const [request, setRequest] = useState('create');

  return (
    <Container>
      <Row>
        <Col>
          <Row>
            <ListUsers/>
          </Row>
          <br/>
          
          <Row>
            <Col>
              <Button variant="info" onClick={() => setRequest('get')}>GET</Button>
            </Col>
            <Col>
              <Button variant="success" onClick={() => setRequest('create')}>CREATE</Button>
            </Col>
            <Col>
              <Button variant="warning" onClick={() => setRequest('update')}>UPDATE</Button>
            </Col>
            <Col>
              <Button variant="danger" onClick={() => setRequest('delete')}>DELETE</Button>
            </Col>
          </Row>

          <br/>
          <Row>
            <RequestForm request={request}/>
          </Row>
        </Col>
        <Col>
          <ResponseForm/>
        </Col>
      </Row>
    </Container>
  )
}
export default Home
