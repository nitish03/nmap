import React, { Component } from 'react';
import './App.css';
import Map from './components/Map';
import SquareAPI from './API/Api';

class App extends Component {
  componentDidMount() {
    SquareAPI.search({
      near: "Jacksonville,FL",
      query: "pizza",
      limit: 15
    }).then(results => console.log(results));
  }
  render() {
    return (
      <div className="App">
        <Map />
      </div>
    );
  }
}

export default App;
