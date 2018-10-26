import React, { Component } from 'react';

class Listconatiner extends Component {
	render() {
		return (
			<li className="list">
			{this.props.name}
			</li>
		);
	}
}

export default Listconatiner;
