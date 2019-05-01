import React from "react";
import {Button, Input} from "element-react";
import "element-theme-default";
import "./NotesInput.css";
import {connect} from "react-redux";
import {changeInputViewMode} from "./Actions";
import gql from "graphql-tag";
import {Mutation} from "react-apollo";

const ADD_NOTE = gql`
	mutation AddNote($title: String!, $description: String!) {
		addNote(title: $title, description: $description) {
			id
			title
			description
		}
	}
`;

export class NotesInput extends React.Component {
    state = {
        notesInputClick: false,
        taskInput: false,
        tasks: [],
        title: "",
        description: ""
    };

    onClick = () => {
        this.props.changeInputViewMode("notes");
    };
    onCloseClick = () => {
        this.props.changeInputViewMode("simple");
    };

    onCheckBoxClick = () => {
        this.props.changeInputViewMode("task");
    };

    onTitleChange = value => {
        this.setState({title: value});
    };

    onDescriptionChange = value => {
        console.log(value);
        this.setState({description: value});
    };

    renderTaskInput = () => {
        return (
            <div>
                <div>
                    <div>
                        <Input className="input-width" placeholder="Title"/>
                    </div>
                    <div/>
                    <Button type="text" onClick={this.onCloseClick}>
                        Close
                    </Button>
                    <Button
                        className="blue"
                        type="text"
                        onClick={this.onSubmitClick}
                    >
                        Add
                    </Button>
                </div>
            </div>
        );
    };

    renderBoxInput = () => {
        const title = this.state.title.toString();
        const description = this.state.description.toString();
        return (
            <div>
                <div>
                    <Input
                        className="input-width"
                        placeholder="Title"
                        onChange={this.onTitleChange}
                    />
                </div>
                <div>
                    <Input
                        type="textarea"
                        className="input-width"
                        autoFocus={true}
                        placeholder="Take a note..."
                        onChange={this.onDescriptionChange}
                    />
                </div>
                <Button
                    className="color"
                    type="text"
                    onClick={this.onCloseClick}
                >
                    Close
                </Button>
                <Mutation
                    mutation={ADD_NOTE}
                    variables={{title, description}}
                    onCompleted={console.log("Completed")}
                    onError={console.log("error")}
                >
                    {addNote => <Button onClick={addNote}>Add</Button>}
                </Mutation>
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
