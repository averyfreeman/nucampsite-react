import * as ActionTypes from 'Main/shared/redux/ActionTypes';
import { CAMPSITES } from 'Main/shared/data/campsites';

export const addComment = (campsiteId, rating, author, text) => ({
	type: ActionTypes.ADD_COMMENT,
	payload: {
		campsiteId: campsiteId,
		rating: rating,
		author: author,
		text: text,
	},
});

export const fetchCampsites = () => (dispatch) => {
	dispatch(campsitesLoading());

	setTimeout(() => {
		dispatch(addCampsites(CAMPSITES));
	}, 2000);
};

export const campsitesLoading = () => ({
	type: ActionTypes.CAMPSITES_LOADING,
});

export const campsitesFailed = () => ({
	type: ActionTypes.CAMPSITES_FAILED,
	payload: errMess,
});

export const addCampsites = () => ({
	type: ActionTypes.ADD_CAMPSITES,
	payload: campsites,
});
