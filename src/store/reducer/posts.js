import {
    SET_POSTS_FAIL,
    GET_POSTS_REQUEST,
    SET_POSTS_SUCCESS, EDIT_POST_FAIL, EDIT_POST_SUCCESS, EDIT_POST, ADD_POST, ADD_POST_SUCCESS, ADD_POST_FAIL
} from "../actions/posts";

const initialState = {
    isLoading: false,
    isAdding: null,
    error: "",
    data: [],
    posts: []
};

export function postsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS_REQUEST:
            return {...state, isLoading: true, error: ''};

        case SET_POSTS_SUCCESS:
            return {...state, isLoading: false, data: action.payload};

        case SET_POSTS_FAIL:
            return {...state, isLoading: false, error: action.payload};

        case EDIT_POST:
            return {...state, isLoading: true, error: ''};

        case EDIT_POST_SUCCESS:
            return {...state, isLoading: false};

        case EDIT_POST_FAIL:
            return {...state, isLoading: false, error: action.payload};

        case ADD_POST:
            return {...state, isAdding: null, error: '', data: action.payload};

        case ADD_POST_SUCCESS:
            return {...state, isLoading: true, data: action.payload};

        case ADD_POST_FAIL:
            return {...state, isLoading: false, error: action.payload};

        default:
            return state
    }
}