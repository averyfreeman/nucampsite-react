import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import { Campsites } from './campsites';
import { Comments } from './comments';
import { Partners } from './partners';
import { Promotions } from './promotions';
// const logger = createLogger();

export const ConfigureStore = () => {
	const store = createStore(
		// Comments,
		// COMMENTS,
		combineReducers({
			campsites: Campsites,
			comments: Comments,
			partners: Partners,
			promotions: Promotions,
		}),
		applyMiddleware(thunk, logger),
	);
	return store;
};
