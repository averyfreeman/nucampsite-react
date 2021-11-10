import React, { Component } from 'react';
import {
	Button,
	Col,
	Container,
	Form,
	FormFeedback,
	FormGroup,
	// Input,
	// InputGroup,
	Label,
} from 'reactstrap';
import BCrumbHeading from 'Main/BCrumbHeading/BCrumbHeading';
import Checkbox from './Checkbox';
import FG from './FG';
import Selector from './Selector';
import TextArea from './TextArea';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
// import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			phoneNum: '',
			email: '',
			agree: false,
			contactType: 'By Phone',
			feedback: '',
			touched: {
				firstName: false,
				lastName: false,
				phoneNum: false,
				email: false,
			},
			lastEdited: '',
		};
		// this.handleBlur = this.handleBlur.bind(this);
		// this.handleChange = this.handleChange.bind(this);
		// this.handleSubmit = this.handleSubmit.bind(this);s
	}

	componentDidUpdate() {
		console.log(this.state);
	}

	isValid = (firstName, lastName, phoneNum, email) => {
		const valid = {
			errorState: {
				firstName: '',
				lastName: '',
				phoneNum: '',
				email: '',
			},
			msg: {
				ok: '',
				tooShort: 'Must be at least 2 characters',
				tooLong: 'Must be less than 15 characters long',
				onlyNum: 'Phone number should be only numbers',
				numTooShort: 'Phone number should be 10 numbers long',
				symbolMissing: 'Email must contain an @ symbol',
			},
		};

		if (this.state.touched.firstName) {
			this.state.firstName < 2
				? (valid.errorState.firstName = valid.msg.tooShort)
				: this.state.firstName > 15
				? (valid.errorState.firstName = valid.msg.tooLong)
				: (valid.errorState.firstName = valid.msg.ok);
		}

		if (this.state.touched.lastName) {
			this.state.lastName < 2
				? (valid.errorState.lastName = valid.msg.tooShort)
				: this.state.lastName > 15
				? (valid.errorState.lastName = valid.msg.tooLong)
				: (valid.errorState.lastName = valid.msg.ok);
		}

		const reg = /^\d+$/;

		this.state.touched.phoneNum && !reg.test(phoneNum)
			? (valid.errorState.phoneNum = valid.msg.onlyNum)
			: (valid.errorState.phoneNum = valid.msg.ok);

		this.state.touched.email && !email.includes('@')
			? (valid.errorState.email = valid.msg.symbolMissing)
			: (valid.errorState.email = valid.msg.ok);

		// console.log(valid.errorState);
		return valid.errorState;
	};

	handleBlur = (field) => () => {
		this.setState({
			touched: { ...this.state.touched, [field]: true },
		});
	};

	handleChange = (e) => {
		const target = e.target;
		const name = target.name;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		this.setState({ [name]: value });
		this.setState({ lastEdited: name });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		console.log('Current state: ', JSON.stringify(this.state));
		alert('Submitted: ', JSON.stringify());
	};

	render() {
		const errors = this.isValid(
			this.state.firstName,
			this.state.lastName,
			this.state.phoneNum,
			this.state.email,
		);

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
					<Form onSubmit={this.handleSubmit}>
						<FG
							formFeedback={errors.firstName}
							htmlFor="firstName"
							inputClassNames=""
							inputId="firstName"
							inputName="firstName"
							invalid={!!errors.firstName > 0}
							inputType="text"
							inputWidth={10}
							labelClassNames=""
							label="First Name"
							labelWidth={2}
							onBlur={this.handleBlur('firstName')}
							onChange={this.handleChange}
							placeholder="First Name"
							value={this.state.firstName}
						/>

						<FG
							formFeedback={errors.lastName}
							htmlFor="lastName"
							inputClassNames=""
							inputId="lastName"
							inputName="lastName"
							invalid={!!errors.lastName > 0}
							inputType="text"
							inputWidth={10}
							labelClassNames=""
							label="Last Name"
							labelWidth={2}
							onBlur={this.handleBlur('lastName')}
							onChange={this.handleChange}
							placeholder="Last Name"
							value={this.state.lastName}
						/>
						<FG
							formFeedback={errors.phoneNum}
							htmlFor="phoneNum"
							inputClassNames=""
							inputType="tel"
							inputId="phoneNum"
							inputName="phoneNum"
							invalid={!!errors.phoneNum > 0}
							inputWidth={10}
							label="Phone Number"
							labelClassNames=""
							labelWidth={2}
							onBlur={this.handleBlur('phoneNum')}
							onChange={this.handleChange}
							placeholder="Phone Number"
							value={this.state.phoneNum}
						/>
						<FG
							formFeedback={errors.email}
							htmlFor="email"
							inputClassNames=""
							inputType="email"
							inputId="email"
							inputName="email"
							invalid={!!errors.email > 0}
							inputWidth={10}
							label="Email"
							labelClassNames=""
							labelWidth={2}
							onBlur={this.handleBlur('email')}
							onChange={this.handleChange}
							placeholder="Email"
							value={this.state.email}
						/>
						{/* <FormFeedback>{errors.email}</FormFeedback> */}
						<FormGroup row>
							<Checkbox
								check={true}
								dimensions={{ width: 2, offset: 2 }}
								inputType="checkbox"
								inputName="agree"
								onChange={this.handleChange}
								label="May we contact you?"
							/>
							<Selector
								classNames="my-3 col-md-2"
								inputType="select"
								inputName="contactType"
								onChange={this.handleChange}
								optionOne="By Phone"
								optionTwo="By Email"
								selectorWidth={4}
							/>
						</FormGroup>
						<FormGroup row>
							<Label htmlFor="feedback" md={2}>
								Your Feedback
							</Label>
							<TextArea
								inputWidth={10}
								inputType="textarea"
								inputId="feedback"
								inputName="feedback"
								cols={null}
								rows={12}
								inputValue={this.state.feedback}
								onChange={this.handleChange}
							/>
						</FormGroup>
						<FormGroup row>
							<Col md={{ size: 10, offset: 2 }}>
								<Button type="submit" color="primary">
									Send Feedback
								</Button>
							</Col>
						</FormGroup>
					</Form>
				</div>
			</Container>
		);
	}
}

export default Contact;
