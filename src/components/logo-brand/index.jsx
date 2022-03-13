import logoStylish from '../../assets/logo/stylish-logo.png';
import './style.css'
import { Container, Row, Col } from 'react-bootstrap';

export default function LogoBrand() {
    
    return (

        <Container>
        <Row>
          <Col md={6}>
          <img alt="logo" className="logo" src={logoStylish}></img>
          </Col>
         
        </Row>
        </Container>
       
              
      
      
    )
}