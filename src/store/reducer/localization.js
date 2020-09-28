import {SET_LOCALE} from "../actions/localization";
import i18n from '../../localization/i18n'

const initialState = {
    languages: [
        {
            code: "en",
            id: 1,
            isCurrent: false,
            name: "English",
        },
        {
            code: "ru",
            id: 2,
            isCurrent: true,
            name: "Русский"
        },],
    currentLanguage : i18n.language
};

export function localizationReducer(state = initialState, action) {
    switch (action.type) {
        case SET_LOCALE:
            return {...state, language: action.payload};
        default:
            return state
    }
}
