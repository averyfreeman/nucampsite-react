import React from 'react';
import { Button, Col, Container, FormGroup, Label, Row } from 'reactstrap';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import BCrumbHeading from 'Main/BCrumbHeading/BCrumbHeading';
import Checkbox from './Checkbox';
import FG from './FG';
import Selector from './Selector';
import TextArea from './TextArea';

export default function Comments(props) {
	const nameRegEx = /^[a-zA-Zs-]+$/;
	const phoneRegEx = /^[0-9s -]+$/;

	const initialValues = {
		firstName: '',
		lastName: '',
		phoneNum: '',
		email: '',
		agree: false,
		contactType: 'By Phone',
		feedback: '',
	};

	const validationSchema = Yup.object({
		firstName: Yup.string()
			.matches(nameRegEx, `Must be only letters or hyphen`)
			.max(18, `Must be 18 letters or less`)
			.required(`First name is required`),
		lastName: Yup.string()
			.matches(nameRegEx, `Must be only letters or hyphen`)
			.max(24, `Must be 24 letters or less`)
			.required(`Last name is required`),
		phoneNum: Yup.string()
			.matches(phoneRegEx, `That doesn't go in phone number...`)
			.min(12, `12 characters, please`)
			.max(12, `12 characters, please`)
			.required(`Phone number is required`),
		email: Yup.string()
			.email(`That's not an email address!`)
			.required(`Email address is required`),
		feedback: Yup.string()
			.min(50, `Please include more details...`)
			.required(`Short message is required`),
	});
	// use this to console.log updated state
	// useEffect(() => {
	// 	console.log();
	// }, []);

	const handleSubmit = (values) => {
		alert(`
	Current values: 

		${JSON.stringify(values)}

		`);
	};

	return (
		<Container>
			<BCrumbHeading name="Contact" />
			<div className="row row-content">
				<div className="col-12">
					<h2>Send us your Feedback</h2>
					<hr />
				</div>
			</div>
			<div className="col-md-10">
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={(values, actions) => {
						let formData = new FormData();

						formData.append('form', 'inquiry');
						for (const value in values) {
							formData.append(value, values[value]);
						}

						/* test values after in formData obj */
						// for (let property of formData.entries()) {
						//   console.log('Sending: ', property[0], property[1]);
						// }

						formPost(endpoint, formData);
						actions.setSubmitting(false);
						actions.resetForm();
					}}
				>
					{(props) => (
						<Form onSubmit={props.handleSubmit} color="black">
							<FG
								inputId="firstName"
								htmlFor="firstName"
								placeholder="First Name"
								inputName="firstName"
								inputClassNames=""
								inputWidth={10}
								labelClassNames=""
								label="First Name"
								labelWidth={2}
								onBlur={props.handleBlur}
								onChange={props.handleChange}
								value={props.values.firstName}
							/>
							{props.errors.firstName ? (
								<span className="small text-danger">
									{props.errors.firstName}
								</span>
							) : null}
							<FG
								inputId="lastName"
								inputName="lastName"
								placeholder="Last Name"
								htmlFor="lastName"
								inputClassNames=""
								inputWidth={10}
								labelClassNames=""
								label="Last Name"
								labelWidth={2}
								onBlur={props.handleBlur}
								onChange={props.handleChange}
								value={props.values.lastName}
							/>
							{props.errors.lastName ? (
								<span className="small text-danger">
									{props.errors.lastName}
								</span>
							) : null}
							<FG
								inputId="phoneNum"
								inputName="phoneNum"
								placeholder="Phone Number"
								htmlFor="phoneNum"
								inputClassNames=""
								inputWidth={10}
								label="Phone Number"
								labelClassNames=""
								labelWidth={2}
								onBlur={props.handleBlur}
								onChange={props.handleChange}
								value={props.values.phoneNum}
							/>
							{props.errors.phoneNum ? (
								<span className="small text-danger">
									{props.errors.phoneNum}
								</span>
							) : null}
							<FG
								inputId="email"
								inputName="email"
								placeholder="Email"
								htmlFor="email"
								inputClassNames=""
								inputWidth={10}
								label="Email"
								labelClassNames=""
								labelWidth={2}
								onBlur={props.handleBlur}
								onChange={props.handleChange}
								value={props.values.email}
							/>
							{props.errors.email ? (
								<span className="small text-danger">{props.errors.email}</span>
							) : null}
							<Row>
								<Checkbox
									classNames="col-md-4 offset-1 mt-2"
									inputType="checkbox"
									inputName="agree"
									label="May we contact you?"
								/>
								<Selector
									classNames=""
									inputName="contactType"
									optionOne="By Phone"
									optionTwo="By Email"
									// selectorWidth={4}
									onBlur={props.handleBlur}
									onChange={props.handleChange}
									value={props.values.agree}
								/>
							</Row>
							<FormGroup>
								<Label htmlFor="feedback" md={4}>
									Your Feedback
								</Label>
								<TextArea
									className="form-control"
									inputWidth={13}
									inputType="textarea"
									inputId="feedback"
									inputName="feedback"
									rows={12}
									onBlur={props.handleBlur}
									onChange={props.handleChange}
									value={props.values.feedback}
								/>
							</FormGroup>
							<FormGroup>
								<Col md={{ size: 10, offset: 2 }}>
									<Button type="submit" color="primary">
										Send Feedback
									</Button>
								</Col>
							</FormGroup>
						</Form>
					)}
				</Formik>
			</div>
		</Container>
	);
}
