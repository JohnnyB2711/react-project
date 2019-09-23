import React from 'react';
import 'rc-pagination/assets/index.css';
import MovieList from '../../src/components/MovieList'
import Store from "../stores";
import {getPopularMovies,getTopRatedMovies,getUpcomingMovies} from '../actions'

class MoviePages extends React.Component {
    render() {
        switch (this.props.match.params.name) {
            case 'upcoming':
                return (
                    <MovieList name='Upcoming movies' getFunction={getUpcomingMovies}/>
                )
            case 'popular':
                return (
                    <MovieList name='Popular movies' getFunction={getPopularMovies}/>
                )
            default :
                return (
                    <MovieList name='Top rated movies' getFunction={getTopRatedMovies}/>
                )

        }
    }
}
export default MoviePages