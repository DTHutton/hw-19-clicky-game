import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import CardWrapper from "./components/CardWrapper"
import ClickCards from "./components/ClickCards"
import Footer from "./components/Footer"
import Wrapper from "./components/Wrapper"
import pokemon from "./pokemon.json"

class App extends Component {

  state = {
    pokemon
  }

  handleClick = props => {
    console.log("click works")
  }

  render() {
    return (
      <Wrapper>
        <Navbar />
        <CardWrapper>
          {this.state.pokemon.map(pokemon => (
            <ClickCards
              onClick={this.handleClick}
              id={pokemon.id}
              key={pokemon.id}
              name={pokemon.name}
              image={pokemon.image}
            />
          ))}
        </CardWrapper>
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
