import * as ACTION_TYPES from "./ActionTypes";

export default (
    state = {
        modalData: {isOpen: false}
    },
    action) => {
    console.log(action);
    switch (action.type) {
        case ACTION_TYPES.MODAL_STATE_CHANGE:
            return {...state, modalData: action.payload};
        default:
            return state;
    }
};
