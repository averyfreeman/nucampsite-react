import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';

const RenderCard = (props) => {
	const { item, modeClassName } = props;
	return (
		<Card className={modeClassName}>
			<CardImg src={item.image} alt={item.name} />
			<CardBody>
				<CardTitle>{item.name}</CardTitle>
				<CardText>{item.description}</CardText>
			</CardBody>
		</Card>
	);
};

export default RenderCard;
