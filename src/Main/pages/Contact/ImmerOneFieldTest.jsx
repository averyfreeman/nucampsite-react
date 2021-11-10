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
import FG from './FG';

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
		setFields((draftState) => {
			draftState.push(field);
		});
		console.log('Data submitted: ', JSON.stringify(fields));
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
				<Form onSubmit={handleSubmit}>
					<FG
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
					<Button onClick={handleSubmit}>Submit</Button>
				</Form>
			</div>
		</Container>
	);
}
