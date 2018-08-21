import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Post from './components/Post';


class App extends Component {
  render() {
    return <div className="App">
      <Header />
      <section className="App-main">
        <Post nickname="Johnznw" avatar="https://bit.ly/2Bv4mv1" caption="ഹ... എന്നതാന്നേ.. എടുത്ത് കഴിച്ചാട്ടേ.." image="https://bit.ly/2nTwz51" />
        <Post nickname="Liquid_ink" avatar="https://bit.ly/2MHSMB2" caption="Praying for brighter days - kerala needs our help" image="https://bit.ly/2OTDpmr" />
      </section>
    </div>;
  }
}

export default App;
