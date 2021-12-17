import {Link} from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap";


const NavbarComponent = () => {
    return (
            <div className="NavbarComponent">
                <Navbar className='navbar' collapseOnSelect expand="lg" bg=""
                        variant="light" >
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link  as={Link} className='SectionNavigation-Item Section'  to='/' >Weather</Nav.Link>
                                <Nav.Link  as={Link} className='SectionNavigation-Item Section'  to='/favourites' >Fafourites</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        // <Navbar bg="light" expand="lg">
        //     <Container>
        //         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //         <Navbar.Collapse id="basic-navbar-nav">
        //             <Nav className="me-auto">
        //                 <Nav.Link href="#home">Home</Nav.Link>
        //                 <Nav.Link href="#link">Link</Nav.Link>
        //                 <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        //                     <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        //                     <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        //                     <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        //                     <NavDropdown.Divider />
        //                     <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        //                 </NavDropdown>
        //             </Nav>
        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar>
    )

}

export default NavbarComponent;