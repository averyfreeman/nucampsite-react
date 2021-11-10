import React, { Component } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import { connect } from 'react-redux';
import { addComment } from 'Main/shared/redux/ActionCreators';
import useXY from 'Main/shared/util/useXY';
import exports from 'Main/shared';
import './Main.css';
import { render } from 'react-dom';

const mapStateToProps = (state) => {
	return {
		campsites: state.campsites,
		comments: state.comments,
		partners: state.partners,
		promotions: state.promotions,
	};
};

const mapDispatchToProps = {
	addComment: (campsiteId, rating, author, text) =>
		addComment(campsiteId, rating, author, text),
};

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mode: false,
		};
	}

	handleMode = (e) => {
		this.setState({ mode: !mode });
	};

	render() {
		const { X, Y } = useXY();

		const { campsites, comments, partners, promotions } = props;
		const {
			components: {
				About,
				Campsite,
				Comments,
				Contact,
				Directory,
				Footer,
				Header,
				Home,
				Jumbotron,
			},
			helpers: { selectItem },
		} = exports;

		const featuredCampsite = selectItem(campsites, 'featured', true);
		const featuredPartner = selectItem(partners, 'featured', true);
		const matchedCampsite = (campsites, match) =>
			campsites.filter(
				(campsite) => campsite.id === +match.params.campsiteId,
			)[0];
		const modeClassName = mode ? 'dark' : 'light';
		const modeStyles = mode ? 'Main__page-dark' : 'Main__page-light';

		const HomePage = () => {
			return (
				<Home
					campsite={featuredCampsite}
					promotion={promotions[0]}
					partner={featuredPartner}
					modeClassName={modeClassName}
				/>
			);
		};

		const CampsiteWithId = (props) => {
			// console.log(props);
			const { addComment, comments, match } = props;
			let { id, name } = matchedCampsite(campsites, match);
			const matchedComs = comments.filter(
				(comment) => comment.campsiteId === id,
			);

			// useEffect(() => {
			// 	console.log(addComment, comments, match, id, name, matchedComs);
			// }, []);

			// return <div></div>;
			return (
				<Container>
					<Row>
						<Campsite
							campsite={matchedCampsite(campsites, match)}
							match={match}
							mode={mode}
							modeClassName={modeClassName}
						/>
						<Comments
							addComment={addComment}
							allComments={comments}
							campsiteId={id}
							comments={matchedComs}
							match={match}
							mode={mode}
							modeClassName={modeClassName}
						/>
					</Row>
				</Container>
			);
		};

		return (
			<div>
				<Header
					mode={mode}
					modeStyles={modeStyles}
					handleMode={handleMode}
					Jumbotron={Jumbotron}
				/>

				<div className={modeStyles}>
					<Switch>
						<Route path="/home">
							<HomePage campsites={campsites} />
						</Route>
						{/* <Route
						exact
						path="/directory/:campsiteId"
						component={CampsiteWithId}
					/> */}
						<Route
							exact
							path="/directory"
							render={() => (
								<Directory
									campsites={campsites}
									// comments={comments}
									// match={match}
									mode={mode}
									modeClassName={modeClassName}
									modeStyles={modeStyles}
									// props={props}
								/>
							)}
						/>
						<Route
							exact
							path="/directory/:campsiteId"
							render={(props) => (
								<CampsiteWithId
									addComment={addComment}
									comments={comments}
									match={props.match}
								/>
							)}
						/>
						<Route exact path="/contactus">
							<Contact
								// match={match}
								mode={mode}
								modeStyles={modeStyles}
								modeClassName={modeClassName}
							/>
						</Route>
						<Route exact path="/aboutus">
							<About
								// match={match}
								partners={partners}
								modeStyles={modeStyles}
								modeClassName={modeClassName}
							/>
						</Route>
						<Redirect to="home" />
					</Switch>
				</div>
				<Footer mode={mode} resPx={36} />
			</div>
		);
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
