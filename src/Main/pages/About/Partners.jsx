import React from 'react';
import { Media } from 'reactstrap';
// import Image from 'react-imgr';
// import React, { Fragment } from 'react';
// import {
// 	Breadcrumb,
// 	BreadcrumbItem,
// 	Card,
// 	CardBody,
// 	CardHeader,
// 	Col,
// 	Media,
// 	MediaProps,
// 	Row,
// } from 'reactstrap';

function Partners(props) {
	const { partners } = props;

	if (partners) {
		return partners.map((pr, i) => (
			<Media key={`part-00${i}`}>
				<Media object src={pr.image} width="150px" alt={pr.name} />
				<Media body className="ml-5 mb-4">
					<Media heading>{pr.name}</Media>
					{pr.description}
				</Media>
			</Media>
		));
	}
}

export default Partners;
