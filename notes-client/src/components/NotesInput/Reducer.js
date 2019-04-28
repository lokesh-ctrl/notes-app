import * as ACTION_TYPES from "./ActionTypes";

export default (state = {
    inputViewMode: "simple"
}, action) => {
    switch (action.type) {
        case ACTION_TYPES.CHANGE_NOTES_INPUT_VIEW_MODE:
            return {
                inputViewMode: action.payload
            };
        default:
            return state;
    }
};
