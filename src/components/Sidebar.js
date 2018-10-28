import React, { Component } from 'react';
import Placelist from './Placelist';

class Sidebar extends Component {

	constructor(props) {
		super(props);
		/*set state for query*/
		this.state = {
			query: '',
		}
	}

/*Filter places list on user input*/
	handleFilterPlaces = () => {
			if(this.state.query.trim() !== "") {
				const venues = this.props.venues.filter(venue =>
					venue.name.toLowerCase()
				.includes(this.state.query.toLowerCase())
			);
			// console.log(venues);
				return venues;
			}
			return this.props.venues;
	}

/*get filtered info windows on user input*/
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

			<Placelist {...this.props}
			venues={this.handleFilterPlaces()}
			handlePlaceList= {this.props.handlePlaceList}
			/>
			</div>
		);
	}
}

export default Sidebar;
