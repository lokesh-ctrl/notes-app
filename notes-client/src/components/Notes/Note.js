import React, { Component } from "react";
import { Card, CardBody, CardText } from "reactstrap";
import "./Note.css";
import { connect } from "react-redux";
import { changeModalState } from "../Modal/Actions";

class Note extends Component {
	state = {
		note: this.props.note
	};

	onClick = () => {
		this.props.changeModalState({ isOpen: true, modalData: this.state.note });
	};

	render() {
		return (
			<>
				<Card className="note-grid" onClick={this.onClick}>
					<CardBody>
						<h4>{this.state.note.title}</h4>
						<CardText>{this.state.note.description}</CardText>
					</CardBody>
				</Card>
			</>
		);
	}
}

const mapStateToProps = state => ({
	modalData: state.modal
});

const mapDispatchToProps = {
	changeModalState
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Note);
