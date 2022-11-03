import AboutHeader from "./AboutHeader";
import AboutDesc from "./AboutDesc";

const About = () => (
    <>
        <AboutHeader />
        <hr style={{
            margin: "20px",
            border: "5px solid #272201",
            borderRadius: "5px"
        }}/>
        <AboutDesc />
    </>
)

export default About;