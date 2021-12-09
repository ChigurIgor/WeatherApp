import {Link} from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap";

const NavbarComponent = () => {
    return (
            <div className="NavbarComponent">
                <Nav.Link  as={Link} className='linkNav'  to='/' >Weather</Nav.Link>
                <Nav.Link  as={Link} className='linkNav'  to='/favourites' >Fafourites</Nav.Link>
            </div>
    )

}

export default NavbarComponent;