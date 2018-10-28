import React, { Component } from 'react';
import './App.css';
import Map from './components/Map';
import SquareAPI from './API/Api';
import Sidebar from './components/Sidebar';
import ErrorBoundary from './components/ErrorBoundary';

class App extends Component {

  constructor(props) {
    super(props);
      this.state = {
        /*state method for venues, markers, center and zoom*/
        venues: [],
        markers: [],
        center: [],
        zoom: 11,
        /*set state method to handle search bar*/
        searchState: set => {
          this.setState(set);
        }
      }
  }

/*get the information from FourSquare API*/
  componentDidMount() {
    SquareAPI.search({
      near: "Jacksonville,FL",
      query: "Restaurant",
      limit: 15
    }).then(results => {
      const { venues } = results.response;
      const { center } = results.response.geocode.feature.geometry;
      const markers = venues.map(venue => {
        return {
          lat: venue.location.lat,
          lng: venue.location.lng,
          id: venue.id,
          isOpen: false,
          isVisible: true
        };
      });
      this.setState({venues, markers, center});
      // console.log(results)
    }).catch(error => {
      alert('Something went wrong or API failed. Please try again') /*fetch ErrorBoundary if object of the request failed*/
      // console.log(error);
    })
  }

/*show info windows and informations and returns on default state*/
  markedInfoWindow = (info) => {
    this.cancelInfo();
    info.isOpen = true;
    this.setState({markers: Object.assign(this.state.markers, info)})
    const place = this.state.venues.find(place => place.id === info.id);
    SquareAPI.venueDetails(info.id)
    .then(res => {
      const newPlace = Object.assign(place, res.response.venue)
      this.setState({venues: Object.assign(this.state.venues, newPlace)})
     console.log(newPlace)})
  }

/*return infow windows in default state*/
  cancelInfo = () => {
    const markers = this.state.markers.map(marker => {
      marker.isOpen = false;
      return marker;
    });
    this.setState({markers: Object.assign(this.state.markers, markers)})
  }

/*to see info window and informations after clicking on place list*/
  handlePlaceList = (place) => {
    const info = this.state.markers.find(info => info.id === place.id)
    this.markedInfoWindow(info)
    console.log(place);
  }

  render() {
    return (
      <div className="App">
        <ErrorBoundary>
          <Sidebar {...this.state} handlePlaceList ={this.handlePlaceList}/>
          <Map {...this.state} markedInfoWindow = {this.markedInfoWindow}/>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
