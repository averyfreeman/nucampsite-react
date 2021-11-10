import React, { Fragment } from 'react';
import { Col, Label } from 'reactstrap';
import Switch from 'react-switch';

const ModeSwitch = (props) => {
	let { cyanSwitcher, checked, onChange } = props;
	let fauxChange = () => !checked;
	checked ? checked : false;
	onChange ? onChange : (onChange = fauxChange);
	return (
		<Fragment>
			<Col
				tag="span"
				className="d-flex align-self-end justify-content-end switch-container"
			>
				<Label className="text-center">
					<Switch
						onChange={onChange}
						checked={checked}
						className={props.className || 'react-switch'}
						id={props.id || 'mode-switch'}
						onColor={props.onColor || '#363636'}
						onHandleColor={props.onHandleColor || '#ffffff'}
						handleDiameter={props.diameter || 20}
						uncheckedIcon={props.uncheckedIcon || false}
						checkedIcon={props.checkedIcon || false}
						boxShadow="2px 1px 5px rgba(0, 0, 0, 0.6)"
						activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
						height={props.height || 20}
						width={props.width || 36}
					/>
					<br />
					<span className={`${cyanSwitcher} preserve-word responsive-font`}>
						Dark mode: <b>{checked ? 'On' : 'Off'}</b>
					</span>
				</Label>
			</Col>
		</Fragment>
	);
};

export default ModeSwitch;
