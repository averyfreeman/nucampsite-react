import React, { Fragment } from 'react';
import { Card, CardBody, CardImg, CardText, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import BCrumbHeading from 'Main/BCrumbHeading/BCrumbHeading';
import RatingStars from 'Main/pages/Directory/Campsite/RatingStars';

// import PropTypes from 'prop-types';

function Campsite(props) {
	// console.log(props);
	if (props.campsite) {
		const {
			campsite: { description, image, name, id },
			mode,
		} = props;

		const bodyMode = mode ? 'text-light bg-secondary' : 'text-dark bg-light';

		return (
			<Fragment>
				<Col md={6}>
					<BCrumbHeading name={name} />
					<Card>
						<Link to={`/directory/:${id}`} className="text-decoration-none">
							<CardImg top src={image} alt={name} className={`text-center`} />
							<CardBody className={`${bodyMode}`}>
								<CardText>{description}</CardText>
								<RatingStars />
							</CardBody>
						</Link>
					</Card>
				</Col>
			</Fragment>
		);
	}
	return <div></div>;
}

// Campsite.propTypes = {
// 	campsite: PropTypes.objectOf(PropTypes.string),
// 	description: PropTypes.string,
// 	image: PropTypes.string,
// 	mode: PropTypes.bool,
// 	name: PropTypes.string,
// };

export default Campsite;
