import React from "react";
import {Button, Input} from "element-react";
import "element-theme-default";
import "./NotesInput.css";
import {connect} from "react-redux";
import {changeInputViewMode} from "./Actions";
import _ from "lodash";

export class NotesInput extends React.Component {
    state = {notesInputClick: false, taskInput: false, tasks: []};

    onClick = () => {
        this.props.changeInputViewMode("notes");
    };
    onCloseClick = () => {
        this.props.changeInputViewMode("simple");
    };

    onCheckBoxClick = () => {
        this.props.changeInputViewMode("task");
    };

    renderTaskInput = () => {
        return (
            <div>
                <div>
                    <div>
                        <Input className="input-width" placeholder="Title"/>
                    </div>
                    <div/>
                    <Button className="color" type="text" onClick={this.onCloseClick}>
                        Close
                    </Button>
                </div>
            </div>
        );
    };

    renderBoxInput = () => {
        return (
            <div>
                <div>
                    <Input className="input-width" placeholder="Title"/>
                </div>
                <div>
                    <Input
                        type="textarea"
                        className="input-width"
                        autoFocus={true}
                        placeholder="Take a note..."
                    />
                </div>
                <Button className="color" type="text" onClick={this.onCloseClick}>
                    Close
                </Button>
            </div>
        );
    };
    renderNotesInput = () => {
        if (this.props.input.inputViewMode === "notes") {
            return this.renderBoxInput();
        }
        if (this.props.input.inputViewMode === "task") {
            return this.renderTaskInput();
        }
        return (
            <Input
                size="large"
                className="input-width input-padding"
                placeholder="Take a note...."
                icon="circle-check"
                onIconClick={this.onCheckBoxClick}
                onFocus={this.onClick}
            />
        );
    };

    render() {
        return this.renderNotesInput();
    }
}

const mapStateToProps = state => ({
    input: state.input
});

const mapDispatchToProps = {
    changeInputViewMode
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NotesInput);
