// import React, { createContext, useState } from 'react';
// // import data from 'Main/shared/data';

// export const ModeContext = createContext(null);

// /* eslint-disable-next-line */
// export default (props) => {
// 	// const { mode } = props;
// 	const [mode, setMode] = useState(null);
// 	const ModeContext = createContext();

// 	const handleMode = (e) => {
// 		setMode(!mode);
// 	};

// 	// const reportMode = (mode) => {
// 	// 	console.log(`the current mode is: ${mode}`);
// 	// };

// 	// console.log(data);
// 	// console.log(mode);

// 	const modeContext = {
// 		mode: [mode, setMode],
// 		// handleMode: function (e) {
// 		// 	setMode(!mode);
// 		// },
// 		// reportMode: function (mode) {
// 		// 	console.log(`the current mode is: ${mode}`);
// 		// },
// 	};

// 	// console.log(ModeContext);

// 	return (
// 		<ModeContext.Provider value={modeContext}>
// 			{props.children}
// 		</ModeContext.Provider>
// 	);
// };
