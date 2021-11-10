import React, { Component } from 'react';
import {
	Button,
	// FormFeedback,
	FormGroup,
	Input,
	Label,
	Modal,
	ModalBody,
	ModalHeader,
} from 'reactstrap';
import './Comments.css';

class CommentForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			author: '',
			rating: '',
			campsiteId: props.campsiteId,
			text: '',
			lastEdited: '',
			touched: {
				author: false,
				rating: false,
				text: false,
			},
		};
	}
	handleBlur = (field) => () => {
		this.setState({
			touched: { ...this.state.touched, [field]: true },
		});
	};

	componentDidUpdate() {
		console.log(this.state);
	}

	handleChange = (e) => {
		const target = e.target;
		const name = target.name;
		const value = target.value;
		this.setState({ [name]: value });
		this.setState({ lastEdited: name });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addComment(
			this.state.campsiteId,
			this.state.rating,
			this.state.author,
			this.state.text,
		);
		console.log('Current state: ', JSON.stringify(this.state));
		alert('Submitted: ', JSON.stringify());
	};

	render() {
		return (
			<div className="w-100">
				<Modal isOpen={this.props.isOpen}>
					<ModalHeader toggle={this.props.toggleModal}>
						Submit a Comment
					</ModalHeader>
					<ModalBody>
						<form
							// onSubmit={(event) => handleSubmit(event, formState)}
							color="black"
						>
							<span
								className="d-none"
								name="campsiteId"
								value={this.props.campsiteId}
							></span>
							<FormGroup>
								<Label htmlFor="rating">Select Rating</Label>
								<Input
									type="select"
									name="rating"
									id="rating"
									onBlur={this.handleBlur}
									onChange={this.handleChange}
									value={this.state.rating}
								>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
									<option value="choose one">Please select a rating</option>
								</Input>
								{/* <FormFeedback>{errors.rating}</FormFeedback> */}
								{/* <span className="small text-danger"></span> */}
							</FormGroup>
							<FormGroup>
								<Label htmlFor="author">Your Name</Label>
								<Input
									id="author"
									name="author"
									onBlur={this.handleBlur}
									onChange={this.handleChange}
									type="text"
									value={this.state.author}
								/>
								{/* <span className="small text-danger"></span> */}
							</FormGroup>
							<FormGroup>
								<Label htmlFor="text">Comment:</Label>
								<Input
									rows={6}
									id="text"
									name="text"
									onBlur={this.handleBlur}
									onChange={this.handleChange}
									type="textarea"
									value={this.state.text}
								/>
							</FormGroup>
							<Button
								color="primary"
								type="submit"
								className="float-right"
								onClick={this.handleSubmit}
							>
								Submit
							</Button>
						</form>
					</ModalBody>
				</Modal>
			</div>
		);
	}
}

export default CommentForm;
