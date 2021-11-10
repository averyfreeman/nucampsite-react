import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	Card,
	CardBody,
	CardImg,
	CardText,
	CardTitle,
	Col,
	Row,
} from 'reactstrap';

class CampsiteInfo extends Component {
	render() {
		if (this.props.campsite) {
			const { comments, description, image, name } = this.props.campsite;

			return (
				<Row>
					<Col md={5} className={`m-1`}>
						<Card>
							<CardBody>
								<CardImg top src={image} alt={name} className={`text-center`} />
								<CardTitle className="h1">{name}</CardTitle>
								<CardText>{description}</CardText>
							</CardBody>
						</Card>
					</Col>
					<Col md={5} className="m-1">
						<CardText>Comments: </CardText>
						{comments &&
							comments.map((com, i) => (
								<div key={`com${i}`}>
									<CardText className="h5">"{com.text}"</CardText>
									<CardTitle tag="p" className="text-sm">
										<span>
											{com.author},{' '}
											{new Intl.DateTimeFormat('en-US', {
												year: 'numeric',
												month: 'short',
												day: '2-digit',
											}).format(new Date(Date.parse(com.date)))}
										</span>
									</CardTitle>
								</div>
							))}
					</Col>
				</Row>
			);
		}
		return <div></div>;
	}
}

CampsiteInfo.propTypes = {
	campsite: PropTypes.object,
	comments: PropTypes.array,
	description: PropTypes.string,
	image: PropTypes.string,
	name: PropTypes.string,
	date: PropTypes.string,
	text: PropTypes.string,
	author: PropTypes.string,
};

export default CampsiteInfo;
