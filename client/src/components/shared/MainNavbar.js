import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LogoNavImage, NavbarContainer } from "./Style"

const MainNavbar = () => {
    
    return (
        <>
            <Navbar 
                collapseOnSelect 
                expand="lg" 
                sx={{ background: "primary", color: "secondary" }}
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
                    <Nav className="me-auto" sx={{ color: "secondary" }}>
                        <Nav.Link 
                            href="/"
                            sx={{ color: "secondary" }}
                        >Home</Nav.Link>
                        <Nav.Link 
                            href="/about"
                            sx={{ color: "secondary" }}
                        >About Me</Nav.Link>
                        <NavDropdown 
                            title={
                                <span sx={{ color: "secondary" }}>Projects</span>
                            } 
                            id="collasible-nav-dropdown"
                        >
                            <NavDropdown.Item 
                                href="https://github.com/Jordan-Holm"
                                target="_blank"
                                rel="noopener noreferrer"  
                            >
                                GitHub
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Header>Web Development</NavDropdown.Header>
                            <NavDropdown.Item 
                                href="https://github.com/Jordan-Holm/aves_braids"
                                target="_blank"
                                rel="noopener noreferrer"    
                            >
                                Ave's Braids Source Code (In Development)
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Header>Game Development</NavDropdown.Header>
                            <NavDropdown.Item 
                                href="https://crunch-captain.itch.io/"
                                target="_blank"
                                rel="noopener noreferrer" 
                            >
                                Coin Thief
                            </NavDropdown.Item>
                            <NavDropdown.Item 
                                href="https://github.com/Jordan-Holm/UVU_DGM1610_Fall2021/tree/main/DGM-1610%20PERSONAL%20PROJECT/Assets/Scripts"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Coin Thief Source Code
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <NavDropdown 
                            title={
                                <span sx={{ color: "secondary" }}>Blog</span>
                            }
                            id="collasible-nav-dropdown"
                        >
                            <NavDropdown.Item 
                                href="https://github.com/Jordan-Holm"
                                target="_blank"
                                rel="noopener noreferrer"     
                            >
                                GitHub
                            </NavDropdown.Item>
                            <NavDropdown.Item 
                                href="https://www.linkedin.com/in/jordanleeholm/"
                                target="_blank"
                                rel="noopener noreferrer"     
                            >
                                LinkedIn
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Header>Game Development</NavDropdown.Header>
                            <NavDropdown.Item 
                                href="https://crunch-captain.itch.io/"
                                target="_blank"  
                                rel="noopener noreferrer"   
                            >
                                Itch.Io
                            </NavDropdown.Item>
                            <NavDropdown.Item 
                                href="https://sketchfab.com/10790501"
                                target="_blank"  
                                rel="noopener noreferrer"
                            >
                                SketchFab
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link 
                            eventKey={2} 
                            href="/contact"
                            sx={{ color: "secondary" }}
                        >
                            Contact  Me
                        </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default MainNavbar;