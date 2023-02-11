import { useRef } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import api from '../../Api';
import { useStore } from '../../Store';

const UpdateForm = () => {

  const id = useRef();
  const first_name = useRef();
  const last_name = useRef();
  const username = useRef();
  const email = useRef();
  const store = useStore();

  const submit = e => {
    e.preventDefault();

    const data = {
      id: id.current.value,
      first_name: first_name.current.value,
      last_name: last_name.current.value,
      username: username.current.value,
      email: email.current.value,
    };

    api.user.update(data).then((res) => {
      store.newResponse(res);
    }).catch((error) => {
      store.newResponse(JSON.stringify(error));
    });
  }

  return (
    <Form onSubmit={submit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>ID</Form.Label>
        <Form.Control type="number" ref={id} placeholder="Enter ID of User to update" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" ref={first_name} placeholder="Enter First Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" ref={last_name} placeholder="Enter Last Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" ref={username} placeholder="Enter Username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" ref={email} placeholder="Enter email" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default UpdateForm;
