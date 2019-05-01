import React from "react";
import { ModalBody, ModalDialog, ModalFooter } from "react-bootstrap";
import { Button } from "element-react";
import { changeModalState } from "./Actions";
import { connect } from "react-redux";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const DELETE_NOTE = gql`
	mutation DeleteNote($id: String!) {
		deleteNote(id: $id) {
			id
		}
	}
`;

class Modal extends React.Component {
	onCloseClick = () => {
		this.props.changeModalState({});
	};
	onSaveClick = () => {
		console.log("save clicked");
	};

	render() {
		if (this.props.isModalOpen) {
			const id = this.props.modalData.id;
			return (
				<ModalDialog>
					<h4>{this.props.modalData.title}</h4>
					<ModalBody>
						<p>{this.props.modalData.description}</p>
					</ModalBody>

					<ModalFooter>
						<Button color="secondary" onClick={this.onCloseClick}>
							Close
						</Button>
						<Button color="primary" onClick={this.onSaveClick}>
							Save
						</Button>
						<Mutation
							mutation={DELETE_NOTE}
							variables={{ id }}
							onCompleted={console.log("Completed")}
							onError={console.log("error")}
						>
							{deleteNote => (
								<Button color="red" onClick={deleteNote}>
									Delete
								</Button>
							)}
						</Mutation>
					</ModalFooter>
				</ModalDialog>
			);
		} else return null;
	}
}

const mapStateToProps = state => ({
	modalData: state.modal.modalData.modalData,
	isModalOpen: state.modal.modalData.isOpen
});

const mapDispatchToProps = {
	changeModalState
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Modal);
