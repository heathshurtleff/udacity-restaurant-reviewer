import * as types from './actionTypes';
import http from 'http';

export function loadRestaurantsSuccess(restaurants) {
	return {type: types.LOAD_RESTAURANTS_SUCCESS, restaurants};
}

export function loadDefaultRestaurants() {
	return function(dispatch) {
		http.get('/api/zomato', (res) => {
			let restaurants = '';

			res.on('data', (d) => {
				restaurants += d;
			});

			res.on('end', () => {
				let restaurantsJson = JSON.parse(restaurants);
				dispatch(loadRestaurantsSuccess(restaurantsJson));
			});
		});
	};
}