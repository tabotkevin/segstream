import {useRef, useContext} from 'react';
import {ResponseContext} from '../../App';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import api from '../../api'

const CreateForm = () => {
  
  const first_name = useRef();
  const last_name = useRef();
  const username = useRef();
  const email = useRef();
  const responseContext = useContext(ResponseContext)

  const submit = e => {
    e.preventDefault()

    const data = {
      first_name: first_name.current.value,
      last_name: last_name.current.value,
      username : username.current.value,
      email : email.current.value,
    }

    api.user.create(data).then((response) => {
      responseContext.newResponse(JSON.stringify(response));
    }).catch((error) => {
      responseContext.newResponse(JSON.stringify(error));
    });

  }

  return (
    <Form onSubmit={submit}>
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
        <Form.Control type="text"  ref={username} placeholder="Enter Username" />
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

export default CreateForm;
