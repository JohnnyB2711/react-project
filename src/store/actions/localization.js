export function setLocale(data) {
    console.log('locale-data', data);
    return function action(dispatch) {
        dispatch({
            type: SET_LOCALE,
            payload: data
        })
    }
}

export const SET_LOCALE = 'SET_LOCALE';