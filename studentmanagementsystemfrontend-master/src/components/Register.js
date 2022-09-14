import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';


function BasicExample() {
  return (
    <div className="my-3">
    <Form>
      <Container>
        <Card>
      <Card.Header>
          <h2>Register</h2>
        </Card.Header>
        <Card.Body>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label><h5>Username</h5></Form.Label>
        <Form.Control type="text" placeholder="Enter username" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label><h5>Email</h5></Form.Label>
        <Form.Control type="email" placeholder="Enter Email"  />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label><h5>Enter Password</h5></Form.Label>
        <Form.Control type="password" placeholder="Password"  />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Card.Body>
      </Card>
      </Container>
    </Form>
    </div>
  );
}

export default BasicExample;