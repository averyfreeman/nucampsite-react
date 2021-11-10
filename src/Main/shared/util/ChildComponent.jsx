import React from 'react';

// ChildComponent uses React.forwardRef to obtain the ref passed to it
// and then forward it to the DOM div that it renders.
const ChildComponent = React.forwardRef((props, ref) => (
	<div ref={ref}>
		<span>{props.children}</span>
	</div>
));

export default ChildComponent;
