import React from "react";
import planetsData from "./assets/planetsData.json";

export default class Navbar extends React.Component {
  menuToggle = () => {
    document.querySelector("#menu").classList.toggle("-left-full");
    document.querySelector("#menuBtn").classList.toggle("opacity-30");
  };

  render() {
    return (
      <header>
        <nav className="bg-transparent flex justify-between p-4
        md:flex-col md:items-center md:pt-4 md:border-b-1.5 md:border-gray-space md:border-opacity-30
        xl:flex-row xl:py-0">
          <a href="." className="text-3xl uppercase font-antonio">
            <h1 className="inline-block">The planets</h1>
          </a>
          <ul id="menu" className="bg-dark-space absolute top-20 font-spartan w-screen left-0 z-10 -left-full transition-all duration-300
          md:w-full md:static md:bg-transparent md:flex md:justify-between md:px-12 md:mt-6
          xl:mt-0 xl:justify-around xl:w-2/3 xl:px-0">
            {planetsData.map((planet) => {
              return (
                <li key={planet.id} className="md:inline-block">
                  <button
                    onClick={() => this.props.onChangePlanet(planet.name)}
                    className={`flex justify-between items-center w-11/12 mx-auto py-5 rounded-none ${(planet.name === "neptune") ? undefined : "border-b-1.5 border-gray-space border-opacity-30"}
                    md:border-b-0 md:opacity-60 md:w-full
                    xl:transition-all xl:duration-300 xl:border-t-4 xl:border-transparent xl:py-8 ${(planet.name === this.props.currentPlanet) ? `xl:opacity-100 xl:border-${planet.name}`: undefined}
                    xl:hover:opacity-100 xl:hover:border-${planet.name}`}
                  >
                    <span className="uppercase font-bold tracking-widest text-sm
                    md:text-xs"><span id="circle-menu" className={`w-4 h-4 rounded-full bg-${planet.name}-menu inline-block mr-4 md:hidden`}></span>{planet.name}</span>
                    <img
                      src={process.env.PUBLIC_URL + "/img/icon-chevron.svg"}
                      alt="Right arrow"
                      className="inline-block w-1.5
                      md:hidden"
                    />
                  </button>
                </li>
              );
            })}
          </ul>
          <button id="menuBtn" onClick={this.menuToggle} className="md:hidden">
            <img src={process.env.PUBLIC_URL + "/img/icon-hamburger.svg"} alt="Toggle menu icon" />
          </button>
        </nav>
      </header>
    );
  }
}
