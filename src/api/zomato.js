import https from 'https';

const HOSTNAME = 'developers.zomato.com';
const PATH_BASE = '/api/v2.1/';
const HEADERS = {
	'Accept': 'application/json',
	'user-key': 'caec13e77a2cb822e13ef9ed494c4768'
};

class Zomato {
	static getDefaultRestaurants(request, response) {
		let reqOpts = {
			hostname: HOSTNAME,
			method: 'GET',
			path: PATH_BASE + 'search',
			headers: HEADERS
		};
		https.get(reqOpts, (res) => {
			let data = '';
			res.on('data', (d) => {
				data += d;
			});
			res.on('end', () => {
				response.send(data);
			});
		});
		// return new Promise((resolve, reject) => {
		// 	https.get(reqOpts, (res) => {
		// 		let data = '';
		// 		res.on('data', (d) => {
		// 			data += d;
		// 		});
		// 		res.on('end', () => {
		// 			let restaurantsJson = JSON.parse(data);
		// 			resolve(restaurantsJson);
		// 		});
		// 	}).on('error', (e) => {
		// 		reject(e);
		// 	});
		// });
	}
}

export default Zomato;