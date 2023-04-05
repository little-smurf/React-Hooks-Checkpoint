import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function ColorSchemesExample() {
return (
  <>
    <Navbar bg="light" expand="lg">
    <Container>
        <Navbar.Brand href="#home">Menu</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">All Movies List</Nav.Link>
            <NavDropdown title="Movies Genre" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Trending Now</NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item href="#action/3.2">Comedy</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Romance</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Animation</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.5">Scary</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.6">Adventure</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.7">Thriller</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.7">Drama</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}
export default ColorSchemesExample;
/*import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default ColorSchemesExample;*/