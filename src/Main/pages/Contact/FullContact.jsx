import React, { Component, useEffect, useState } from 'react';
import {
	Button,
	Col,
	Container,
	Form,
	FormGroup,
	// Input,
	// InputGroup,
	Label,
	Row,
} from 'reactstrap';
import { useImmer } from 'use-immer';
import BCrumbHeading from 'Main/BCrumbHeading/BCrumbHeading';
import Checkbox from './Checkbox';
import FG from './FG';
import Selector from './Selector';
import TextArea from './TextArea';
// import * as Immer from 'immer';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
// import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

export default function Contact(props) {
	// const [field, setField] = useState({
	// 	firstName: '',
	// 	lastName: '',
	// 	phoneNum: '',
	// 	email: '',
	// 	agree: false,
	// 	contactType: 'By Phone',
	// 	feedback: '',
	// });
	const [field, setField] = useImmer({
		firstName: '',
		// lastName: '',
		// phoneNum: '',
		// email: '',
		// agree: false,
		// contactType: 'By Phone',
		// feedback: '',
	});
	const [fields, setFields] = useImmer([]);

	const onInputChange = (field: any) => {
		setField((draftState) => {
			draftState.name = field;
		});
	};

	// const onSubmitField = () => {
	//   setFields(draftState => {
	//     draftState.push(field)
	//   })
	//   setField(draftState => {
	//     draftState.name = ""
	//   })

	useEffect(() => {
		console.log(field);
	}, [field]);

	const handleChange = (e) => {
		const field = e.target.name;
		const value = e.target.value;
		console.log(e.target.name, value);
		// onInputChange(e.target.value);
		onInputChange(field, value);
	};

	// const handleChange = (e) => {
	// 	const target = e.target;
	// 	const name = target.name;
	// 	const value = target.type === 'checkbox' ? target.checked : target.value;
	// 	console.log(name, value);
	// 	setField({ name: value });
	// };

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Data submitted: ', JSON.stringify(data));
	};

	return (
		<Container>
			{/* <BCrumbHeading name="Contact" /> */}
			<div className="row row-content">
				<div className="col-12">
					<h2>Send us your Feedback</h2>
					<hr />
				</div>
			</div>
			<div className="col-md-10">
				<Form onSubmit={handleSubmit}>
					<FG
						// direction="row"
						htmlFor="firstName"
						labelClassNames="col-md-2"
						label="First Name"
						inputClassNames="col-md-10"
						inputType="text"
						inputId="firstName"
						inputName="firstName"
						placeholder="First Name"
						value={field.firstName}
						onChange={handleChange}
					/>
					{/* <FG
						direction="row"
						htmlFor="lastName"
						labelWidth={`md=${2}`}
						label="Last Name"
						inputWidth={`md=${10}`}
						inputType="text"
						inputId="lastName"
						inputName="lastName"
						placeholder="Last Name"
						value={field.lastName}
						onChange={handleChange}
					/>
					<FG
						direction="row"
						htmlFor="phoneNum"
						labelWidth={`md=${2}`}
						label="Phone Number"
						inputWidth={`md=${10}`}
						inputType="tel"
						inputId="phoneNum"
						inputName="phoneNum"
						placeholder="Phone Number"
						value={field.phoneNum}
						onChange={handleChange}
					/>
					<FG
						direction="row"
						htmlFor="email"
						labelWidth={`md=${2}`}
						label="Email"
						inputWidth={`md=${10}`}
						inputType="email"
						inputId="email"
						inputName="email"
						placeholder="Email"
						value={field.email}
						onChange={handleChange}
					/>
					<FormGroup row>
						<Checkbox
							dimensions={`md=${{ size: 4, offset: 2 }}`}
							check="check"
							inputType="checkbox"
							inputName="agree"
							onChange={handleChange}
							label="May we contact you?"
						/>
						<Selector
							selectorWidth={`md=${4}`}
							inputType="select"
							inputName="contactType"
							onChange={handleChange}
							optionOne="By Phone"
							optionTwo="By Email"
						/>
					</FormGroup>
					<FormGroup row>
						<Label htmlFor="feedback" md={2}>
							Your Feedback
						</Label>
						<TextArea
							inputWidth={`md=${10}`}
							inputType="textarea"
							inputId="feedback"
							inputName="feedback"
							cols={null}
							rows={12}
							inputValue={field.feedback}
							onChange={handleChange}
						/>
					</FormGroup>
					<FormGroup row>
						<Col md={{ size: 10, offset: 2 }}>
							<Button type="submit" color="primary">
								Send Feedback
							</Button>
						</Col>
					</FormGroup> */}
				</Form>
			</div>
		</Container>
	);
}
