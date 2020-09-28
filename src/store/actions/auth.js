/*import firebase from 'react-native-firebase'

export const logIn = user => {
    firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then(() => this.props.history.push('/popular'))
        .catch(error => this.setState({errorMessage: error.message}))
};
/!*return dispatch => {
    return fetch("http://localhost:3000/api/v1/users", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify({user})
    })
        .then(resp => resp.json())
        .then(data => {
            if (data.message) {
                //Тут прописываем логику
            } else {
                localStorage.setItem("token", data.jwt);
                dispatch(loginUser(data.user))
            }
        })
}
}
;*!/
export const regUser = user => {
    return dispatch => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(user.email, user.password)
            .then(() => this.props.navigation.navigate('Main'))
            .catch(error => console.log(error.message))
    }
};*/
import axios from "axios";

export const setUser = userObj => ({
    type: SET_USER,
    payload: userObj
});
export const SET_USER = 'SET_USER';


export function auth(data) {
    return function action(dispatch) {
        dispatch({
            type: LOGIN_REQUEST
        });
        axios.post("https://mysterious-reef-29460.herokuapp.com/api/v1/validate", {
            email: data.email, password: data.password,
        })
            .then(response => {
                    if (response.data.status === 'err') {
                        console.log(response.data.message);
                        dispatch({
                            type: LOGIN_FAIL,
                            payload: response.data.message
                        })
                    } else {
                        console.log(response.data.data);
                        dispatch({
                            type: LOGIN_SUCCESS,
                            payload: response.data.data
                        })
                    }
                }
            )
    }
}

export function getUser(data) {
    return function action(dispatch) {
        /*        dispatch({
                    type: LOGIN_REQUEST
                });*/
        axios.get(`https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/${data}`)
            .then(response => {
                    if (response.data.status === 'err') {
                        dispatch({
                            type: GET_USER_FAIL,
                            payload: response.data.message
                        })
                    } else {
                        dispatch({
                            type: GET_USER_SUCCESS,
                            payload: response.data.data
                        })
                    }
                }
            )
    }
}
export function logoutUser(data) {

}

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAIL = 'GET_USER_FAIL';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';