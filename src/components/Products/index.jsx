import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BasicExample from '../Cards';

function Produtos() {
  return (
    <Container>
      <Row className='mb-4 pb-4' style={{ gap: '2.5em', flexWrap: 'nowrap' }}>
        <Col className='col-md-4'><BasicExample /></Col>
        <Col className='col-md-4'><BasicExample /></Col>
        <Col className='col-md-4'><BasicExample /></Col>
      </Row>
      <Row className='mb-4 pb-4' style={{ gap: '2.5em', flexWrap: 'nowrap'}}>
        <Col className='col-md-4'><BasicExample /></Col>
        <Col className='col-md-4'><BasicExample /></Col>
        <Col className='col-md-4'><BasicExample /></Col>
      </Row>
    </Container>
  );
}

export default Produtos;