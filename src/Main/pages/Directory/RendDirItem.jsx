import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';

const RendDirItem = (props) => {
	const { campsite, mode } = props;
	// console.log(props);

	const overlayDimmer = mode
		? { backgroundColor: '#afafaf755', color: '#ccc' }
		: { backgroundColor: '#00000075', color: '#fff' };

	return (
		<Card>
			<Link to={`/directory/${campsite.id}`}>
				<CardImg src={campsite.image} alt={campsite.name} />
				<CardImgOverlay
					className={`d-flex align-items-center align-items-md-start justify-content-center justify-content-md-start preserve-word`}
				>
					<CardText className={`rounded w-50 p-1`} style={overlayDimmer}>
						{campsite.name}
					</CardText>
				</CardImgOverlay>
			</Link>
		</Card>
	);
};

export default RendDirItem;
