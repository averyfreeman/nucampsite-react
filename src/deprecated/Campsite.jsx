import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

class Campsite extends Component {
	render() {
		if (this.props.campsite) {
			const { mode } = this.props;
			const { comments, description, image, name } = this.props.campsite;

			const dateParse = (date) => {
				return new Intl.DateTimeFormat('en-US', {
					year: 'numeric',
					month: 'short',
					day: '2-digit',
				}).format(new Date(Date.parse(date)));
			};
			const modeText = mode ? `dark-orange` : `text-black`;

			return (
				<Container>
					<Row>
						<Col md={5} className={`m-1`}>
							<Card>
								<CardImg top src={image} alt={name} className={`text-center`} />
								<CardBody
									className={`${
										mode ? 'text-light bg-secondary' : 'text-dark bg-light'
									}`}
								>
									<CardTitle className="h2">{name}</CardTitle>
									<CardText>{description}</CardText>
								</CardBody>
							</Card>
						</Col>
						<Col md={5} className="m-1">
							<CardText className={`h6 ${modeText}`}>Comments: </CardText>
							{comments &&
								comments.map((com, i) => (
									<div key={`com${i}`} className={modeText}>
										<CardText tag="p" className={`text-sm ${modeText}`}>
											"{com.text}"
										</CardText>
										<CardText tag="p" className={`text-sm ${modeText}`}>
											<span>
												{com.author}, {dateParse(com.date)}
											</span>
										</CardText>
									</div>
								))}
						</Col>
					</Row>
				</Container>
			);
		}
		return <div></div>;
	}
}

Campsite.propTypes = {
	campsite: PropTypes.object,
	comments: PropTypes.array,
	description: PropTypes.string,
	image: PropTypes.string,
	mode: PropTypes.bool,
	name: PropTypes.string,
	date: PropTypes.string,
	text: PropTypes.string,
	author: PropTypes.string,
};

export default Campsite;
