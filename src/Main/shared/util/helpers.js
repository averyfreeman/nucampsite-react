import * as R from 'rambda';

export const selectItem = (arr, key, val) =>
	R.filter(R.propEq(key, val), arr)[0];

// export const selectByKeyValue = (arr, key, val) =>
// 	R.filter(R.propEq(key, val), arr);

// WIP
export const matchRoute = (arr, match) =>
	R.filter((pos) => pos.id === +match.params.routeId)[0];
