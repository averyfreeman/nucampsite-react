import React, { Component } from 'react';
import {
	Button,
	Col,
	Container,
	// Input,
	// InputGroup,
	Label,
	Row,
} from 'reactstrap';
import { Control, LocalForm } from 'react-redux-form';
import BCrumbHeading from 'Main/BCrumbHeading/BCrumbHeading';
import Checkbox from './CheckboxUpdated';
import FG from './FGUpdated';
import Selector from './SelectorUpdated';
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
	}

	componentDidUpdate() {
		console.log(this.state);
	}

	handleSubmit = (values) => {
		console.log('Current state: ', JSON.stringify(values));
		// alert('Submitted: ', JSON.stringify(values));
	};

	render() {
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
					<LocalForm onSubmit={(values) => this.handleSubmit(values)}>
						<FG
							model=".firstName"
							inputId="firstName"
							htmlFor="firstName"
							placeholder="First Name"
							inputName="firstName"
							inputClassNames=""
							inputWidth={10}
							labelClassNames=""
							label="First Name"
							labelWidth={2}
						/>

						<FG
							model=".lastName"
							inputId="lastName"
							inputName="lastName"
							placeholder="Last Name"
							htmlFor="lastName"
							inputClassNames=""
							inputWidth={10}
							labelClassNames=""
							label="Last Name"
							labelWidth={2}
						/>
						<FG
							model=".phoneNum"
							inputId="phoneNum"
							inputName="phoneNum"
							placeholder="Phone Number"
							htmlFor="phoneNum"
							inputClassNames=""
							inputWidth={10}
							label="Phone Number"
							labelClassNames=""
							labelWidth={2}
						/>
						<FG
							model=".email"
							inputId="email"
							inputName="email"
							placeholder="Email"
							htmlFor="email"
							inputClassNames=""
							inputWidth={10}
							label="Email"
							labelClassNames=""
							labelWidth={2}
						/>
						<Row className="form-group">
							<Checkbox
								className="form-check-input"
								model=".agree"
								dimensions={{ width: 2, offset: 2 }}
								inputName="agree"
								label="May we contact you?"
							/>
							<Selector
								classNames="my-3 col-md-2"
								inputName="contactType"
								optionOne="By Phone"
								optionTwo="By Email"
								selectorWidth={4}
							/>
						</Row>
						<Row className="form-group">
							<Label htmlFor="feedback" md={2}>
								Your Feedback
							</Label>
							<Col md={10}>
								<Control.TextArea
									model=".feedback"
									className="form-control"
									inputWidth={10}
									inputType="textarea"
									inputId="feedback"
									inputName="feedback"
									rows={12}
								/>
							</Col>
						</Row>
						<Row className="form-group">
							<Col md={{ size: 10, offset: 2 }}>
								<Button type="submit" color="primary">
									Send Feedback
								</Button>
							</Col>
						</Row>
					</LocalForm>
				</div>
			</Container>
		);
	}
}

export default Contact;
