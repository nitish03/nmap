import React, { Component } from 'react';
import Placelist from './Placelist';

class Sidebar extends Component {
	render() {
		return (
			<div className="sidebar">
			<Placelist />
			</div>
		);
	}
}

export default Sidebar;
