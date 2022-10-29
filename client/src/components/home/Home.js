import HomeHeader from "./HomeHeader";
import HomeAbout from "./HomeAbout";

const Home = () => (
    <>
        <HomeHeader />
        <hr style={{
            margin: "20px",
            border: "5px solid #272201",
            borderRadius: "5px"
        }}/>
        <HomeAbout />
    </>
)

export default Home;