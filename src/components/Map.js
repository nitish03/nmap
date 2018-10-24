import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MyMap = withScriptjs(withGoogleMap((props) =>
	<GoogleMap
		defaultZoom={8} zoom = {props.zoom}
		defaultCenter={{ lat: 30.66775, lng: -81.461511 }}
		center = {props.center}
	>
		{props.markers &&
			props.markers.filter(marker => marker.isVisible)
			.map((marker, id) => (
		 <Marker key={id} position={{ lat: parseFloat(marker.lat), lng: parseFloat(marker.lng) }} />
	 ))}
</GoogleMap>
));

class Map extends Component {
	render() {
		return(
			<MyMap
			 {...this.props}
			  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBB8RTKIWJ9hnl7f0bpQmY7ZCRRRSgx8nA"
			  loadingElement={<div style={{ height: `100%` }} />}
			  containerElement={<div style={{ height: `900px` }} />}
			  mapElement={<div style={{ height: `100%` }} />}
			/>
		);
	}
}

export default Map;
