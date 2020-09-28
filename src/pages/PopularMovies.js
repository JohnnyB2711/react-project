import React from 'react';
import 'rc-pagination/assets/index.css';
import {getPopularMoviesF} from '../store/actions/movies'
import {getPopularMovies} from '../actions'
import MovieList from "../components/MovieList";
import {useTranslation} from "react-i18next";


const PopularMovies = (props) => {
    const {t} = useTranslation();
    return (
        <MovieList name={t('popular')} getFunction={getPopularMovies} getMoviesFunction={getPopularMoviesF}/>
    )

};
export default PopularMovies
/*
import React from 'react';
import 'rc-pagination/assets/index.css';
import {getPopularMovies} from '../actions'
import MovieList from "../components/MovieList";
import {withTranslation} from "react-i18next";

class PopularMovies extends React.Component {
    render() {
        const {t} = this.props;
        return <MovieList name={t('popular')} getFunction={getPopularMovies}/>
    }
}

export default withTranslation('translations')(PopularMovies)*/
