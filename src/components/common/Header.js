import React, {Component} from 'react';

class Header extends Component {
	render() {
		return (
			<div className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<a className="navbar-brand" href="#">Reviewinator</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;