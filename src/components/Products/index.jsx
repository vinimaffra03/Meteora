import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BasicExample from '../Cards';

function Produtos() {
  return (
    <Container className='row mx-auto'>
      
        <Col className='col-12 col-md-6 col-xl-4 pb-4'><BasicExample /></Col>
        <Col className='col-12 col-md-6 col-xl-4 pb-4'><BasicExample /></Col>
        <Col className='col-12 col-md-6 col-xl-4 pb-4'><BasicExample /></Col>
      
      
        <Col className='col-12 col-md-6 col-xl-4 pb-4'><BasicExample /></Col>
        <Col className='col-12 col-md-6 col-xl-4 pb-4'><BasicExample /></Col>
        <Col className='col-12 col-md-6 col-xl-4 pb-4'><BasicExample /></Col>
      
    </Container>
  );
}

export default Produtos;