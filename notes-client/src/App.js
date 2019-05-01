import React from "react";
import "./App.css";
import NotesInput from "./components/NotesInput/NotesInput";
import GridContainer from "./components/Notes/GridContainer";
import Modal from "./components/Modal/Modal";

function App() {
    return (
        <div className="App Background-image">
            <div>
                <h1>Notes</h1>
                <NotesInput/>
            </div>
            <GridContainer/>
            <Modal/>
        </div>
    );
}

export default App;
