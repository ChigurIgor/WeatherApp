import {Link} from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap";
import styles from './styles.module.css'
import classNames from 'classnames';

const NavbarComponent = () => {
    return (
            <div className="NavbarComponent">
                <Navbar className={styles.navbar} collapseOnSelect expand="lg" bg=""
                        variant="light" >
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.toggle} />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className={styles.meAuto}>
                                <Nav.Link
                                    as={Link}
                                    className = {
                                        classNames([
                                            'SectionNavigation-Item',
                                            styles.Section
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
                                            styles.Section
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