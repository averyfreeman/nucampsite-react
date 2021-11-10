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

class Directory extends Component {
	render() {
		const { campsites, mode } = this.props;
		// const globalCNs =
		// mode ? 'text-light bg-dark' : 'text-dark bg-light';
		// const adaptiveText = mode ? `text-dark` : `text-light`;
		const cardImgOverlayBg = mode
			? { backgroundColor: '#afafaf755', color: '#ccc' }
			: { backgroundColor: '#00000075', color: '#fff' };

		// onClick={() => onClick(campsite.id)}

		return (
			<Container>
				<Row>
					{/* RenderDirectoryItem substitute: */}
					{campsites.map((campsite, i) => (
						<Col md={5} key={campsite.id} className={`m-1 text-center`}>
							<Card>
								<CardImg src={campsite.image} alt={campsite.name} />
								<CardImgOverlay
									className={`d-flex flex-column align-items-center align-items-md-start justify-content-center justify-content-md-start preserve-word`}
								>
									<CardTitle
										className={`rounded w-50 p-1`}
										style={cardImgOverlayBg}
									>
										{campsite.name}
									</CardTitle>
								</CardImgOverlay>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
		);
	}
}

Directory.propTypes = {
	campsites: PropTypes.array,
	directory: PropTypes.array,
	mode: PropTypes.bool,
	selectedCampsite: PropTypes.object,
};

export default Directory;
