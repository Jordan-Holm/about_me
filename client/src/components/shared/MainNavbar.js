import { Link } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown, Image} from "react-bootstrap";
import { LogoNavImage, NavbarContainer } from "./Style"

const MainNavbar = () => (
    <>
        <Navbar 
            collapseOnSelect 
            expand="lg" 
            bg="dark" 
            variant="dark"
            as={NavbarContainer}
            >
            <Container>
                <Navbar.Brand href="/">
                    <LogoNavImage 
                        alt="JhLogo"
                        src="https://res.cloudinary.com/dotykc1ws/image/upload/v1667078190/Personal%20Site/Jordan_Holm-2_wpjalb.png"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About Me</Nav.Link>
                    <NavDropdown title="Projects" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="https://github.com/Jordan-Holm">
                            GitHub
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Header>Web Development</NavDropdown.Header>
                        {/* <NavDropdown.Item href="">
                            House of Sweets
                        </NavDropdown.Item> */}
                        <NavDropdown.Divider />
                        <NavDropdown.Header>Game Development</NavDropdown.Header>
                        <NavDropdown.Item href="https://crunch-captain.itch.io/">
                            Coin Thief
                        </NavDropdown.Item>
                        <NavDropdown.Item href="https://github.com/Jordan-Holm/UVU_DGM1610_Fall2021/tree/main/DGM-1610%20PERSONAL%20PROJECT/Assets/Scripts">
                            Coin Thief Source Code
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <NavDropdown title="Blog" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="https://github.com/Jordan-Holm">
                            GitHub
                        </NavDropdown.Item>
                        <NavDropdown.Item href="https://www.linkedin.com/in/jordanleeholm/">
                            LinkedIn
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Header>Game Development</NavDropdown.Header>
                        <NavDropdown.Item href="https://crunch-captain.itch.io/">
                            Itch.Io
                        </NavDropdown.Item>
                        <NavDropdown.Item href="https://sketchfab.com/10790501">
                            SketchFab
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link eventKey={2} href="/contact">
                        Contact  Me
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
)

export default MainNavbar;