import { useRef, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import api from '../../api';
import { ResponseContext } from '../../App';

const GetForm = () => {
  const id = useRef();
  const responseContext = useContext(ResponseContext)

  const submit = e => {
    e.preventDefault();
    api.user.get(id.current.value).then((response) => {
      responseContext.newResponse(JSON.stringify(response));
    }).catch((error) => {
      responseContext.newResponse(JSON.stringify(error));
    });
  }

  return (
    <Form onSubmit={submit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>ID</Form.Label>
        <Form.Control type="number" ref={id} placeholder="Enter ID of User to get" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default GetForm;
