import React, { useEffect, useState } from 'react';

const useXY = () => {
	const [{ X, Y }, setXY] = useState({
		X: null,
		Y: null,
	});

	useEffect(() => {
		// Handler to call on window resize
		function handleChange() {
			// Set window width/height to state
			setXY({
				X: window.innerWidth,
				Y: window.innerHeight,
			});
		}

		// Add event listener
		window.addEventListener('resize', handleChange);

		// Call handler right away so state gets updated with initial window size
		handleChange();

		// Remove event listener on cleanup
		return () => window.removeEventListener('resize', handleChange);
	}, []); // Empty array ensures that effect is only run on mount

	return { X, Y };
};

export default useXY;
