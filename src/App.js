import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import CardWrapper from "./components/CardWrapper"
import ClickCards from "./components/ClickCards"
import Footer from "./components/Footer"
import Wrapper from "./components/Wrapper"

class App extends Component {

  render() {
    return (
      <Wrapper>
        <Navbar />
        <CardWrapper>
          <ClickCards />
        </CardWrapper>
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
