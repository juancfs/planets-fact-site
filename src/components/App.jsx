import React from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";
import planetsData from "./assets/planetsData.json";

export default class App extends React.Component {
  state = {
    currentPlanet: "earth",
    currentPlanetIndex: 2,
    currentContent: "overview",
  };

  changePlanet = (newPlanet) => {
    this.setState({ currentPlanet: newPlanet });
    planetsData.map(planet => {
      if (planet.name === newPlanet) {
        this.setState({currentPlanetIndex: planetsData.indexOf(planet)});
        return null;
      } else {return null}
    })
    document.querySelector("#menu").classList.add("-left-full");
    document.querySelector("#menuBtn").classList.toggle("opacity-30");
  };

  changeContent = (newContent) => {
    this.setState({ currentContent: newContent });
  };

  render() {
    return (
      <div>
        <Navbar onChangePlanet={this.changePlanet}
        currentPlanet={this.state.currentPlanet}
        currentPlanetIndex={this.state.currentPlanetIndex}
         />
        <Main
          currentPlanet={this.state.currentPlanet}
          currentPlanetIndex={this.state.currentPlanetIndex}
          currentContent={this.state.currentContent}
          onChangeContent={this.changeContent}
        />
        <Footer />
      </div>
    );
  }
}
