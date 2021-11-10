import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import ModeSwitch from 'Main/Header/Jumbotron/ModeSwitch/ModeSwitch';
import './Jumbotron.css';

const Jumbotron = (props) => {
	const { cyanSwitcher, mode, onChange, orangeSwitcher } = props;
	// console.log(mode);
	const jumboSwitcher = mode ? 'Jumbotron__dark' : 'Jumbotron__light';

	return (
		<div className={jumboSwitcher}>
			<Container>
				<Row className="d-flex align-items-end justify-content-between flex-wrap">
					<Col
						sm={6}
						className="align-self-end justify-self-start preserve-word
        "
					>
						<h1>NuCamp</h1>
						<h2 className={orangeSwitcher}>a better way to camp</h2>
					</Col>

					<Col className="d-flex align-items-center justify-content-end">
						<ModeSwitch
							onChange={onChange}
							checked={mode}
							cyanSwitcher={cyanSwitcher}
						/>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Jumbotron;
