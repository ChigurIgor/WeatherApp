import {Link} from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap";
import {navbar, meAuto, Section, toggle} from './styles.module.css'
import classNames from 'classnames';

const NavbarComponent = () => {

    return (
           <div className="NavbarComponent">
                <Navbar className={navbar} collapseOnSelect expand="lg" bg=""
                        variant="light" >
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className={toggle} />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className={meAuto}>
                                <Nav.Link
                                    as={Link}
                                    className = {
                                        classNames([
                                            'SectionNavigation-Item',
                                            Section
                                            ]
                                        )
                                    }
                                    to='/'
                                >Weather</Nav.Link>
                                <Nav.Link
                                    as={Link}
                                    className = {
                                        classNames([
                                            'SectionNavigation-Item',
                                            Section
                                            ]
                                        )
                                    }
                                    to='/favourites'
                                >
                                    Fafourites</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
    )
}
export default NavbarComponent;