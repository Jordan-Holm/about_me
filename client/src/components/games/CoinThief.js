import { Container, Row } from "react-bootstrap";
import { cardContainer } from "../shared/Style";


const CoinThief = () => (
    <Row>
        <Container as={cardContainer}>
            <h1>Coin Thief</h1>
            <iframe frameborder="0" src="https://itch.io/embed-upload/9097603?color=ffffff" allowfullscreen="" width="1440" height="1080"><a href="https://real-tale-studio.itch.io/coin-theif">Play Coin Theif on itch.io</a></iframe>
        </Container>
    </Row>
)

export default CoinThief;