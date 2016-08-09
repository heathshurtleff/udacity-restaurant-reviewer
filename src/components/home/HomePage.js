import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as restaurantActions from '../../actions/restaurantActions';
import RestaurantTile from './RestaurantTile';


class HomePage extends Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		const {restaurants} = this.props;

		return(
			<div className="container-fluid">
				<div className="jumbotron">
					<h1>Hungry? Let&#39;s find you something to eat.</h1>
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
	restaurants: PropTypes.object.isRequired
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