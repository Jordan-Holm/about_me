import { Image, Container, Row, Col} from 'react-bootstrap';
import { headerContainer, barrierLine } from '../shared/Style';
const HomeHeader = () => (
    <>
        <Container  as={headerContainer}>
            <Row>
                <h1>“Experience is the name everyone gives to their mistakes.” – Oscar Wilde</h1>
            </Row>
        </Container>

    </>
)

export default HomeHeader;