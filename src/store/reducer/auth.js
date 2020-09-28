import {SET_USER} from "../actions/auth";
import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, GET_USER_SUCCESS, GET_USER_FAIL, LOGOUT_REQUEST} from '../actions/auth'

const initialState = {
    isAuth: false,
    isLoading: false,
    message: '',
    id: null,
    user: {}
};

export function authReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {...state, isLoading: true, message: '', isAuth: false};

        case LOGIN_SUCCESS:
            return {...state, isLoading: false, id: action.payload.id, isAuth: true, message: 'Вход выполнен успешно.'};

        case LOGIN_FAIL:
            return {
                ...state,
                isLoading: false,
                message: 'Данного пользователя не существует в базе. Проверьте правильность введенных данных.'
            };
        case LOGOUT_REQUEST:
            return {...state, isAuth: false};

        case GET_USER_SUCCESS:
            return {...state, message: '', user: {...action.payload, name:'Женя'}};

        case GET_USER_FAIL:
            return {
                ...state,
                isLoading: false,
                message: 'Не удалось получить данные пользователя.'
            };
        case SET_USER:
            return {...state, data: action.payload};
        default:
            return state
    }
}

