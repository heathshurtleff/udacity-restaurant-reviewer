import React, {PropTypes} from 'react';

const GeolocateLink = ({getRestaurantsByGeoLocation}) => {
	return (
		<span className="geolocate-link">
			or <a href="#" onClick={getRestaurantsByGeoLocation}><i className="glyphicon glyphicon-map-marker"></i> use current location</a>
		</span>
	);
};

GeolocateLink.propTypes = {
	getRestaurantsByGeoLocation: PropTypes.func.isRequired
};

export default GeolocateLink;