import { Accordion, Container } from "react-bootstrap";
import { cardContainer } from "../shared/Style";


const DGM1620 = () => (
    <Container as={cardContainer}>
        <h1>DGM-1620 Survey of Animation</h1>
        <p>Grade: B</p>
        <p>Taken: 2021 Spring</p>
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>TEST</Accordion.Header>
                <Accordion.Body>
                    
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>TEST</Accordion.Header>
                <Accordion.Body>

                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </Container>
)

export default DGM1620;