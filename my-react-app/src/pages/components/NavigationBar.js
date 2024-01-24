import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../style.css";
const NavigationBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" fixed="top" fluid>
      <Container className="navbarcustom" fluid>
        <Navbar.Brand href="#home">PROGRESS APP</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">ADD COINS</Nav.Link>
          <Nav.Link href="#pricing">ANALYSIS</Nav.Link>
          <Nav.Link href="#logout">Logout</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
