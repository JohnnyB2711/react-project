import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
import './Menu.scss'
import Store from "../../stores";

function MenuItem(props) {
    return (
        <Nav.Link href={props.href}>{props.text}</Nav.Link>
    )
}

class Menu extends React.Component{
    constructor(){
        super();
        this.state={
            genre:[]
        }
    }
    componentDidMount() {
        this.setState({
            genre:Store.getGenre()
        })
    }

    render(){
        return (
            <Navbar collapseOnSelect expand="md">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='MenuItems'>
                        <MenuItem text='Top rated' href='/toprated'/>
                        <MenuItem text='Upcoming' href='/upcoming'/>
                        <MenuItem text='Popular' href='/popular'/>
                        <MenuItem text='Viewed' href='/viewed'/>
                        <MenuItem text='Planned' href='/planed'/>
                        <NavDropdown title="Genre" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/genre/{ID_GENRE}">{}</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }

}
export default Menu