import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import CardWrapper from "./components/CardWrapper"
import ClickCards from "./components/ClickCards"
import Footer from "./components/Footer"
import pokemon from "./pokemon.json"

class App extends Component {
  state = {
    pokemon
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <CardWrapper>
          {this.state.pokemon.map(pokemon => (
            <ClickCards
              id={pokemon.id}
              key={pokemon.id}
              name={pokemon.name}
              image={pokemon.image}
            />
          ))}
        </CardWrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
