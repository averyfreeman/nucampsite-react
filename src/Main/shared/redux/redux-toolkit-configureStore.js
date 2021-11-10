import { configureStore } from '@reduxjs/toolkit';
import { CAMPSITES as campsites } from './campsites';
import { COMMENTS as comments } from './comments';
import { PARTNERS as partners } from './partners';
import { PROMOTIONS as promotions } from './promotions';
import { Campsites } from './campsites';
import { Comments } from './comments';
import { Partners } from './partners';
import { Promotions } from './promotions';

const store = configureStore({
	campsites: Campsites,
	comments: Comments,
	partners: Partners,
	promotions: Promotions,
});

export default store;
