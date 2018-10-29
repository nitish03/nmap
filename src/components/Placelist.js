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

/*aria-labelledby resources
https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute*/
