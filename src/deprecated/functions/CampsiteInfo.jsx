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
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		if (this.props.campsite) {
			const { comments, description, image, name } = this.props.campsite;
			const { mode } = this.props;

			const modeText = mode === true ? `text-secondary` : `text-black`;

			const commentBlock = comments.map((com, i) => {
				return (
					<div key={`com${i}`} className={modeText}>
						<CardText className="h5">"{com.text}"</CardText>
						<CardTitle tag="p" className="text-sm modeText">
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
				);
			});

			return (
				<Row>
					<Col md={5} className={`m-1`}>
						<Card>
							<CardBody
								className={`${
									mode === true
										? 'text-light bg-secondary'
										: 'text-dark bg-light'
								}`}
							>
								<CardImg top src={image} alt={name} className={`text-center`} />
								<CardTitle className="h1">{name}</CardTitle>
								<CardText>{description}</CardText>
							</CardBody>
						</Card>
					</Col>
					<Col md={5} className="m-1">
						<CardText>Comments: </CardText>
						{commentBlock}
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
	mode: PropTypes.bool,
	name: PropTypes.string,
};

export default CampsiteInfo;
