import React, { Fragment } from 'react';
import { Col, FormFeedback, FormGroup, Input, Label } from 'reactstrap';

const FG = (props) => {
	// console.log(props);
	// console.log(`invalid prop for ${[props.inputName]} says: `, props.invalid);
	return (
		<Fragment>
			<FormGroup row>
				<Label
					md={props.labelWidth}
					htmlFor={props.htmlFor}
					className={props.labelClasses}
				>
					{props.label}
				</Label>
				<Col md={props.inputWidth} className={props.inputClasses}>
					<Input
						id={props.inputId}
						invalid={props.invalid}
						name={props.inputName}
						onBlur={props.onBlur}
						onChange={props.onChange}
						placeholder={props.placeholder}
						type={props.inputType}
						value={props.value}
					/>
					<FormFeedback>{props.formFeedback}</FormFeedback>
				</Col>
			</FormGroup>
		</Fragment>
	);
};

export default FG;
