import React from 'react';
import {
	Card,
	CardBody,
	CardImg,
	CardText,
	CardTitle,
	Col,
	Container,
	Row,
} from 'reactstrap';

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

const Home = (props) => {
	const { campsite, modeClassName, promotion, partner } = props;

	return (
		<Container>
			<Row>
				<Col className="col-md m-1">
					<RenderCard item={campsite} modeClassName={modeClassName} />
				</Col>
				<Col className="col-md m-1">
					<RenderCard item={promotion} modeClassName={modeClassName} />
				</Col>
				<Col className="col-md m-1">
					<RenderCard item={partner} modeClassName={modeClassName} />
				</Col>
			</Row>
		</Container>
	);
};

export default Home;
