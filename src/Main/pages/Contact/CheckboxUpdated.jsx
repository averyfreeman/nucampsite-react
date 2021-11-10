import React, { Fragment } from 'react';
import { Col, Label } from 'reactstrap';
import { Control } from 'react-redux-form';

const Checkbox = (props) => {
	// console.log(props);
	return (
		<Fragment>
			<Col md={{ size: 4, offset: 2 }}>
				<div className="form-check">
					<Label check={props.check}>
						<Control.checkbox
							name={props.inputName}
							model={props.model}
							className="form-check-input"
						/>{' '}
						<strong>{props.label}</strong>
					</Label>
				</div>
			</Col>
		</Fragment>
	);
};

export default Checkbox;
