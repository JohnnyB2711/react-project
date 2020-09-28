import axios from 'axios'

export function getUsersAction() {
    return dispatch => {
        dispatch({
            type: GET_USERS_REQUEST
        });
        try {
            const response = axios.get("https://jsonplaceholder.typicode.com/users")
                .then(response => dispatch({
                        type: SET_USERS_SUCCESS,
                        payload: response.data
                    })
                )
        } catch (error) {
            console.log(error);
            dispatch({
                type: SET_USERS_FAIL,
                payload: error
            });
        }
    }
}
/*export function getPostsAction() {
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
}*/
export const GET_USERS_REQUEST = 'GET_USERS_REQUEST';
export const SET_USERS_SUCCESS = 'SET_USERS_SUCCESS';
export const SET_USERS_FAIL = 'SET_USERS_FAIL';