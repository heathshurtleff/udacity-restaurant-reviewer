import React, {PropTypes} from 'react';

const RestaurantTile = ({restaurant}) => {
	return(
		<div className="col-sm-4 restaurant-tile">
			<a className="restaurant-content">
				<h2>{restaurant.name} <span></span></h2>
				<img src={restaurant.thumb === '' ? require('../../images/default-listing-image.gif') : restaurant.thumb} alt={restaurant.name} />
				<div className="restaurant-info">
					<h3>Location:</h3>
					<div className="restaurant-address">{restaurant.location.address}</div>
					<div className="restaurant-reviews">
						Stars {restaurant.user_rating.aggregate_rating} ({restaurant.user_rating.votes}): {restaurant.user_rating.rating_text}
					</div>
				</div>
			</a>
		</div>
	);
};

RestaurantTile.propTypes = {
	restaurant: PropTypes.object.isRequired
};

export default RestaurantTile;