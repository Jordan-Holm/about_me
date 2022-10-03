import { Link } from "react-router-dom";

const MainNavbar = () => (
    <>
        <ul>
            <Link to='/'>
                <li>Jordan Holm</li>
            </Link>
        </ul>
        <ul>
            <Link to='/blog'>
                <li>BLOG</li>
            </Link>
        </ul>
        <ul>
            <Link to='/portfolio'>
                <li>PORTFOLIO</li>
            </Link>
        </ul>
        <ul>
            <Link to='/about'>
                <li>ABOUT</li>
            </Link>
        </ul>
        <ul>
            <Link to='/contact'>
                <li>CONTACT</li>
            </Link>
        </ul>
    </>
)

export default MainNavbar;