import React, { Fragment } from 'react';
import { Col, Label, Row } from 'reactstrap';
import { Control } from 'react-redux-form';

const FG = (props) => {
	// console.log(props);
	// console.log(`invalid prop for ${[props.inputName]} says: `, props.invalid);
	return (
		<Fragment>
			<Row className="form-group">
				<Label
					md={props.labelWidth}
					htmlFor={props.htmlFor}
					className={props.labelClasses}
				>
					{props.label}
				</Label>
				<Col md={props.inputWidth} className={props.inputClasses}>
					<Control.text
						className="form-control"
						model={props.model}
						id={props.inputId}
						name={props.inputName}
						placeholder={props.placeholder}
					/>
				</Col>
			</Row>
		</Fragment>
	);
};

export default FG;
