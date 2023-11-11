import { Container, Accordion, Row, Col } from "react-bootstrap";
import { CardImage, cardContainer } from "../shared/Style";
const DGM1610 = () => (
    <Container as={ cardContainer }>
        <h1>DGM-1610 Scripting for Animation I</h1>
        <p>Grade: A</p>
        <p>Taken: 2021 Fall</p>
        <a href="https://github.com/Jordan-Holm/UVU_DGM1610_Fall2021/tree/main">DGM-1610 Github Repo</a>
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>First Person Project</Accordion.Header>
                <Accordion.Body>
                    <a href="https://github.com/Jordan-Holm/UVU_DGM1610_Fall2021/tree/main/Prototype%203%20-%20First%20Person%20-%20UVU%20DGM1610/Assets/Scripts">Scripts</a>
                    <Row>
                        <Col>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/TCzt0hgJyCU?si=N176tfFBHzE4HlFJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </Col>
                    </Row>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Top Down Project</Accordion.Header>
                <Accordion.Body>
                    <a href="https://github.com/Jordan-Holm/UVU_DGM1610_Fall2021/tree/main/Prototype%202%20-%20TOP%20DOWN%20-%20UVU%20DGM-1610/Assets/Scripts">Scripts</a>
                    <Row>
                        <Col>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/jaFD0NjKbNg?si=J_1znuv3TdeSFsBp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </Col>
                    </Row>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Tank Project</Accordion.Header>
                <Accordion.Body>
                    <a href="https://github.com/Jordan-Holm/UVU_DGM1610_Fall2021/tree/main/Prototype%201%20-%20Tank%20Game%20-%20UVU%20DMG1610/Assets/Scripts">Scripts</a>
                    <Row>
                        <Col>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/VQcK1rACZnA?si=G-I7FDPsK0xsjPp8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </Col>
                    </Row>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Personal Project</Accordion.Header>
                <Accordion.Body>
                    <Row>
                        <a href="https://github.com/Jordan-Holm/UVU_DGM1610_Fall2021/tree/main/DGM-1610%20PERSONAL%20PROJECT/Assets/Scripts">Scripts</a>
                    </Row>
                    <Row>
                        <a href="">Itch.Io</a>
                    </Row>
                    <Row>
                        <Col>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/THuUyAUIXF4?si=Kf0OtRVzMeTU19Qv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </Col>
                        <Col>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/h9UhPbz1srU?si=gEmM76P5JJYRH48O" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </Col>
                    </Row>
                    <CardImage 
                        alt="Gameplay Image"
                        src="https://res.cloudinary.com/dotykc1ws/image/upload/v1699738648/Personal%20Site/EKxZuX_yd6hvu.png"
                    />
                    <CardImage 
                        alt="How to Play 1"
                        src="https://res.cloudinary.com/dotykc1ws/image/upload/v1699738646/Personal%20Site/How_to_play_1_trqe4i.png"
                    />
                    <CardImage 
                        alt="How to Play 2"
                        src="https://res.cloudinary.com/dotykc1ws/image/upload/v1699738647/Personal%20Site/How_to_play_2_cd8qju.png"
                    />
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </Container>
)

export default DGM1610;