import React from 'react';
import 'rc-pagination/assets/index.css';
import {getTopRatedMovies} from '../store/actions/movies'
import MovieList from "../components/MovieList";
import {useTranslation} from "react-i18next";


const TopRatedMovies = (props) => {
    const {t} = useTranslation();
    return (
        <MovieList name={t('top-rated')} getFunction={getTopRatedMovies}/>
    )

};
export default TopRatedMovies
/*
class TopRatedMovies extends React.Component {
    render() {
        return <MovieList getFunction={getTopRatedMovies}/>
    }
}

export default withTranslation('translations')(TopRatedMovies)*/
