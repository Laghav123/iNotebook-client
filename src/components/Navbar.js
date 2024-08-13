import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function MyNav() {
  return (
    <Navbar className="bg-body-tertiary">
    <Container>
        <Navbar.Brand href="/">
        <img
            alt=""
            src="/pencil.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
        />{' '}
        iNotebook
        </Navbar.Brand>

        <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
    </Container>
    </Navbar>
  );
}

export default MyNav;