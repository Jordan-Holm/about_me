import { Container, Col } from "react-bootstrap"
import { cardContainer } from "../shared/Style";

const Contact = () => {
    const maskEmail = () => {
        let email = 'gmail.com'
        email = ( 'Jordanholm12' + '@' + email)
        return email;
    }

    return (
        <>
            <Container as={cardContainer}>
                <Col>
                    <h3>Contact Me</h3>
                    <p><strong>Email: </strong>{maskEmail()}</p>
                </Col>
            </Container>
        </>
    )
}

export default Contact;