import React, { Component } from 'react';
import Listcontainer from './Listcontainer';

class Placelist extends Component {
	render() {
		return (
			<div>
			<ul id="placelist" aria-labelledby="placelist">
			{this.props.venues && this.props.venues.map((place, id) => (
				<Listcontainer {...place} key={id} handlePlaceList= {this.props.handlePlaceList}/>
			))}
			</ul>
			</div>
		);
	}
}

export default Placelist;
