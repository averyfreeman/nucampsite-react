import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import BCrumbHeading from 'Main/BCrumbHeading/BCrumbHeading';
import RendDirItem from 'Main/pages/Directory/RendDirItem';

const Directory = (props) => {
	const { campsites, mode, modeClassName } = props;
	// console.log(props);
	// let bar = useRouteMatch();
	// console.dir(bar);

	const mapDirItems = campsites.map((campsite, i) => (
		<div key={campsite.id} className={`m-1 text-center`}>
			<RendDirItem campsite={campsite} />
		</div>
	));

	return (
		<Container>
			{/* <Col md={5} className=""> */}
			<BCrumbHeading
				name="Directory"
				mode={mode}
				modeClassName={modeClassName}
			/>
			<Row>
				{/* <div className="col-md-5">{mapDirItems}</div> */}
				<div className="d-flex flex-row flex-grow flex-wrap col-md-5">
					{mapDirItems}
				</div>
			</Row>
			{/* </Col> */}
		</Container>
	);
};

export default Directory;
