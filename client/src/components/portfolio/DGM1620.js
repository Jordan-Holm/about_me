import { Accordion, Carousel, Col, Container, Row } from "react-bootstrap";
import { CardImage, cardContainer } from "../shared/Style";


const DGM1620 = () => (
    <Container as={cardContainer}>
        <h1>DGM-1620 Survey of Animation</h1>
        <p>Grade: B</p>
        <p>Taken: 2021 Spring</p>
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Sketches</Accordion.Header>
                <Accordion.Body>
                    <Carousel variant="dark">
                        <Carousel.Item>
                            <CardImage 
                                alt="stance"
                                src="https://res.cloudinary.com/dotykc1ws/image/upload/v1699751932/Personal%20Site/DGM1620/Sketches/kzyh5isqvs9gzs3dcsjz.jpg"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <CardImage 
                                alt="Girl & Dog"
                                src="https://res.cloudinary.com/dotykc1ws/image/upload/v1699751932/Personal%20Site/DGM1620/Sketches/oxhaj1dpfyq23kspqo3x.jpg"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <CardImage 
                                alt="Zelda"
                                src="https://res.cloudinary.com/dotykc1ws/image/upload/v1699751930/Personal%20Site/DGM1620/Sketches/bwackgs5iwindkszijjx.jpg"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <CardImage 
                                alt="Face"
                                src="https://res.cloudinary.com/dotykc1ws/image/upload/v1699751930/Personal%20Site/DGM1620/Sketches/mzokf4viqeznc2nadzvq.jpg"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <CardImage 
                                alt="Thumbs up"
                                src="https://res.cloudinary.com/dotykc1ws/image/upload/v1699751929/Personal%20Site/DGM1620/Sketches/jmcse1e0hvth597wtqz9.jpg"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <CardImage 
                                alt="Future Girl"
                                src="https://res.cloudinary.com/dotykc1ws/image/upload/v1699751928/Personal%20Site/DGM1620/Sketches/ad2k1qxfaahidghrsvwf.jpg"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <CardImage 
                                alt="Monk"
                                src="https://res.cloudinary.com/dotykc1ws/image/upload/v1699751926/Personal%20Site/DGM1620/Sketches/h21bqy5aaograkoqtevo.jpg"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Animations</Accordion.Header>
                <Accordion.Body>
                    <Row>
                        <Col>
                            <h4>Ball Bounce W/ Tail</h4>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/fdOT_OvzuBA?si=lVr_HbIBjmZEiIhU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </Col>
                        <Col>
                            <h4>Walk</h4>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/WqlFQb3OQKM?si=3sn_hq-lbFQk9C_m" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </Col>
                    </Row>
                    <Carousel variant="dark">
                        <Carousel.Item>
                            <CardImage 
                                alt="Jump"
                                src="https://res.cloudinary.com/dotykc1ws/image/upload/v1699751945/Personal%20Site/DGM1620/Animations/krmdsigipphrbsopwznn.gif"
                            />
                            <Carousel.Caption>Puddle Jump Project</Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <CardImage 
                                alt="Weight Lifting"
                                src="https://res.cloudinary.com/dotykc1ws/image/upload/v1699751944/Personal%20Site/DGM1620/Animations/oz54bqwe2k31kc0lttsv.gif"
                            />
                            <Carousel.Caption>Weight Lifter Project</Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </Container>
)

export default DGM1620;