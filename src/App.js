import React from 'react';
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Footer from './components/Footer/Footer'
import SearchMovies from "./pages/SearchMovies";
import 'bootstrap/dist/css/bootstrap.css'
import {Route, Switch} from 'react-router-dom'
import TopratedMovies from "./pages/TopratedMovies";
import UpcomingMovies from "./pages/UpcomingMovies";
import PopularMovies from "./pages/PopularMovies";
import ViewedMovies from "./pages/ViewedMovies";
import Planed from "./pages/PlannedMovies";
import SearcheByGenre from "./pages/SearcheByGenre";
import axios from "axios";
import Dispatcher from './dispatcher';

const API_KEY = "ac24c5f255eb805f019fbfdd3539c068";

class App extends React.Component {
    state = {
        inputValue: ''
    };
    componentDidMount() {
        this.DownloadGenres();
        this.GetPlanedAndViewedFilms()
    }

    GetPlanedAndViewedFilms = async () => {
        try {
            const {data} = await axios.get("http://localhost/api/movie/viewedandplanned");
            Dispatcher.dispatch({
                action: 'LOAD_SELECTED_FILMS',
                films: data
            });
        } catch (e) {
            console.log(e)
        }
    };

    DownloadGenres = async () => {
        try {
            const {data} = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=${API_KEY}&language=en-US`);
            Dispatcher.dispatch({
                action: 'LOAD_GENRES',
                genre: data.genres
            });
        } catch (e) {
            console.log(e)
        }
    };

    UpdateInputValue = (value) => {
        this.setState({
            inputValue: value
        })
    };

    render() {
        return (
            <div className='container col-10'>

                <Header InputValue={this.UpdateInputValue}/>

                <Menu/>
                <Switch>
                    <Route exact path='/' component={TopratedMovies}/>
                    <Route path='/upcoming' component={UpcomingMovies}/>
                    <Route path='/popular' component={PopularMovies}/>
                    <Route path='/viewed' component={ViewedMovies}/>
                    <Route path='/planed' component={Planed}/>
                    <Route path='/genre/:Genre' component={SearcheByGenre}/>
                    <Route path='/search/:Line' component={SearchMovies}/>
                </Switch>
                <Footer/>
            </div>
        )
    }
}

export default App;