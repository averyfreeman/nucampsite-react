import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	Card,
	CardImg,
	CardImgOverlay,
	CardTitle,
	Col,
	Container,
	Row,
} from 'reactstrap';

// this copy has been sanitized of extraneous functionality for assignment submission

class Directory extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedCampsite: null,
		};
	}

	onCampsiteSelect(obj) {
		this.setState({
			selectedCampsite: obj,
		});
		console.log(this.state);
	}

	render() {
		const directory = this.props.campsites.map((campsite, i) => {
			return (
				<Col md={5} key={campsite.id} className={`m-1 text-center`}>
					<Card onClick={() => this.onCampsiteSelect(campsite)}>
						<CardImg width="100%" src={campsite.image} alt={campsite.name} />
						<CardImgOverlay
							className={`d-flex flex-column align-items-center align-items-md-start justify-content-center justify-content-md-start`}
						>
							<CardTitle className={`rounded w-50 p-1`}>
								{campsite.name}
							</CardTitle>
						</CardImgOverlay>
					</Card>
				</Col>
			);
		});

		return (
			<Container>
				<Row>{directory}</Row>
				<CampsiteInfo campsite={this.state.selectedCampsite} />
			</Container>
		);
	}
}

Directory.propTypes = {
	campsite: PropTypes.object,
	campsites: PropTypes.array,
	directory: PropTypes.array,
	selectedCampsite: PropTypes.object,
};

export default Directory;
