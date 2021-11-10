import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

// note: This was made by mistake - using Campsite component

const DirItem = (props) => {
	console.log(props);
	const { campsite } = props;
	return (
		<Card>
			{/* <Col md={5}> */}
			<Link to={`/directory/:${campsite.id}`}>
				<CardImg width="100%" src={campsite.image} alt={campsite.name} />
				<CardImgOverlay>
					<CardTitle>{campsite.name}</CardTitle>
				</CardImgOverlay>
			</Link>
			{/* </Col> */}
		</Card>
	);
};

export default DirItem;
