import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from 'Main/shared/redux/configureStore';
// import store from 'Main/shared/redux/toolkittry-configureStore';
import Main from 'Main/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'typeface-lobster';
import 'typeface-open-sans';
import 'typeface-roboto';
import 'typeface-roboto-condensed';
import 'typeface-roboto-mono';
import 'typeface-share-tech-mono';

const store = ConfigureStore();
console.log(store.getState());
const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<Main />
			</Router>
		</Provider>
	);
};

export default App;
