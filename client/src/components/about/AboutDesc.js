import { Container, Row, Col, Image } from "react-bootstrap";
import { cardContainer, cardImageContainer, CardImage } from "../shared/Style";
const AboutDesc = () => (
    <Container>
        <Container as={cardContainer}>
            <Col>
                <h3>About Me</h3>
                <p>
                    My name is Jordan and I'm an up & coming Junior Developer.
                    I'm very passionate about two things, #1 being music, and #2
                    creating applications through code! I currently work full time
                    as a guitar luthier (I build guitars) then do freelance web 
                    development in the evenings!
                </p>
            </Col>
        </Container>
        <Row>
            <Col>
                <Container as={cardContainer}>
                    <Col>
                        <h3>Full-Stack Development</h3>
                        <p>Skills</p>
                        <ul>
                            <li>React.js</li>
                            <li>Ruby</li>
                            <li>Python</li>
                            <li>C#</li>
                            <li>SQL</li>
                        </ul>
                    </Col>
                </Container>
            </Col>
            <Col>
                <Container as={cardContainer}>
                    <Col>
                        <h3>Career Goals</h3>
                        <ul>
                            <li>Build portfolio with freelance work</li>
                            <li>Find a mentor</li>
                            <li>Earn my first a junior developer position</li>
                            <li>Help mentor someone else in the industry</li>
                        </ul>
                    </Col>
                </Container>
            </Col>
        </Row>
    </Container>
)

export default AboutDesc;