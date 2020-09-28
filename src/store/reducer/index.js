import {combineReducers} from 'redux'
import {authReducer} from './auth'
import {usersReducer} from "./users";
import {postsReducer} from "./posts";
import {localizationReducer} from "./localization";
import {movieReducer} from "./movies";
import {reducer as formReducer} from 'redux-form'

export const rootReducer = combineReducers({
    auth: authReducer,
    users: usersReducer,
    posts: postsReducer,
    form: formReducer,
    languages: localizationReducer,
    movies: movieReducer
});