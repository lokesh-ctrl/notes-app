import {combineReducers} from "redux";
import NotesInputReducer from "./NotesInput/Reducer";

export default combineReducers({
    input: NotesInputReducer
});
