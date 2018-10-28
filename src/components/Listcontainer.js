import React, { Component } from 'react';

class Listconatiner extends Component {
	render() {
		return (
			<li className="list"
			onClick= {() => this.props.handlePlaceList(this.props)}
			tabIndex = "0" role = "Link"
			>
			{this.props.name}
			</li>
		);
	}
}

export default Listconatiner;
