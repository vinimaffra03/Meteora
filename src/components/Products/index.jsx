import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BasicExample from '../Cards';

function Produtos() {
  return (
    <Container className='w-100 pr-0 pl-0'>
      <Row className="g-2">
        <Col className="col-12 col-md-6 col-xl-4 mb-5"><BasicExample /></Col>
        <Col className="col-12 col-md-6 col-xl-4 mb-5"><BasicExample /></Col>
        <Col className="col-12 col-md-6 col-xl-4 mb-5"><BasicExample /></Col>
        <Col className="col-12 col-md-6 col-xl-4 mb-5"><BasicExample /></Col>
        <Col className="col-12 col-md-6 col-xl-4 mb-5"><BasicExample /></Col>
        <Col className="col-12 col-md-6 col-xl-4 mb-5"><BasicExample /></Col>
      </Row>
    </Container>
  );
}

export default Produtos;