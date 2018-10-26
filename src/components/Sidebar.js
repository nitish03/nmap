import React, { Component } from 'react';
import Placelist from './Placelist';

class Sidebar extends Component {

	constructor(props) {
		super(props);
		this.state = {
			query: ''
		}
	}

	handleSearchBar = event => {
 		this.setState({query: event.target.value});
 		const info = this.props.venues.map(venue => {
 			const match = venue.name.toLowerCase().includes(event.target.value.toLowerCase());
 			const placeInfo = this.props.markers.find(placeInfo => placeInfo.id === venue.id);
 			if(match) {
 				placeInfo.isVisible = true;
 			} else {
 				placeInfo.isVisible = false;
 			}
 			return placeInfo;
 		});
 		this.props.searchState({info});
 	}

	render() {
		return (
			<div className="sidebar">
			<input type={"search"} id={"find"}
			placeholder={"Find Your Place"}
			onChange={this.handleSearchBar}/>
			<Placelist {...this.props} handlePlaceList= {this.props.handlePlaceList}/>
			</div>
		);
	}
}

export default Sidebar;
