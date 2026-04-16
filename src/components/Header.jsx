import Container from 'react-bootstrap/Container';

const Header = () => {
  return (
    <header className="hero-section text-white">
      <div className="hero-overlay">
        <Container className="hero-content text-center">
          <h1 className="fw-bold mb-2">¡Pizzería Mamma Mia!</h1>
          <p className="mb-0">¡Tenemos las mejores pizzas que podrás encontrar!</p>
        </Container>
      </div>
    </header>
  );
};

export default Header;
