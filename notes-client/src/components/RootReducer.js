import {combineReducers} from "redux";
import NotesInputReducer from "./NotesInput/Reducer";
import ModalReducer from "./Modal/Reducer";

export default combineReducers({
    input: NotesInputReducer,
    modal: ModalReducer
});
