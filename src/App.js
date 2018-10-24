import React, { Component } from 'react';
import './App.css';
import Map from './components/Map';
import SquareAPI from './API/Api';

class App extends Component {

  constructor(props) {
    super(props);
      this.state = {
        venues: [],
        markers: [],
        center: [],
        zoom: 11
      }
  }

  componentDidMount() {
    SquareAPI.search({
      near: "Jacksonville,FL",
      query: "pizza",
      limit: 15
    }).then(results => {
      const { venues } = results.response;
      const { center } = results.response.geocode.feature.geometry;
      const markers = venues.map(venue => {
        return {
          lat: venue.location.lat,
          lng: venue.location.lng,
          isOpen: false,
          isVisible: true
        };
      });
      this.setState({venues, markers, center});
      console.log(results)
    });
  }

  markedInfoWindow = (info) => {
    info.isOpen = true;
    this.setState({markers: Object.assign(this.state.markers, info),})
  }

  render() {
    return (
      <div className="App">
        <Map {...this.state} markedInfoWindow = {this.markedInfoWindow}/>
      </div>
    );
  }
}

export default App;
