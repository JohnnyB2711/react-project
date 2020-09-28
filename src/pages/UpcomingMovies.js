import React from 'react';
import 'rc-pagination/assets/index.css';
import {getUpcomingMovies} from '../actions'
import MovieList from "../components/MovieList";
import {withTranslation} from "react-i18next";

class UpcomingMovies extends React.Component {
    render() {
        return <MovieList getFunction={getUpcomingMovies}/>
    }
}

export default withTranslation('translations')(UpcomingMovies)