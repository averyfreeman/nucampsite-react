import React, { Fragment } from 'react';
import { Col, Label, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

// 6-18-2021 - note: this component is not finished - contains dummy values (very misleading, but looks cool...)
// todo: find a source for actual reviews, connect API or manually copy values

const property = {
	reviewCount: 34,
	rating: 5,
};

const RatingStars = (props) => {
	return (
		<Fragment>
			<Row className="d-flex flex-column align-items-center justify-content-center">
				<Label>Ratings:</Label>
				<Row
					tag="span"
					className="d-flex flex-row align-items-center justify-content-center p-2 bg-secondary rounded"
				>
					{Array(property.rating)
						.fill('')
						.map((_, i) => (
							<FontAwesomeIcon
								className="m-1"
								color={i < property.rating ? 'gold' : '#4A5568'}
								icon={faStar}
								key={i}
							/>
						))}
				</Row>
				{property.reviewCount} reviews
			</Row>
		</Fragment>
	);
};

export default RatingStars;
