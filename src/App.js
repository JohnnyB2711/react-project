import React from 'react';
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Footer from './components/Footer/Footer'
import SearchMovie from "./layouts/SearchMovie/SearchMovie";
import 'bootstrap/dist/css/bootstrap.css'
import {Route, Router, Switch} from 'react-router-dom'
import Toprated from "./layouts/Toprated/Toprated";
import Upcoming from "./layouts/Upcoming/Upcoming";
import Popular from "./layouts/Popular/Popular";
import Viewed from "./layouts/Viewed/Viewed";
import Planed from "./layouts/Planed/Planed";
import Genre from "./layouts/Genre/Genre";
import axios from "axios";
import Dispatcher from './dispatcher';

const API_KEY = "ac24c5f255eb805f019fbfdd3539c068";

class App extends React.Component {
    state = {
        inputValue: ''
    }

    componentDidMount() {
        this.getGenre();
    }

    getGenre = async () => {
        try {
            const {data} = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=${API_KEY}&language=en-US`);
            Dispatcher.dispatch({
                action: 'LOAD_GENRE',
                genre: data.genres
            });
        } catch (e) {
            console.log(e)
        }
    };
    updateValue = (value) => {
        this.setState({
            inputValue: value
        })
    }

    render() {
        return (
            <div className='container col-12'>

                <Header updateValue={this.updateValue}/>

                <Menu/>
                <Switch>
                    <Route exact path='/' component={Toprated}/>
                    <Route path='/upcoming' component={Upcoming}/>
                    <Route path='/popular' component={Popular}/>
                    <Route path='viewed' component={Viewed}/>
                    <Route path='planed' component={Planed}/>
                    <Route path='genre' component={Genre}/>
                    <Route path='/search' component={SearchMovie}/>
                </Switch>
                <Footer/>
            </div>
        )
    }
}

export default App;