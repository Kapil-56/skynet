import logo from './img/logo1.png'
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll'





export default function Header() {

    return (
        <>
            <Navbar className='shadow-sm  bg-body rounded' fixed='top' bg="light" expand="lg">
                <Container className='container-fluid'>
                    <Navbar.Brand href='/'>
                        <Link
                            smooth={true}
                            // hashSpy={true}
                            offset={-101}
                            duration={2} to='home'>
                            <img src={logo} alt="logo" width="60"
                                height="60"
                                className="d-inline-block align-top" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='mx-auto'>
                            <Nav.Link><Link
                                smooth={true}
                                hashSpy={true}
                                offset={-100}
                                duration={2} to='home'>Home</Link></Nav.Link>
                            <Nav.Link><Link
                                smooth={true}
                                // hashSpy={true}
                                offset={-100}
                                duration={2} to='services'>Services</Link></Nav.Link>

                            {/* <Nav.Link href="#CardInfo">Services</Nav.Link> */}
                            <NavDropdown title="Plans" id="basic-nav-dropdown">
                                <NavDropdown.Item >
                                    <Link
                                        smooth={true}
                                        // hashSpy={true}
                                        offset={-100}
                                        duration={2} to='plans'>Broadband</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item >
                                    <Link
                                        smooth={true}
                                        // hashSpy={true}
                                        offset={-100}
                                        duration={2} to='plans'>Digital Cable TV</Link>

                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link>
                                <Link
                                    smooth={true}
                                    // hashSpy={true}
                                    offset={-100}
                                    duration={2} to='footer'>Contact</Link>
                            </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
