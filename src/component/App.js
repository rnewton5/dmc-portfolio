import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Content from './Content.js';

class App extends Component {
  render() {
    var data = require("../_config.json");
    //const opts = require("../_ytopts.json");

    return (
      <div className="App">
        <Content videos={data.videos} />
        <Header headshot={data.headshot} bio={data.bio} name={data.name} email={data.email} />
      </div>
    );
  }
}

export default App;
