import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './Header';
import CardPizza from './CardPizza';

const Home = () => {
  return (
    <main>
      <Header />

      <Container className="py-5">
        <Row className="g-4">
          <Col xs={12} md={6} lg={4}>
            <CardPizza
              name="Napolitana"
              price={5950}
              ingredients={['mozzarella', 'tomates', 'jamón', 'orégano']}
              img="https://easyways.cl/storage/20210208143331pizza-napolitana.jpg?x=auto&quality=80&format=jpg&fit=crop&h=400&w=400"
            />
          </Col>

          <Col xs={12} md={6} lg={4}>
            <CardPizza
              name="Española"
              price={6950}
              ingredients={['mozzarella', 'gorgonzola', 'parmesano', 'provolone']}
              img="https://www.labuonapizza.cl/wp-content/uploads/2020/12/lbp-espanola-01.jpg?x=auto&quality=80&format=jpg&fit=crop&h=400&w=400"
            />
          </Col>

          <Col xs={12} md={6} lg={4}>
            <CardPizza
              name="Pepperoni"
              price={6950}
              ingredients={['mozzarella', 'pepperoni', 'orégano']}
              img="https://www.sortirambnens.com/wp-content/uploads/2019/02/pizza-de-peperoni.jpg?x=auto&quality=80&format=jpg&fit=crop&h=400&w=400"
            />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Home;
