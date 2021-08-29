import React from "react";
import planetsData from "./assets/planetsData.json";

export default class Main extends React.Component {
  // Content menu
  contentMenu = () => {
    return (
      <ul className="flex justify-between px-6 border-t-1.5 border-b-1.5 border-gray-space border-opacity-30 z-0
      md:flex-col md:border-t-0 md:border-b-0 md:justify-start md:px-0 md:mt-20 md:col-start-2 md:row-start-2
      xl:mt-0">
        {["overview", "structure", "geology"].map((item, index) => (
          <li key={item} className={`inline-block font-spartan md:border-1.5 md:border-gray-space md:border-opacity-40 ${(index > 0) ? "md:mt-4" : undefined} ${(item === this.props.currentContent) ? "border-none": undefined}`}>
            <button
              className={`uppercase text-2xs tracking-widest py-5 opacity-80 ${(item === this.props.currentContent) ? `border-b-4 border-${this.props.currentPlanet} opacity-100 font-bold rounded-none`: undefined}
              md:text-left md:border-b-0 md:w-full md:py-4 md:px-4 md:font-bold md:bg-${(item === this.props.currentContent) ? this.props.currentPlanet: undefined}
              xl:text-xs ${(item !== this.props.currentContent) ? "xl:hover:bg-gray-space xl:hover:opacity-100 xl:transition-all xl:duration-300" : undefined}`}
              onClick={() => this.props.onChangeContent(item)}
            >
              <span className="hidden text-white md:inline-block md:opacity-70 mr-3">{"0" + (index + 1)}</span>
              {item}
            </button>
          </li>
        ))}
      </ul>
    );
  };

  // Planet images
  getPlanetImages = () => {
    const identifier = {
      overview: "planet",
      structure: "internal",
      geology: "planet",
    };
    const planetImageSrc = process.env.PUBLIC_URL + planetsData[this.props.currentPlanetIndex]["images"][identifier[this.props.currentContent]];
    return (
      <React.Fragment>
        {
          <div className="relative px-6 my-20
          md:col-span-2 md:row-start-1 md:row-end-2
          xl:px-0 xl:my-auto xl:row-end-3 xl:col-span-1">
          <img
            src={planetImageSrc}
            alt={`${this.props.currentPlanet}'s illustration`}
            className={`w-${planetsData[this.props.currentPlanetIndex]["imageSize"]["default"]} mx-auto
            md:w-${planetsData[this.props.currentPlanetIndex]["imageSize"]["medium"]}
            xl:w-${planetsData[this.props.currentPlanetIndex]["imageSize"]["large"]}`}
          />
          {this.props.currentContent === "geology" ? (
            <img
              src={process.env.PUBLIC_URL + planetsData[this.props.currentPlanetIndex]["images"]["geology"]}
              alt={`${this.props.currentPlanet}'s surface`}
              className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-24
              xl:-bottom-12 xl:w-32"
            />
          ) : undefined}
        </div>
        }
      </React.Fragment>
    );
  };

  // Planet's main information
  getPlanetContent = () => {
    return (
      <div className="text-center px-6
      md:px-0 md:row-start-2 md:text-left
      xl:row-start-1 xl:row-end-2 xl xl:px-0">
        <h2 className="font-antonio text-4xl uppercase mb-6
        md:text-5xl
        xl:text-7xl">{this.props.currentPlanet}</h2>
        <p className="font-spartan text-xs leading-6
        xl:text-sm">
          {
            planetsData[this.props.currentPlanetIndex][
              this.props.currentContent
            ]["content"]
          }
        </p>
        <p className="my-8 text-xs font-spartan
        xl:text-sm">
          <span className="opacity-50">Source: </span> 
          <a
            href={
              planetsData[this.props.currentPlanetIndex][
                this.props.currentContent
              ]["source"]
            }
            rel="noreferrer"
            target="_blank"
          >
            <span className="opacity-50 underline font-bold">Wikipedia</span>
            <img src={process.env.PUBLIC_URL + "/img/icon-source.svg"} alt="Source arrow icon" className="inline-block ml-1 w-3"/>
          </a>
        </p>
      </div>
    );
  };

  // Planet's statistics
  getPlanetStats = () => {
    return(
      <ul className="px-6
      md:flex md:justify-between md:px-0
      xl:mt-12">
      {[
        { title: "rotation time", identifier: "rotation" },
        { title: "revolution time", identifier: "revolution" },
        { title: "radius", identifier: "radius" },
        { title: "average temp.", identifier: "temperature" },
      ].map((item) => {
        return (
          <li key={item.title} className={`flex justify-between items-center mt-4 py-2 px-5 border-1.5 border-gray-space border-opacity-40
          md:flex-col md:pl-4 md:pr-12 md:items-start`}>
            <span className="font-spartan uppercase text-3xs opacity-60
            md:mb-2
            xl:text-2xs">{item.title}</span>
            <span className="font-antonio text-xl uppercase
            md:text-2xl
            xl:text-4xl">
              {planetsData[this.props.currentPlanetIndex][item.identifier]}
            </span>
          </li>
        );
      })}
    </ul>
    );
  };
  render() {
    return (
      <main className="md:px-12 xl:px-36 xl:mt-24">
        <div className="md:grid md:grid-cols-2 md:gap-x-16
        xl:grid-rows-2 xl:gap-x-24">
        {this.contentMenu()}
        {this.getPlanetImages()}
        {this.getPlanetContent()}
        </div>
        {this.getPlanetStats()}
      </main>
    );
  }
}
