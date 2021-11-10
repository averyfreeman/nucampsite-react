import React, { Fragment, useEffect, useState } from 'react';
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

const initialErrorState = {
	name: '',
	msg: {
		ok: '',
		tooShort: 'Must be at least 2 characters',
	},
};

const CommentForm = (props) => {
	const initialFormState = {
		author: '',
		rating: '',
		campsiteId: props.campsiteId,
		text: '',
		lastEdited: '',
	};

	const initialTouchedState = {
		author: false,
		rating: false,
		text: false,
	};

	const [formState, setFormState] = useState(initialFormState);
	const [touchedState, setTouchedState] = useState(initialTouchedState);
	const [errorState, setErrorState] = useState(initialErrorState);
	const { addComment, allComments, campsiteId, isOpen, toggleModal } = props;
	// console.log(
	// 	allComments.filter((comment) => comment.campsiteId === campsiteId),
	// );

	// useEffect(() => {
	// 	// console.log(allComments);
	// 	console.log(formState);
	// 	console.log(touchedState);
	// }, [formState, touchedState]);

	const handleBlur = (event) => {
		const target = event.target;
		const name = target.name;
		const value = target.value;
		// console.log(value);
		setTouchedState({
			...touchedState,
			[name]: !![value],
		});
	};

	// const isValid = (name) => {
	// 	if (formState.touched.name) {
	// 		formState.name < 2
	// 			? (setErrorState.name = errorState.msg.tooShort)
	// 			: (setErrorState.name = errorState.msg.ok);
	// 	}
	// 	// console.log(valid.errorState);
	// 	return errorState;
	// };

	// const errors = isValid(errorState.name);

	const handleChange = (e) => {
		const target = e.target;
		const name = target.name;
		const value = target.value;
		setFormState({ ...formState, [name]: value, lastEdited: name });
		return { [name]: value };
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const dummyVals = {
			campsiteId: props.campsiteId,
			rating: 3,
			author: 'testAuthor',
			text: 'testText',
		};
		addComment(
			dummyVals.campsiteId,
			dummyVals.rating,
			dummyVals.author,
			dummyVals.text,
		);
		// addComment(formState);
		console.log(
			addComment(
				dummyVals.campsiteId,
				dummyVals.rating,
				dummyVals.author,
				dummyVals.text,
			),
		);

		// toggleModal();
	};

	return (
		<div className="w-100">
			<Modal isOpen={isOpen}>
				<ModalHeader toggle={toggleModal}>Submit a Comment</ModalHeader>
				<ModalBody>
					<form
						// onSubmit={(event) => handleSubmit(event, formState)}
						color="black"
					>
						<span
							className="d-none"
							name="campsiteId"
							value={campsiteId}
						></span>
						<FormGroup>
							<Label htmlFor="rating">Select Rating</Label>
							<Input
								type="select"
								name="rating"
								id="rating"
								onBlur={handleBlur}
								onChange={handleChange}
								value={handleChange}
							>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
								<option value="choose one">Please select a rating</option>
							</Input>
							{/* <FormFeedback>{errors.rating}</FormFeedback> */}
							<span className="small text-danger"></span>
						</FormGroup>
						<FormGroup>
							<Label htmlFor="author">Your Name</Label>
							<Input
								id="author"
								name="author"
								onBlur={handleBlur}
								onChange={handleChange}
								type="text"
								// value={formState({ [e.target.name]: e.target.value })}
							/>
							<span className="small text-danger"></span>
						</FormGroup>
						<FormGroup>
							<Label htmlFor="text">Comment:</Label>
							<Input
								rows={6}
								id="text"
								name="text"
								onBlur={handleBlur}
								onChange={handleChange}
								type="textarea"
								// value={formState({ [e.target.name]: e.target.value })}
							/>
						</FormGroup>
						<Button
							color="primary"
							type="submit"
							className="float-right"
							// className={`float-right ${
							// 	formik.errors.author || formik.errors.text ? 'disabled' : ''
							// }`}
							onClick={handleSubmit}
							// onSubmit={handleSubmit}
						>
							Submit
						</Button>
					</form>
				</ModalBody>
			</Modal>
		</div>
	);
};

export default CommentForm;
