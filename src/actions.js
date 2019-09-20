import axios from 'axios'
import Dispatcher from './dispatcher';

const HOST_MOVIE_DB = "https://api.themoviedb.org/3";
const SERVER_HOST = "http://localhost/api/movie";
const API_KEY = "ac24c5f255eb805f019fbfdd3539c068";

export async function getPlannedMovies(pageNumber) {
    const {data} = await axios.get(`${SERVER_HOST}/planned?page=${pageNumber}`);
    return data
}

export async function getViewedMovies(pageNumber) {
    const {data} = await axios.get(`${SERVER_HOST}/viewed?page=${pageNumber}`);
    return data
}

export async function getPlanedAndViewedMovies() {
    try {
        const {data} = await axios.get(`${SERVER_HOST}/viewedandplanned`);
        Dispatcher.dispatch({
            action: 'LOAD_SELECTED_FILMS',
            films: data
        });
    } catch (e) {
        console.log(e)
    }
    //return data
}

export async function downloadGenres() {
    try {
        const {data} = await axios.get(`${HOST_MOVIE_DB}/genre/movie/list?language=en-US&api_key=${API_KEY}&language=en-US`);
        Dispatcher.dispatch({
            action: 'LOAD_GENRES',
            genre: data.genres
        });
    } catch (e) {
        console.log(e)
    }
    //return data
}

export async function searchMovie(line, pageNumber) {
    const {data} = await axios.get(`${HOST_MOVIE_DB}/search/movie/?api_key=${API_KEY}&language=en-US&page=${pageNumber}&query=${line}`);
    return data
}

export async function getPopularMovies(pageNumber) {
    const {data} = await axios.get(`${HOST_MOVIE_DB}/movie/popular?api_key=${API_KEY}&language=en-US&page=${pageNumber}`);
    return data
}

export async function searchByGenre(line, pageNumber) {
    const {data} = await axios.get(`${HOST_MOVIE_DB}/discover/movie?api_key=${API_KEY}&language=en-US&page=${pageNumber}&with_genres=${line}`);
    return data
}

export async function getTopRatedMovies(pageNumber) {
    const {data} = await axios.get(`${HOST_MOVIE_DB}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${pageNumber}`);
    return data
}

export async function getUpcomingMovies(pageNumber) {
    const {data} = await axios.get(`${HOST_MOVIE_DB}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${pageNumber}`);
    return data
}
