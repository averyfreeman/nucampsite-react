import React, { Fragment, useState } from 'react';
import { Container, Label, Navbar, NavbarBrand, Tooltip } from 'reactstrap';
import Contact from 'functions/Contact';
import Directory from 'functions/Directory';
import { CAMPSITES as campsites } from 'shared/campsites';
import { COMMENTS as comments } from 'shared/comments';
import ModeSwitch from 'styles/ModeSwitch';
import 'styles/App.css';

const App = () => {
	const [mode, setMode] = useState(false);
	const [modeTt, setModetTt] = useState(false);

	const handleMode = (nextMode) => {
		setMode(nextMode);
	};

	const handleModeTt = (e) => {
		if (e._reactName === 'onMouseEnter') {
			setModetTt(true);
		} else if (e._reactName === 'onMouseLeave') {
			setModetTt(false);
		}
	};

	return (
		<Fragment className="App">
			<Navbar
				dark={mode === true ? true : false}
				color={mode === true ? 'primary' : 'light'}
			>
				<Container>
					<NavbarBrand href="/">
						<b>NuCamp</b>
					</NavbarBrand>
					<Label
						className="text-center"
						onMouseEnter={handleModeTt}
						onMouseLeave={handleModeTt}
					>
						<ModeSwitch onChange={handleMode} checked={mode} />
						<br />
						{/* <span style={{ color: mode === true ? 'white' : 'black' }}> */}
						<span className={`${mode === true ? 'text-light' : 'text-dark'}`}>
							Dark mode: <b>{mode === true ? 'On' : 'Off'}</b>
						</span>
					</Label>
					<Tooltip placement="left" isOpen={modeTt} target="mode-switch">
						Toggles between light and dark modes
					</Tooltip>
				</Container>
			</Navbar>
			<Container
				fluid
				className={`app-body ${mode === true ? 'bg-dark' : 'bg-light'}`}
			>
				<Directory
					campsites={campsites}
					className="mb-2 text-center"
					mode={mode}
				/>
			</Container>
		</Fragment>
	);
};

export default App;
