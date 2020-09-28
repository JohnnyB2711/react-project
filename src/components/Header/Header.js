import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {Button, FormControl, NavDropdown, Container} from 'react-bootstrap';
import './Header.scss'
import {withRouter} from 'react-router';
import {connect} from "react-redux";
import {compose} from "redux";
import {withTranslation} from "react-i18next";
import {logoutUser} from "../../store/actions/auth";
import i18n from '../../localization/i18n';
class Header extends React.Component {
    state = {
        inputValue: '',
        currentLanguage: ''
    };

    componentDidMount() {
        console.log(i18n);
        this.setState({currentLanguage: i18n.language}, () => {
            console.log('this.state.currentLanguage' + this.state.currentLanguage)
        })
    }

    updateInputValue = (event) => {
        this.setState({value: event.target.value});
        this.props.inputValue(this.state.inputValue)

    };
    searchFilms = (line) => {
        this.props.history.push(`/search/${line}`);
    };
    logoutUser = () => {
        this.props.logout();
        this.props.history.push('/login');
    };
    test = () => {

    };
    languages = () => {
        return this.props.languages.filter(lg => lg.code !== this.state.currentLanguage)
    };
    currentLanguages = () => {
        return this.state.currentLanguage && this.props.languages.find(lg => lg.code === this.state.currentLanguage).name
    };
    changeLanguage = (lng) => {
        i18n.changeLanguage(lng.code);
        this.setState({currentLanguage: i18n.language})
    };

    render() {
        const {t} = this.props;
        return (
            <header>
                <Container>
                    <div className='top-block'>
                        <div className='search-block'>
                            <FormControl
                                placeholder={t('search-placeholder')}
                                onChange={this.updateInputValue}/>
                            <Button onClick={() => this.searchFilms(this.state.value)}/>
                        </div>
                       {/* {
                            this.props.isAuth ? <NavDropdown title={this.props.user.name} id="collasible-nav-dropdown">
                                    <NavDropdown.Item><Link
                                        to={`/profile/${this.props.user.userId}`}>Profile</Link></NavDropdown.Item>
                                    <NavDropdown.Divider/>
                                    <NavDropdown.Item onClick={this.logoutUser}>Logout</NavDropdown.Item>
                                </NavDropdown>
                                :
                                <Link to='/login'>Login</Link>
                        }*/}
                        <NavDropdown title={this.currentLanguages()} id='/collasible-nav-dropdown'>
                            {
                                this.languages().map((lg, index) => {
                                    return <NavDropdown.Item
                                        onClick={() => this.changeLanguage(lg)}
                                        key={index}>{lg.name}
                                    </NavDropdown.Item>
                                })
                            }
                        </NavDropdown>
                    </div>
                </Container>

            </header>
        )
    }
}

const mapStateToProps = store => {
    return {
        user: store.auth.user,
        isAuth: store.auth.isAuth,
        languages: store.languages.languages,
        currentLng: store.languages.currentLanguage
    }
};
const mapDispatchToProps = (dispatch) => ({
    logout: (data) => dispatch(logoutUser(data))
});

export default compose(
    withRouter,
    withTranslation('translations'),
    connect(mapStateToProps, mapDispatchToProps)
)(Header);