import React, { Component } from 'react';
import './App.css';

import RadioSet from './components/RadioSet';

import songData from './data/tracks.json';

songData.forEach((song, i) => {
  song.id = i;
  song.favorite = false;
});

class App extends Component {
  constructor() {
  super();

  this.state = {
   songData: songData
  };

onChangeItem = () => {
  this.setState({
    songData.forEach((song, i) => {
      song.favorite = true;
    })
  });
}
  songData
  song.favotite = true;

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="page-header--title">Radio Lovelace</h1>
        </header>
        <main className="main">
          <RadioSet tracks={songData} onChangeFavorite={this.onChangeItem}/>
        </main>
      </div>
    );
  }
}

export default App;
