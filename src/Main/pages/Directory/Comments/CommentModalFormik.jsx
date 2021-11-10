import React, { Fragment, useEffect } from 'react';
import {
	Button,
	FormGroup,
	Input,
	Label,
	Modal,
	ModalBody,
	ModalHeader,
} from 'reactstrap';
import { connect } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './Comments.css';

const mapStateToProps = (state) => {
	console.log(state);
	return state;
};

const CommentFormModal = (props) => {
	const { addComment, allComments, campsiteId, isOpen, toggleModal, state } =
		props;
	// console.log(
	// 	allComments.filter((comment) => comment.campsiteId === campsiteId),
	// );
	console.log(allComments);
	// return <div></div>;
	const nameRegEx = /^[a-zA-Z\s-]+$/;

	const validationSchema = Yup.object({
		author: Yup.string()
			.matches(nameRegEx, `Must be only letters, space, or hyphen`)
			.min(2, `Must be at least 2 letters long`)
			.max(25, `Must be 25 letters or less`)
			.required(`Your name is required`),
		rating: Yup.string()
			.min(1, `Please select a rating between 1 and 5`)
			.max(5),
		text: Yup.string()
			.min(40, `Please include more details...`)
			.required(`Short comment is required`),
	});

	const initialValues = {
		author: '',
		rating: 'choose one',
		text: '',
		campsiteId: props.campsiteId,
		isSubmitting: true,
	};

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit(values, { resetForm, setSubmitting }) {
			// console.log(props, values);
			console.log(addComment);
			// const payload = {
			// 	author: values.author,
			// 	rating: +values.rating,
			// 	text: values.text,
			// 	campsiteId: values.campsiteId,
			// };
			addComment(values.campsiteId, +values.rating, values.author, values.text); // try doing it here, doesn't work either
			setSubmitting(false);
			// resetForm();
		},
	});

	const handleSubmit = (values) => {
		console.log(
			// addComment(values.campsiteId, +values.rating, values.author, values.text), // this shows what addComments function call should look like
			typeof values, // nothing weird about the types AFAIK
			typeof values.campsiteId,
			typeof +values.rating, // rating has to be changed from text
			typeof values.author,
			typeof values.text,
		);
		let one = values.campsiteId;
		let two = +values.rating;
		let three = values.author;
		let four = values.text;
		console.log(addComment); // you can see function is available
		addComment(one, two, three, four);
		// addComment(values.campsiteId, +values.rating, values.author, values.text);
		// formik.resetForm();
		// toggleModal();
	};

	return (
		<div className="w-100">
			<Modal isOpen={isOpen}>
				<ModalHeader toggle={toggleModal}>Submit a Comment</ModalHeader>
				<ModalBody>
					<form onSubmit={formik.handleSubmit} color="black">
						<FormGroup>
							<Label htmlFor="rating">Select Rating</Label>
							<Input
								type="select"
								name="rating"
								id="rating"
								onBlur={formik.handleBlur}
								onChange={formik.handleChange}
								value={formik.values.rating}
							>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
								<option value="choose one">Please select a rating</option>
							</Input>
							{formik.errors.rating ? (
								<span className="small text-danger">
									{formik.errors.rating}
								</span>
							) : null}
						</FormGroup>
						<FormGroup>
							<Label htmlFor="author">Your Name</Label>
							<Input
								id="author"
								name="author"
								onBlur={formik.handleBlur}
								onChange={formik.handleChange}
								type="text"
								value={formik.values.author}
							/>
							{formik.errors.author ? (
								<span className="small text-danger">
									{formik.errors.author}
								</span>
							) : null}
						</FormGroup>
						<FormGroup>
							<Label htmlFor="text">Comment:</Label>
							<Input
								rows={6}
								id="text"
								name="text"
								onBlur={formik.handleBlur}
								onChange={formik.handleChange}
								type="textarea"
								value={formik.values.text}
							/>

							{formik.errors.text ? (
								<span className="small text-danger">{formik.errors.text}</span>
							) : null}
						</FormGroup>
						<Button
							color="primary"
							type="submit"
							className={`float-right ${
								formik.errors.author || formik.errors.text ? 'disabled' : ''
							}`}
							onClick={() => handleSubmit(formik.values)}
						>
							Submit
						</Button>
					</form>
				</ModalBody>
			</Modal>
		</div>
	);
};

export default connect(mapStateToProps)(CommentFormModal);
