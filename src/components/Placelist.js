import React, { Component } from 'react';
import Listcontainer from './Listcontainer';

class Placelist extends Component {
	render() {
		return (
			<ol className="placelist">
			{this.props.venues && this.props.venues.map((place, id) => (
				<Listcontainer {...place} key={id}/>
			))}
			</ol>
		);
	}
}

export default Placelist;
