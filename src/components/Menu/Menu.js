import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './Menu.scss'
import Store from "../../stores";
import {withRouter} from 'react-router';

class Menu extends React.Component {
    state = {
        genres: [],
        actionGenre: 'Genre'
    }

    componentDidMount() {
        Store.addGenreListener((items) => {
            this.setState({
                genres: Store.getGenre()
            })
        })

    }

    componentWillUnmount() {
        Store.removeGenreListener()
    }

    checkGenre = (item) => {
        this.setState({
            actionGenre: item.name
        })
    };

    render() {
        return (
            <Navbar collapseOnSelect expand="md">
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='MenuItems'>
                        <Link to='/'>Top rated</Link>
                        <Link to='/upcoming'>Upcoming</Link>
                        <Link to='/popular'>Popular</Link>
                        <Link to='/viewed'>Viewed</Link>
                        <Link to='/planed'>Planned</Link>
                        <NavDropdown title={this.state.actionGenre} id='/collasible-nav-dropdown'>
                            {
                                this.state.genres.map((item) => {
                                    return <NavDropdown.Item onClick={() => {
                                        this.props.history.push(`/genre/${item.id}`);
                                        this.checkGenre(item);
                                    }} key={item.id}>{item.name}</NavDropdown.Item>
                                })
                            }
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default withRouter(Menu)