import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as restaurantActions from '../../actions/restaurantActions';
import RestaurantTile from './RestaurantTile';
import GeolocateLink from '../common/GeolocateLink';


class HomePage extends Component {
	constructor(props, context) {
		super(props, context);

		this.getRestaurantsByGeoLocation = this.getRestaurantsByGeoLocation.bind(this);
	}

	getRestaurantsByZipLocation(e) {
		let zipValue = e.target.value;
	}

	getRestaurantsByGeoLocation(e) {
		navigator.geolocation.getCurrentPosition((position) => {
			let lat = position.coords.latitude;
			let long = position.coords.longitude;
			let coords = lat + ',' + long;

			this.props.actions.loadRestrauntsByLocation(coords);
		});
	}

	render() {
		const {restaurants} = this.props;
		let geoAvailable = false;

		if('geolocation' in navigator) geoAvailable = true;

		return(
			<div className="container-fluid">
				<div className="jumbotron">
					<h1>Hungry? Let&#39;s find you something to eat.</h1>
					<p>
						<label htmlFor="Zip">Enter Zip:</label> <input type="text" name="Zip" onBlur={this.getRestaurantsByZipLocation} />
						{geoAvailable ? <GeolocateLink getRestaurantsByGeoLocation={this.getRestaurantsByGeoLocation} /> : null}
					</p>
					{console.log(restaurants)}
				</div>
				{restaurants.restaurants.map(restaurant =>
					<RestaurantTile key={restaurant.restaurant.id} restaurant={restaurant.restaurant} />
				)}
			</div>
		);
	}
}

HomePage.propTypes = {
	restaurants: PropTypes.object.isRequired,
	geoAvailable: PropTypes.bool,
	actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
		restaurants: state.restaurants
	};
}

function mapDispatchToProps(dispatch) {
	return{
		actions: bindActionCreators(restaurantActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);