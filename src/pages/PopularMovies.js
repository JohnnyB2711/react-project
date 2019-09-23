import React from 'react';
import 'rc-pagination/assets/index.css';
import {getPopularMovies} from '../actions'
import MovieList from "../components/MovieList";

class PopularMovies extends React.Component {
    render() {
        return <MovieList getFunction={getPopularMovies}/>
    }
}

export default PopularMovies