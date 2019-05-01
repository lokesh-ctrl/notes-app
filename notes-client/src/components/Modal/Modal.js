import React from "react";
import { ModalBody, ModalDialog, ModalFooter } from "react-bootstrap";
import { Button } from "element-react";
import { changeModalState } from "./Actions";
import { connect } from "react-redux";

class Modal extends React.Component {
	onCloseClick = () => {
		this.props.changeModalState({});
	};
	onSaveClick = () => {
		console.log("save clicked");
	};

	render() {
		if (this.props.isModalOpen) {
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
						<Button color="red" onClick={this.onSaveClick}>
							Delete
						</Button>
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
