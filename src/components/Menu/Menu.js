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
    state={
        genres:[]
    }
    componentDidMount() {
        Store.addGenreListener((items)=>{
            this.setState({
                genres:Store.getGenre()
            })
        })

    }
    componentWillUnmount(){
        Store.removeGenreListener()
    }
    CheckGenre = (item) => {

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
                        <NavDropdown title="Genre" id='/collasible-nav-dropdown'>
                            {
                                this.state.genres.map((item) => {
                                    this.Check(item)
                                    return <NavDropdown.Item key={item.id} href={`/genre/${item.id}`}>{item.name}</NavDropdown.Item>
                                })
                            }
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }

}
export default Menu