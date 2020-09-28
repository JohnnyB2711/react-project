import axios from 'axios'

const HOST_MOVIE_DB = "https://api.themoviedb.org/3";
const API_KEY = "ac24c5f255eb805f019fbfdd3539c068";
const SERVER_HOST = "http://localhost/api/movie";

function getMovieDbUrl(url) {
    return (`${HOST_MOVIE_DB}${url}?api_key=${API_KEY}`);
}

function getBackendUrl(url) {
    return (`${SERVER_HOST}${url}`);
}

export function getSelectedMovie(data) {
    return dispatch => {
        dispatch({
            type: GET_REQUEST
        });
        try {
            const response = axios.get(getMovieDbUrl(`/movie/${data}`))
                .then(response => {
                        console.log(response.data);
                        dispatch({
                            type: GET_FILM_SUCCESS,
                            payload: response.data
                        })
                    }
                )
        } catch (error) {
            console.log(error);
            dispatch({
                type: GET_REQUEST_FAIL,
                payload: error
            });
        }
    }
}

export function getGenres(data) {
    return dispatch => {
        dispatch({
            type: GET_REQUEST
        });
        try {
            axios.get(getMovieDbUrl('/genre/movie/list'), {
                params: {
                    language: data
                }
            })
                .then(response => {
                        dispatch({
                            type: GET_GENRES,
                            payload: response.data.genres
                        })
                    }
                )
        } catch (error) {
            console.log(error);
            dispatch({
                type: GET_REQUEST_FAIL,
                payload: error
            });
        }
    }
}

export function getTopRatedMovies(data) {
    return dispatch => {
        dispatch({
            type: GET_REQUEST
        });
        try {
            axios.get(getMovieDbUrl('/movie/top_rated'), {
                params: {
                    language: data.language,
                    page: data.page
                }
            })
                .then(response => {
                        dispatch({
                            type: GET_MOVIES_SUCCESS,
                            payload: response.data
                        })
                    }
                )
        } catch (error) {
            console.log(error);
            dispatch({
                type: GET_REQUEST_FAIL,
                payload: error
            });
        }
    }
}

export function getPopularMoviesF(data) {
    return dispatch => {
        dispatch({
            type: GET_REQUEST
        });
        try {
            console.log("data.page", data.page);
            axios.get(getMovieDbUrl('/movie/popular'), {
                params: {
                    language: data.lg,
                    page: data.page
                }
            })
                .then(response => {
                        console.log("RESPONSE", response);
                        dispatch({
                            type: GET_MOVIES_SUCCESS,
                            payload: response.data
                        })
                    }
                )
        } catch (error) {
            console.log(error);
            dispatch({
                type: GET_REQUEST_FAIL,
                payload: error
            });
        }
    }
}

export function getUpcomingMovies(data) {
    return dispatch => {
        dispatch({
            type: GET_REQUEST
        });
        try {
            axios.get(getMovieDbUrl('/movie/upcoming'), {
                params: {
                    language: data.language,
                    page: data.page
                }
            })
                .then(response => {
                        dispatch({
                            type: GET_MOVIES_SUCCESS,
                            payload: response.data
                        })
                    }
                )
        } catch (error) {
            console.log(error);
            dispatch({
                type: GET_REQUEST_FAIL,
                payload: error
            });
        }
    }
}


/*const {data} = await axios.get(getBackendUrl('/planned'), {
    params: {
        page
    }
});
return {
    results:data.data,
    total_pages:data.total / data.per_page
}*/
export function getPlannedMovies(data) {
    console.log('ЗАПРОС ОТПРАВЛЯЕТСЯ', data);
    return dispatch => {
        dispatch({
            type: GET_REQUEST
        });
        try {
            const response = axios.get(getBackendUrl('/planned'), {
                params: {}
            })
                .then(response => {
                        console.log(response.data);
                        dispatch({
                            type: GET_PLANNED_SUCCESS,
                            payload: response.data
                        })
                    }
                )
        } catch (error) {
            console.log(error);
            dispatch({
                type: GET_REQUEST_FAIL,
                payload: error
            });
        }
    }
}

export const GET_REQUEST = 'GET_REQUEST';
export const GET_GENRES = 'GET_GENRES';
export const GET_FILM_SUCCESS = 'GET_FILM_SUCCESS';
export const GET_REQUEST_FAIL = 'GET_REQUEST_FAIL';
export const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS';
export const GET_PLANNED_SUCCESS = 'GET_PLANNED_SUCCESS';