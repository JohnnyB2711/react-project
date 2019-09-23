import React from 'react';
import 'rc-pagination/assets/index.css';
import {getTopRatedMovies} from '../actions'
import MovieList from "../components/MovieList";

class TopRatedMovies extends React.Component {
    render() {
        return <MovieList getFunction={getTopRatedMovies}/>
    }
}
export default TopRatedMovies