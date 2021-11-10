import React from 'react';
import { Col } from 'reactstrap';
import { Control } from 'react-redux-form';

const Selector = (props) => {
	// console.log(props);
	return (
		<Col md={2} className={props.classNames}>
			<Control.select
				model={props.model}
				className="form-control"
				// md={4}
				name={props.inputName}
				value={props.contactType}
			>
				<option>{props.optionOne}</option>
				<option>{props.optionTwo}</option>
			</Control.select>
		</Col>
	);
};

export default Selector;
