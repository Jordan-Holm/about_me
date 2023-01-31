import { Container, Row } from 'react-bootstrap';
import { headerContainer, } from '../shared/Style';

const HomeHeader = () => {

    const quotes = [
        '"Experience is the name everyone gives to their mistakes.” – Oscar Wilde',
        '"First solve the problem. Then, write the code." - John Johnson',
        '"It’s not a bug; it’s an undocumented feature." - Anonymous',
        "Programmer: A machine that turns coffee into code.",
        "Coding isn't always #000000 and #FFFFFF",
        "If at first you don’t succeed; call it version 1.0",
        '"Controlling complexity is the essence of computer programming." - Brian Kernighan'
    ]
    const randomQuote = (array) => {
        return array[Math.floor(Math.random()*array.length)];
    }
    return (
        <>
            <Container  as={headerContainer}>
                <Row>
                    <h1>{ randomQuote(quotes) }</h1>
                </Row>
            </Container>

        </>

    )
}

export default HomeHeader;