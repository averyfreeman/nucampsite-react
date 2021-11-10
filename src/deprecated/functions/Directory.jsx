import React, { useState } from 'react';
import {
	Card,
	CardImg,
	CardImgOverlay,
	CardTitle,
	Col,
	Container,
	Row,
} from 'reactstrap';
import CampsiteInfo from 'functions/CampsiteInfo';

const Directory = (props) => {
	const [selectedCampsite, setSelectedCampsite] = useState(null);
	const globalCNs = props.mode === true ? 'text-light' : 'text-dark';

	const cardImgOverlayBg = props.mode
		? { backgroundColor: '#afafaf755', color: '#ccc' }
		: { backgroundColor: '#00000075', color: '#fff' };

	const onCampsiteSelect = (obj) => {
		setSelectedCampsite(obj);
		console.log(selectedCampsite);
	};

	const directory = ({ campsites }, onCampsiteSelect) => {
		{
			campsites &&
				campsites.map((campsite, i) => {
					return (
						<Col md={5} key={campsite.id} className={`m-1 text-center`}>
							<Card onClick={() => onCampsiteSelect(campsite)}>
								<CardImg
									width="100%"
									src={campsite.image}
									alt={campsite.name}
								/>
								<CardImgOverlay
									className={`d-flex flex-column align-items-center align-items-md-start justify-content-center justify-content-md-start`}
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
					);
				});
		}
	};

	return (
		<Container className={globalCNs}>
			<Row>{directory}</Row>
			<CampsiteInfo campsite={selectedCampsite} mode={props.mode} />
		</Container>
	);
};
export default Directory;
