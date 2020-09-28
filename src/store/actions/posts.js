import axios from 'axios'

export function getPostsAction() {
    return dispatch => {
        dispatch({
            type: GET_POSTS_REQUEST
        });
        try {
            const response = axios.get("https://jsonplaceholder.typicode.com/posts")
                .then(response => dispatch({
                        type: SET_POSTS_SUCCESS,
                        payload: response.data
                    })
                )
        } catch (error) {
            console.log(error);
            dispatch({
                type: SET_POSTS_FAIL,
                payload: error
            });
        }
    }
}

/*get(getBackendUrl('/planned'), {
    params: {
        page
    }*/
export function editPostAction(data) {
    console.log(data);
    return dispatch => {
        dispatch({
            type: EDIT_POST
        });
        try {
            const response = axios.put(`https://jsonplaceholder.typicode.com/posts/${data.id}`, {data})
                .then(response => dispatch({
                        type: EDIT_POST_SUCCESS
                    })
                )
        } catch (error) {
            console.log(error);
            dispatch({
                type: EDIT_POST_FAIL,
                payload: error
            });
        }
    }
}

export function addPostAction(data) {
    return dispatch => {
        dispatch({
            type: ADD_POST
        });
        try {
            dispatch({
                type: ADD_POST_SUCCESS
            })
        } catch (error) {
            console.log(error);
            dispatch({
                type: ADD_POST_FAIL,
                payload: error
            });
        }

    }

}

export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST';
export const SET_POSTS_SUCCESS = 'SET_POSTS_SUCCESS';
export const SET_POSTS_FAIL = 'SET_POSTS_FAIL';
export const EDIT_POST_SUCCESS = 'EDIT_POST_SUCCESS';
export const EDIT_POST_FAIL = 'EDIT_POST_FAIL';
export const EDIT_POST = 'EDIT_POST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAIL = 'ADD_POST_FAIL';
export const ADD_POST = 'ADD_POST';