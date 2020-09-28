import axios from 'axios'
import Dispatcher from './dispatcher';

const HOST_MOVIE_DB = "https://api.themoviedb.org/3";
const SERVER_HOST = "http://localhost/api/movie";
const API_KEY = "ac24c5f255eb805f019fbfdd3539c068";

function getMovieDbUrl(url) {
    return (`${HOST_MOVIE_DB}${url}?api_key=${API_KEY}`);
}


function getBackendUrl(url) {
    return (`${SERVER_HOST}${url}`);
}

export async function getPlannedMovies(page) {
    const {data} = await axios.get(getBackendUrl('/planned'), {
        params: {
            page
        }
    });
    return data
}

export async function postPlannedMovie(movie) {
    try {
        await axios.post(getBackendUrl('/planned'), movie);
    } catch (e) {
        console.log(e)
    }
}

export async function getViewedMovies(page) {
    const {data} = await axios.get(getBackendUrl('/viewed'), {
        params: {
            page
        }
    });
    return data
}

export async function postViewedMovie(movie) {
    try {
        await axios.post(getBackendUrl('/viewed'), movie);
    } catch (e) {
        console.log(e)
    }
}

export async function getPlanedAndViewedMovies() {
    try {
        const {data} = await axios.get(getBackendUrl('/viewedandplanned'));
        console.log(data)
        Dispatcher.dispatch({
            action: 'LOAD_SELECTED_FILMS',
            films: data
        });
    } catch (e) {
        console.log(e)
    }
}

/*export async function downloadGenres() {
    try {
        const {data} = await axios.get(getMovieDbUrl('/genre/movie/list'), {
            params: {
                language: `en-US`
            }
        });
        Dispatcher.dispatch({
            action: 'LOAD_GENRES',
            genre: data.genres
        });
    } catch (e) {
        console.log(e)
    }
}*/

export async function searchMovie(line, page) {
    const {data} = await axios.get(getMovieDbUrl('/search/movie/'), {
        params: {
            language: `en-US`,
            page,
            query: `${line}`
        }
    });
    return data
}

export async function getPopularMovies(page) {
    const {data} = await axios.get(getMovieDbUrl('/movie/popular'), {
        params: {
            language: `en-US`,
            page
        }
    });
    return data
}

export async function searchByGenre(line, page) {
    const {data} = await axios.get(getMovieDbUrl('/discover/movie'), {
        params: {
            language: `en-US`,
            page,
            with_genres: `${line}`
        }
    });
    return data
}

export async function getTopRatedMovies(page) {
    const {data} = await axios.get(getMovieDbUrl('/movie/top_rated'), {
        params: {
            language: `en-US`,
            page
        }
    });
    return data
}

export async function getUpcomingMovies(page) {
    const {data} = await axios.get(getMovieDbUrl('/movie/upcoming'), {
        params: {
            language: `en-US`,
            page
        }
    });
    return data
}
