import { Outlet, Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap'; // Import Bootstrap components

const Layout = () => {
  return (
    <>
      {/* Bootstrap Navbar */}
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">Gadget Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Product Catalogue</Nav.Link>
            <Nav.Link as={Link} to="/details">Product Details</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              <button className="btn btn-primary">Shopping Cart</button>
              
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Outlet for rendering child components */}
      <Outlet />
    </>
  )
};

export default Layout;
