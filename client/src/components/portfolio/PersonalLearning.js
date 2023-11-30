import { Accordion, Container } from "react-bootstrap";
import { CardImage, cardContainer } from "../shared/Style";


const PersonalLearning = () => (
    <Container as={cardContainer}>
        <h1>Personal Learning</h1>
        <h3>Dev Point Labs (Student)</h3>
        <p>Enrolled: 2022 Fall</p>
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Certificate</Accordion.Header>
                <Accordion.Body>
                    <CardImage 
                        alt="DPL Certificate"
                        src="https://res.cloudinary.com/dotykc1ws/image/upload/v1699747189/Personal%20Site/d5lfzsibaeqgu16nkth1.png"
                    />
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        <h3>Dev Point Labs (Employee)</h3>
        <p>Position: Teacher's Assistant</p>
        <p>Employeed: 2022 Winter Cohort</p>
        <h3>UVU - Certificate of Proviciency - Digital Media</h3>
        <p>Rewarded: December 18, 2021</p>
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Certificate</Accordion.Header>
                <Accordion.Body>
                    <CardImage 
                        alt="Digital Media Certificate"
                        src="https://res.cloudinary.com/dotykc1ws/image/upload/v1701289026/Screenshot_2023-11-29_131622_g9srmu.png"
                    />
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        <h3>NSLS Member</h3>
        <p>Joined: 2021 Fall</p>
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Certificate</Accordion.Header>
                <Accordion.Body>
                    <CardImage 
                        alt="NSLS Certificate"
                        src="https://res.cloudinary.com/dotykc1ws/image/upload/v1699751525/PXL_20231112_011043671_vbmskg.jpg"
                    />
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </Container>
)

export default PersonalLearning;