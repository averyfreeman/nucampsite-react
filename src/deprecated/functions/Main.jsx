import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import { Redirect, Route, Switch } from 'react-router-dom';
import Campsite from 'components/Campsite';
import Directory from 'components/Directory';
import Header from 'components/Header';
import Home from 'components/Home';
import Footer from 'components/Footer';
import useWindowDimensions from 'hooks/useWinDimensions';

import { CAMPSITES as campsites } from 'shared/campsites-old';

const Main = () => {
	const [fontSize, setFontSize] = useState({ fontSize: null });
	const [mode, setMode] = useState({ mode: false });
	const { width, height } = useWindowDimensions(null);
	console.log(width, height);
	let fontBase = 16;
	useEffect(() => {
		fontBase = width * 0.02;
		setFontSize({ fontSize: `${fontBase}px` });
		console.log(fontBase);
	}, [width, fontBase, fontSize, setFontSize]);
	// class Main extends Component {
	// 	constructor(props) {
	// 		super(props);
	// 		this.state = {
	// 			campsites,
	// 			mode: false,
	// 			// selectedCampsite: null,
	// 		};
	// 		this.handleMode = this.handleMode.bind(this);
	// 	}
	// 	// dark mode switch handler --
	// 	// left in Main to travel to rest of App
	// 	handleMode(mode) {
	// 		this.setState({ mode });
	// 	}
	const toggleMode = () => {
		setMode(!mode);
	};
	console.log(campsites);

	// // our campsite selection handler
	// onCampsiteSelect(campsiteId) {
	// 	this.setState({
	// 		selectedCampsite: campsiteId,
	// 	});
	// }

	// 	<Container
	// 	fluid
	// 	className={`app-body ${mode ? 'bg-dark' : 'bg-light'}`}
	// >
	// 	<Campsite
	// 	// why are we filtering the array instead of using the id for index?
	// 	campsite={campsites[selectedCampsite]}
	// 	// this is convoluted and extraneous:
	// 	// campsite={
	// 	// 	campsites.filter(
	// 	// 		(campsite) => campsite.id === selectedCampsite,
	// 	// 	)[0]
	// 	// }
	// 	mode={mode}
	// />
	// </Container>

	// render() {
	// const { campsites, mode, selectedCampsite } = this.state;

	const HomePage = () => <Home />;
	return (
		<div>
			<Header
				mode={mode}
				// send handler to Header
				fontBase={fontBase}
				onChange={toggleMode}
			/>
			{/* <div className="app-bopy"> */}
			<Switch>
				<Route path="/home" component={HomePage} />
				<Route
					exact
					path="/directory"
					render={() => (
						<Directory
							mode={mode}
							campsites={campsites}
							// onClick={(campsiteId) => this.onCampsiteSelect(campsiteId)}
						/>
					)}
				/>
				<Redirect to="home" />
			</Switch>
			{/* </div> */}
			<Footer mode={mode} />
		</div>
	);
};
// }

export default Main;
