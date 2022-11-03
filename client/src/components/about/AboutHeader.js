import { Container } from "react-bootstrap";
import { headerContainer } from "../shared/Style";

const AboutHeader = () => (
    <Container as={headerContainer}>
        <h1>"First solve the problem. Then, write the code." - John Johnson</h1>
    </Container>
)

export default AboutHeader;