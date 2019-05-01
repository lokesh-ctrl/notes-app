import * as ACTION_TYPES from "./ActionTypes";

export const changeModalState = payload => {
    return dispatch => {
        dispatch({
            type: ACTION_TYPES.MODAL_STATE_CHANGE,
            payload: payload
        });
    };
};