import React from 'react';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import SearchMovies from "./pages/SearchMovies";
import {Route, Switch} from 'react-router-dom'
import TopRatedMovies from "./pages/TopRatedMovies";
import UpcomingMovies from "./pages/UpcomingMovies";
import PopularMovies from "./pages/PopularMovies";
import ViewedMovies from "./pages/ViewedMovies";
import PlannedMovies from "./pages/PlannedMovies";
import SearchByGenre from "./pages/SearchByGenre";
import Login from "./pages/_Unused/Login";
import 'bootstrap/dist/css/bootstrap.css'
import '../src/pages/PagesStyle.scss';
import {getPlanedAndViewedMovies} from './actions'
import "react-popupbox/dist/react-popupbox.css"
import {withTranslation} from 'react-i18next';
import {Container} from "react-bootstrap";
import Menu from "./components/Menu/Menu";

class App extends React.Component {
    state = {
        inputValue: '',
    };

    componentDidMount() {
        getPlanedAndViewedMovies()
    }

    updateInputValue = (value) => {
        this.setState({
            inputValue: value
        })
    };

    render() {
        return (
            <Container>
                <Header inputValue={this.updateInputValue}/>
                <Menu/>
                <Switch>
                    <Route exact path='/' component={TopRatedMovies}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/upcoming' component={UpcomingMovies}/>
                    <Route path='/popular' component={PopularMovies}/>
                    <Route path='/viewed' component={ViewedMovies}/>
                    <Route path='/planed' component={PlannedMovies}/>
                    <Route path='/genre/:genre' component={SearchByGenre}/>
                    <Route path='/search/:line' component={SearchMovies}/>
                </Switch>
                <Footer/>
            </Container>
        )
    }
}

export default withTranslation('translations')(App);