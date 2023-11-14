import { Container, Row, Col } from "react-bootstrap";
import { cardContainer, cardImageContainer, CardImage, cardText } from "../shared/Style";

const HomeAbout = () => (
    <Container as={cardContainer}>
        <Row>
            <Col as={cardImageContainer}>
                <CardImage 
                    alt="aboutMeImage"
                    src="https://res.cloudinary.com/dotykc1ws/image/upload/v1667081714/Personal%20Site/312450834_3345620175684328_5630561378556871396_n_tiqdgx.jpg"
                />
            </Col>
            <Col as={cardText}>
                <h3>About Me</h3>
                <p><strong>Who</strong> | Jordan Holm</p>
                <p><strong>What</strong> | Indie Developer & Student</p>
                <p><strong>When</strong> |  2022 - Present</p>
                <p><strong>Where</strong> | Provo, Utah</p>
                <p><strong>Why</strong> | Personal & Professional growth</p>
            </Col>
        </Row>
    </Container>
)

export default HomeAbout;