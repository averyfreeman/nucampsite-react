import React from 'react';
import { Col, FormGroup, Input, Label } from 'reactstrap';

const Checkbox = (props) => {
	// console.log(props);
	return (
		<Col className={props.classNames}>
			<FormGroup check={props.check}>
				<span>
					<Input
						checked={props.checked}
						name={props.inputName}
						onChange={props.onChange}
						type={props.inputType}
					/>{' '}
					<Label check={props.check}>
						<strong>{props.label}</strong>
					</Label>
				</span>
			</FormGroup>
		</Col>
	);
};

export default Checkbox;
