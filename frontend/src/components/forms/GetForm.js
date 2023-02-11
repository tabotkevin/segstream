import { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import api from '../../Api';
import { useStore } from '../../Store';

const GetForm = () => {
  const id = useRef();
  const store = useStore();

  const submit = e => {
    e.preventDefault();
    api.user.get(id.current.value).then((res) => {
      store.newResponse(res);
    }).catch((error) => {
      store.newResponse(JSON.stringify(error));
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
