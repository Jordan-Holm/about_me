import { Container, Row, Col, Image } from "react-bootstrap";
import { aboutCardContainer, cardContainer } from "../shared/Style";
const AboutDesc = () => (
    <Container>
        <Container as={cardContainer}>
            <Col>
                <h3>About Me</h3>
                <p>
                    &emsp;Hello there, <span style={{ color: '#bbc3bc' }}>(General Kenobi)</span> my name is Jordan and I'm an up & coming Junior Developer.
                    I'm very passionate about two things, #1 music, and #2
                    creating applications through code! I currently work full-time
                    as a Guitar Luthier / Team Lead. I'm in charge of the production
                    of all acoustic guitar bodies and all of the electric guitars/basses.
                    Then in the afternoons I work part-time as a TA of a web development course at DevPoint Labs! 
                    It's a super fulfilling role, allowing me to help others learn the development process;
                    all while expanding my skill set.  In my free time, if I'm not working on 
                    personal projects, I'm playing video games, working on cars, or spending
                    time with my family and friends.
                </p>
            </Col>
        </Container>
        <Row 
            style={{ 
                marginInline: "auto",
                marginLeft: "5%",
                marginRight: "5%"
            }}
            xs={1} sm={1} md={1} lg={2}
        >
            <Col>
                    <Col as={aboutCardContainer}>
                        <h3>Skill Set</h3>
                        <p>React</p>
                        <p>Ruby / Ruby on Rails</p>
                        <p>Python</p>
                        <p>C#</p>
                        <p>PostgreSQL</p>
                        <p>Unity Game Engine</p>
                    </Col>

            </Col>
            <Col>
                    <Col as={aboutCardContainer}>
                        <h3>Career Goals</h3>
                        <p>Build portfolio with freelance work</p>
                        <p>Find a mentor</p>
                        <p>Earn my first junior developer position</p>
                        <p>Help mentor someone else in the industry</p>
                        <p>Work my way up to a team lead position</p>
                    </Col>

            </Col>
        </Row>
        <Row
            style={{ 
                marginInline: "auto",
                marginLeft: "5%",
                marginRight: "5%"
            }}
            xs={1} sm={1} md={1} lg={2}
        >
            <Col>
                <Col as={aboutCardContainer}>
                    <h3>Work Experience</h3>
                    <p>
                        <strong>Klos Guitars</strong><br />
                        06/2022 - Current<br />
                        Guitar luthier & Team Lead
                    </p>
                    <p>
                        <strong>DevPoint Labs</strong><br />
                        11/2022 - Current<br />
                        Teacher's Assistant
                    </p>
                </Col>
            </Col>
            <Col>
                <Col as={aboutCardContainer}>
                    <h3>Higher Education</h3>
                    <p>
                        <strong>Utah Valley University</strong><br />
                        01/2021 - Current<br />
                        Major - Game Development<br />
                        Minor - Computer Science<br />
                    </p>
                    <p>
                        <strong>DevPoint Labs</strong><br />
                        06/2022 - 10/2022<br />
                        Certificate - Full Stack Development
                    </p>
                </Col>
            </Col>
        </Row>
    </Container>
)

export default AboutDesc;