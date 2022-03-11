import './style.css'
import Navbar from 'react-bootstrap/Navbar';
import { Nav, Container } from 'react-bootstrap';


export default function Header() {

    return (
        <Navbar className="header" sticky="top" bg="primary" variant="light">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link>Inicio</Nav.Link>
                    <Nav.Link>Nueva prenda</Nav.Link>
                    <Nav.Link>Mi amario</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}