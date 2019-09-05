import React from 'react';
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Footer from './components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.css'
import {Route} from 'react-router-dom'
import Toprated from "./layouts/Toprated/Toprated";
import Upcoming from "./layouts/Upcoming/Upcoming";
import Popular from "./layouts/Popular/Popular";
import Viewed from "./layouts/Viewed/Viewed";
import Planed from "./layouts/Planed/Planed";
import Genre from "./layouts/Genre/Genre";
import axios from "axios";
import Dispatcher from './dispatcher'

const API_KEY = "ac24c5f255eb805f019fbfdd3539c068";

class App extends React.Component {
    async componentDidMount() {
        this.getGenre()
    }
    getGenre = async () => {
        try {
            const {data} = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=${API_KEY}&language=en-US`);
            console.log(data)
            //this.$store.commit('ADD_ITEMS', response.data);

            //передаем action в dispatcher
            Dispatcher.dispatch({
                action: getGenre,
                item: data
            });
        } catch {
            console.log('error')
        }
    };

    render() {
        return (
            <div className='container col-12'>
                <Header/>
                <Menu/>
                <Route path='/toprated' component={Toprated}/>
                <Route path='/upcoming' component={Upcoming}/>
                <Route path='/popular' component={Popular}/>
                <Route path='/viewed' component={Viewed}/>
                <Route path='/planed' component={Planed}/>
                <Route path='/genre' component={Genre}/>
                <Footer/>
            </div>
        )
    }
}

export default App;
