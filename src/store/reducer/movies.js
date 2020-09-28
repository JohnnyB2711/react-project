import {
    GET_FILM_SUCCESS,
    GET_REQUEST_FAIL,
    GET_REQUEST,
    GET_MOVIES_SUCCESS,
    GET_GENRES
} from '../actions/movies'

const initialState = {
    isLoading: false,
    message: '',
    selectMovie: {},
    data: [],
    totalPages: null,
    currentPage: null,
    genres: []
};

export function movieReducer(state = initialState, action) {
    switch (action.type) {
        case GET_REQUEST:
            return {...state, isLoading: true, message: ''};

        case GET_FILM_SUCCESS:
            return {...state, isLoading: false, selectMovie: action.payload};

        case GET_MOVIES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload.results,
                totalPages: action.payload.total_pages,
                currentPage: action.payload.page
            };

        case GET_REQUEST_FAIL:
            return {
                ...state,
                isLoading: false,
                message: 'Не удалось загрузить данные о фильме.'
            };
        case GET_GENRES:
            return {
                ...state,
                genres: action.payload
            };
        default:
            return state
    }
}
