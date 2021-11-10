import React from 'react';
import { Col, Input } from 'reactstrap';

const TextArea = (props) => {
	// console.log(props);
	return (
		<Col md={props.inputWidth}>
			<Input
				type={props.inputType}
				id={props.inputId}
				name={props.inputName}
				cols={props.cols}
				rows={props.rows}
				value={props.inputValue}
				onChange={props.onChange}
			/>
		</Col>
	);
};

export default TextArea;
