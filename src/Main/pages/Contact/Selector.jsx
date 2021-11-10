import React from 'react';
import { Col, FormGroup, Input } from 'reactstrap';

const Selector = (props) => {
	// console.log(props);
	return (
		<Col md={4} className={props.classNames}>
			{/* <FormGroup> */}
			<Input
				className=""
				// md={4}
				name={props.inputName}
				onChange={props.onChange}
				type="select"
				value={props.contactType}
			>
				<option>{props.optionOne}</option>
				<option>{props.optionTwo}</option>
			</Input>
			{/* </FormGroup> */}
		</Col>
	);
};

export default Selector;
