import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import 'bootstrap/dist/css/bootstrap.css'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router';
import './Menu.scss'
import {useTranslation} from 'react-i18next';
import {getGenres} from "../../store/actions/movies";


const Menu = (props) => {
    const {t, i18n} = useTranslation();
    const dispatch = useDispatch();
    const initialState = {name: t('genre'), id: null};
    const [actionGenre, setActionGenre] = useState(initialState);
    const genres = useSelector(state => state.movies.genres);
    const useFetching = () => {
        useEffect(() => {
            dispatch(getGenres(i18n.language));
            console.log(actionGenre)
        }, [i18n.language]);
        useEffect(() => {
            if (actionGenre.id !== null) {
                setActionGenre(genres.find(el => el.id === actionGenre.id))
            } else setActionGenre(initialState)
        }, [genres])
    };
    useFetching();

    const navClick = (item) => {
        props.history.push(`/genre/${item.id}`);
        setActionGenre(item)
    };

    return (
        <Navbar collapseOnSelect expand="md">
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    <Link to='/'>{t('top-rated').toUpperCase()}</Link>
                    <Link to='/upcoming'>{t('upcoming').toUpperCase()}</Link>
                    <Link to='/popular'>{t('popular').toUpperCase()}</Link>
                    <Link to='/viewed'>{t('viewed').toUpperCase()}</Link>
                    <Link to='/planed'>{t('planned').toUpperCase()}</Link>
                    <NavDropdown title={actionGenre.name.toUpperCase()} id='/collasible-nav-dropdown'>
                        {
                            genres.map((item) => {
                                return <NavDropdown.Item
                                    onClick={() => {
                                        navClick(item)
                                    }}
                                    key={item.id}>{item.name.toUpperCase()}
                                </NavDropdown.Item>
                            })
                        }
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )

};
export default withRouter(Menu)
