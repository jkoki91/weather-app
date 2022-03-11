import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import clothesSun1 from '../../assets/clothes/Property 1=1 ☀️ Sol formal 7-22 º.png'
import clothesSun2 from '../../assets/clothes/Property 1=2☀️ Sol formal 7-22  º.png'
import clothesSun3 from '../../assets/clothes/Property 1=3☀️ Sol formal 7-22  º.png'
import clothesSun4 from '../../assets/clothes/Property 1=4☀️ Sol formal 7-22  º.png'
import './style.css'

export default function ClothesRecommendation() {

    return (
        <Container >
            <Row>
                <Col xxl={6} >
                    <Image className="main-img" src={clothesSun1}></Image>
                </Col>
            </Row>

            <Container>
                <Row >
                    <Col xxl={6}>
                        <Image src={clothesSun2}></Image>
                        <Image className="mr-2 ml-2" src={clothesSun3}></Image>
                        <Image src={clothesSun4}></Image>
                    </Col>
                </Row>

            </Container>


        </Container>
    )
}