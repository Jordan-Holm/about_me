import { Accordion, Row, Col, Carousel, Container } from "react-bootstrap";
import { cardContainer, CardImage } from "../shared/Style";


const DGM1110 = () => (
    <Container as={cardContainer}>
        <h1>DGM-1110 Digital Media Essentials I</h1>
        <p>Grade: A</p>
        <p>Taken: 2021 Spring</p>
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Audio</Accordion.Header>
                <Accordion.Body>
                    <Row>
                        <Col>
                            <h4>SoundScape Project</h4>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/uqwSUVAv08I?si=ugYv6_34PT_HTweJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </Col>
                        <Col>
                            <h4>Audio Final</h4>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/qW-lZ8B6SVg?si=5WN-FWmmbxxoKqY5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </Col>
                    </Row>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Photoshop</Accordion.Header>
                <Accordion.Body>
                    <Carousel variant="dark">
                        <Carousel.Item>
                            <CardImage 
                                alt="Magazine"
                                src="https://res.cloudinary.com/dotykc1ws/image/upload/v1699745597/Personal%20Site/DGM1110/vqgdwq6m92rbkrz9u2ju.jpg"
                            />
                            <Carousel.Caption>Magazine Cover Project</Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <CardImage 
                                alt="Remove Tree"
                                src="https://res.cloudinary.com/dotykc1ws/image/upload/v1699745651/Personal%20Site/DGM1110/mzoi5snxyo8ne6f5cxee.jpg"
                            />
                            <Carousel.Caption>Remove Tree Project</Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <CardImage 
                                alt="Pixel Art"
                                src="https://res.cloudinary.com/dotykc1ws/image/upload/v1699745479/Personal%20Site/DGM1110/bmsccxkeqqlcrgdndozl.jpg"
                            />
                            <Carousel.Caption>Pixel Art Project</Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <CardImage 
                                alt="Brush project"
                                src="https://res.cloudinary.com/dotykc1ws/image/upload/v1699745665/Personal%20Site/DGM1110/lurulfavsjwg6kbxfblh.jpg"
                            />
                            <Carousel.Caption>Brush Project</Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <CardImage 
                                alt="Filter Project"
                                src="https://res.cloudinary.com/dotykc1ws/image/upload/v1699745682/Personal%20Site/DGM1110/j7ilzqquupdomo56faoy.jpg"
                            />
                            <Carousel.Caption>Instagram Filter Project</Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <CardImage 
                                alt="Car Image"
                                src="https://res.cloudinary.com/dotykc1ws/image/upload/v1699750116/Personal%20Site/DGM1110/yqs6gooqlhtnoc7slgmq.jpg"
                            />
                            <Carousel.Caption>First Photoshop Project</Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Video</Accordion.Header>
                <Accordion.Body>
                    <Row>
                        <Col>
                            <h4>Tribute Video Project</h4>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/nE4m28L0uwQ?si=kNdT3UOf-Izb_yVI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </Col>
                        <Col>
                            <h4>Video Final</h4>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/68Zhx9YO4Y4?si=K196TizLN5IOD8NW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </Col>
                    </Row>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>InDesign</Accordion.Header>
                <Accordion.Body>
                    <Carousel variant="dark">
                        <Carousel.Item>
                            <CardImage 
                                alt="Recreate Logos"
                                src="https://res.cloudinary.com/dotykc1ws/image/upload/v1699745495/Personal%20Site/DGM1110/ngsyoyuwtybzhm8z3oso.jpg"
                            />
                            <Carousel.Caption>Recreate Logos Project</Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <CardImage 
                                alt="Create Logo"
                                src="https://res.cloudinary.com/dotykc1ws/image/upload/v1699745684/Personal%20Site/DGM1110/vdclyosfxbnors1mqhks.jpg"
                            />
                            <Carousel.Caption>Create Logo Project</Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <CardImage 
                                alt="About Me"
                                src="https://res.cloudinary.com/dotykc1ws/image/upload/v1699745567/Personal%20Site/DGM1110/jyn2jjbkz60wruthvd6y.jpg"
                            />
                            <Carousel.Caption>About Me Project</Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <CardImage 
                                alt="Service Project Logo"
                                src="https://res.cloudinary.com/dotykc1ws/image/upload/v1699749915/Personal%20Site/DGM1110/fziqnqidmhfxfftvxyfc.png"
                            />
                            <Carousel.Caption>Service Project Logo</Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <CardImage 
                                alt="Service Projcet"
                                src="https://res.cloudinary.com/dotykc1ws/image/upload/v1699750236/Personal%20Site/DGM1110/ze1un3spvmou2gavvcds.png"
                            />
                            <Carousel.Caption>Service Project</Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </Container>
)

export default DGM1110;