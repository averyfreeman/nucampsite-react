import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function BCrumbHeading(props) {
	return (
		<div>
			<Breadcrumb>
				<BreadcrumbItem>
					<Link to="/home">Home</Link>
				</BreadcrumbItem>
				<BreadcrumbItem active>{props.name}</BreadcrumbItem>
			</Breadcrumb>
			<h2>{props.name}</h2>
			<hr />
		</div>
	);
}

export default BCrumbHeading;
