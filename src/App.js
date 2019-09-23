import React from 'react';
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Footer from './components/Footer/Footer'
import SearchMovies from "./pages/SearchMovies";
import {Route, Switch} from 'react-router-dom'
import TopRatedMovies from "./pages/TopRatedMovies";
import UpcomingMovies from "./pages/UpcomingMovies";
import PopularMovies from "./pages/PopularMovies";
import ViewedMovies from "./pages/ViewedMovies";
import PlannedMovies from "./pages/PlannedMovies";
import SearchByGenre from "./pages/SearchByGenre";
import 'bootstrap/dist/css/bootstrap.css'
import '../src/pages/PagesStyle.scss';
import {getPlanedAndViewedMovies, downloadGenres} from './actions'

class App extends React.Component {
    state = {
        inputValue: ''
    };

    componentDidMount() {
        downloadGenres();
        getPlanedAndViewedMovies()
    }

    updateInputValue = (value) => {
        this.setState({
            inputValue: value
        })
    };

    render() {
        return (
            <div className='container col-10'>

                <Header inputValue={this.updateInputValue}/>

                <Menu/>
                <Switch>
                    <Route exact path='/' component={TopRatedMovies}/>
                    <Route path='/upcoming' component={UpcomingMovies}/>
                    <Route path='/popular' component={PopularMovies}/>
                    <Route path='/viewed' component={ViewedMovies}/>
                    <Route path='/planed' component={PlannedMovies}/>
                    <Route path='/genre/:genre' component={SearchByGenre}/>
                    <Route path='/search/:line' component={SearchMovies}/>
                </Switch>
                <Footer/>
            </div>
        )
    }
}

export default App;