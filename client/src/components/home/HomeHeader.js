import { Image, Container, Row, Col} from 'react-bootstrap';

const HomeHeader = () => (
    <>
        <Container  md='6' sm='12'>
            <Row>
                <Col>
                    <Row>
                        <h1>ABOUT</h1>
                    </Row>
                    <Row>
                        <Container>
                            <Row>
                                <p>Who: Jordan Lee Holm</p>
                            </Row>
                            <Row>
                                <p>What: Full-Stack Developer</p>
                            </Row>
                            <Row>
                                <p>Where: Provo, Utah</p>
                            </Row>
                            <Row>
                                <p>When: 2022 - PRESENT</p>
                            </Row>
                            <Row>
                                <p>Why: Passion and personal growth</p>
                            </Row>
                        </Container>
                    </Row>
                </Col>
                <Col>
                    <Image 
                        src='https://images.unsplash.com/photo-1657299170964-205905bb0940?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
                        width='350px'
                        height='250px'
                    />
                </Col>
            </Row>
        </Container>
    </>
)

export default HomeHeader;