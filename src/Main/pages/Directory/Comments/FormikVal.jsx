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
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import './Comments.css';

const CommentFormModal = (props) => {
	const nameRegEx = /^[a-zA-Z\s-]+$/;

	const { addComment } = props;

	// useEffect(() => {
	// 	console.log(addComment);
	// }, []);

	const validationSchema = yup.object({
		author: yup
			.string()
			.matches(nameRegEx, `Must be only letters, space, or hyphen`)
			.min(2, `Must be at least 2 letters long`)
			.max(25, `Must be 25 letters or less`)
			.required(`Your name is required`),
		rating: yup.string().min(1, `Please select a rating`).max(5),
		text: yup
			.string()
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

	// const formikSettings = {
	// 	initialValues: {
	// 		author: '',
	// 		rating: 'choose one',
	// 		text: '',
	// 		campsiteId: props.campsiteId,
	// 	},
	// 	validationSchema,
	// 	handleSubmit(values, addComment) {
	// 		const payload = {
	// 			author: values.author,
	// 			rating: values.rating,
	// 			text: values.text,
	// 			campsiteId: values.campsiteId,
	// 		};
	// 		console.log(addComment);
	// 		addComment(payload);
	// 	},
	// 	onSubmit(values, { resetForm, setSubmitting }) {
	// 		alert(
	// 			`comments.payload:
	// 			 Author: ${payload.author}
	// 			 Rating: ${payload.rating}
	// 			 Text:  ${payload.text}
	// 			 campsiteId: ${payload.campsiteId}
	// 		`,
	// 			resetForm(),
	// 			2,
	// 		);
	// 	},
	// };

	// const {
	// 	errors,
	// 	handleBlur,
	// 	handleChange,
	// 	handleSubmit,
	// 	values: { author, campsiteId, rating, text },
	// } = formik;
	// console.log(formik.values.campsiteId);
	const { isOpen, toggleModal } = props;

	// 	useEffect(() => {
	// 		console.log(`formik.values --
	// author:  ${author}
	// rating:  ${rating}
	// text: ${text}
	// campsiteId: ${campsiteId}
	// errors:
	//   ${errors.author}
	//   ${errors.text}
	// 		`);
	// 	}, [author, rating, text, errors]);
	// const payload = {};

	const handleSubmit = (values) => {
		const payload = new Object({
			author: values.author,
			rating: values.rating,
			text: values.text,
			campsiteId: values.campsiteId,
		});
		addComment(payload);
		// console.log(payload);
	};
	// useEffect(() => {
	// 	console.log(Formik, addComment, payload);
	// }, [Formik, addComment, payload]);

	return (
		<div className="w-100">
			<Modal isOpen={isOpen}>
				<ModalHeader toggle={toggleModal}>Submit a Comment</ModalHeader>
				<ModalBody>
					<Formik
						initialValues={initialValues}
						validationSchema={validationSchema}
						onSubmit={(values, { resetForm, setSubmitting }) => {
							let payload = {
								campsiteId: { ...values.campsiteId },
								rating: { ...+values.rating },
								name: { ...values.name },
								text: { ...values.text },
							};
							values.rating = +values.rating;
							addComment(payload);
							// let formData = new FormData();
							// formData.append('form', 'inquiry');
							// for (const value in values) {
							// 	formData.append(value, values[value]);
							// }
							console.log(addComment(payload));
							formPost(endpoint, formData);
							setSubmitting(false);
							resetForm();
						}}
					>
						{(props) => (
							<Form onSubmit={props.handleSubmit} color="black">
								<FormGroup>
									<Label htmlFor="rating">Select Rating</Label>
									<Input
										type="select"
										name="rating"
										id="rating"
										onBlur={props.handleBlur}
										onChange={props.handleChange}
										value={props.values.rating}
									>
										<option value="1">1</option>
										<option value="2">2</option>
										<option value="3">3</option>
										<option value="4">4</option>
										<option value="5">5</option>
										<option value="choose one">Please select a rating</option>
									</Input>
									{props.errors.rating ? (
										<span className="small text-danger">
											{props.errors.rating}
										</span>
									) : null}
								</FormGroup>
								<FormGroup>
									<Label htmlFor="author">Your Name</Label>
									<Input
										id="author"
										name="author"
										onBlur={props.handleBlur}
										onChange={props.handleChange}
										type="text"
										value={props.values.author}
									/>
									{props.errors.author ? (
										<span className="small text-danger">
											{props.errors.author}
										</span>
									) : null}
								</FormGroup>
								<FormGroup>
									<Label htmlFor="text">Comment:</Label>
									<Input
										rows={6}
										id="text"
										name="text"
										onBlur={props.handleBlur}
										onChange={props.handleChange}
										type="textarea"
										value={props.values.text}
									/>

									{props.errors.text ? (
										<span className="small text-danger">
											{props.errors.text}
										</span>
									) : null}
								</FormGroup>
								<Button
									color="primary"
									type="submit"
									className={`float-right ${
										props.errors.author || props.errors.text ? 'disabled' : ''
									}`}
									onClick={
										// handleAddComment &&
										handleSubmit
									}
								>
									Submit
								</Button>
							</Form>
						)}
					</Formik>
				</ModalBody>
			</Modal>
		</div>
	);
};

export default CommentFormModal;
