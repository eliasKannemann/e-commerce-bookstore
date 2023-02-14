import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ImPriceTags } from "react-icons/im";
import CartWidget from "../CartWidget";

function NavBar() {
  return (
    <Navbar bg="transparent sticky" expand="lg" className="border border-black">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <span className="text-center">
            <ImPriceTags />
          </span>{" "}
          BookStore
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/products">
              Libros
            </Nav.Link>
            <Nav.Link as={Link} to="/news">
              Novedades
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              Nosotros
            </Nav.Link>
            <NavDropdown title="Temas" id="navbarScrollingDropdown">
              <NavDropdown.Item has={Link} to="/top">
                Top 100
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/comics">
                Comics & Anime
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/drama">
                Drama
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
