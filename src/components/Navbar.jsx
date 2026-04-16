import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarBootstrap from 'react-bootstrap/Navbar';
import { formatPrice } from '../utils/formatPrice';

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <NavbarBootstrap bg="dark" variant="dark" expand="lg" className="shadow-sm">
      <Container>
        <NavbarBootstrap.Brand href="#">Pizzería Mamma Mía!</NavbarBootstrap.Brand>

        <div className="d-flex align-items-center gap-2 flex-wrap ms-lg-3">
          <Nav className="d-flex flex-row flex-wrap gap-2 align-items-center">
            <Button variant="outline-light" size="sm">🍕 Home</Button>

            {token ? (
              <>
                <Button variant="outline-light" size="sm">🔓 Profile</Button>
                <Button variant="outline-light" size="sm">🔒 Logout</Button>
              </>
            ) : (
              <>
                <Button variant="outline-light" size="sm">🔐 Login</Button>
                <Button variant="outline-light" size="sm">🔐 Register</Button>
              </>
            )}
          </Nav>
        </div>

        <Button variant="outline-info" size="sm" className="ms-auto">
          🛒 Total: $ {formatPrice(total)}
        </Button>
      </Container>
    </NavbarBootstrap>
  );
};

export default Navbar;
