import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { formatPrice } from '../utils/formatPrice';

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <Card className="h-100 shadow-sm pizza-card">
      <Card.Img variant="top" src={img} alt={`Pizza ${name}`} className="pizza-card-img" />

      <Card.Body>
        <Card.Title>Pizza {name}</Card.Title>
      </Card.Body>

      <ListGroup variant="flush">
        <ListGroup.Item className="text-center text-secondary">Ingredientes:</ListGroup.Item>
        <ListGroup.Item className="text-center small">🍕 {ingredients.join(', ')}</ListGroup.Item>
        <ListGroup.Item className="text-center fw-bold fs-5">
          Precio: $ {formatPrice(price)}
        </ListGroup.Item>
      </ListGroup>

      <Card.Body className="d-flex justify-content-between gap-2">
        <Button variant="outline-dark" size="sm">Ver más</Button>
        <Button variant="dark" size="sm">Añadir 🛒</Button>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;
