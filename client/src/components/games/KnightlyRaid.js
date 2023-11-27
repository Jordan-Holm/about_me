import { Container, Row } from "react-bootstrap";
import { cardContainer } from "../shared/Style";


const KnightlyRaid = () => (
    <Row>
        <Container as={cardContainer}>
            <h1>Knightly Raid</h1>
            <iframe frameborder="0" src="https://itch.io/embed-upload/9144093?color=ffffff" allowfullscreen="" width="1080" height="810"><a href="https://real-tale-studio.itch.io/knightly-raid">Play Knightly Raid on itch.io</a></iframe>
        </Container>
    </Row>
)

export default KnightlyRaid;