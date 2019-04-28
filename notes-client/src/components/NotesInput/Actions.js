import * as ACTION_TYPES from "./ActionTypes";

export const changeInputViewMode = payload => {
    return dispatch => {
        dispatch({
            type: ACTION_TYPES.CHANGE_NOTES_INPUT_VIEW_MODE,
            payload: payload
        });
    };
};