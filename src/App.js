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
  }

  onChangeItem = (id) => {
    this.setState({
      songData: this.state.songData.forEach((song, i) => {
        if(id === i) {
          song.favorite = true;
        }
        console.log(song);
      })
    });
  }


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
