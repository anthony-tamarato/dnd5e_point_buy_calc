import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import CalcTable from "./components/CalcTable";
import RacialTraits from "./components/RacialTraits";

import raceData from "./data/Races.json";
import subraceData from "./data/Subrace.json";

class App extends Component {
  state = {
    races: raceData,
    subraces: subraceData,
    selectedRace: [],
    racialBonus: [],
    isVisible: false,
    subraceOptions: [],
    disableRace: false,
  };
  updateSlectedRace = (e) => {
    this.setState({ disableRace: true });
    const { races, subraces } = this.state;
    const raceFliter = races
      .filter((races) => races.id === Number(e.target.value))
      .reduce((acc, currValue) => acc.concat(currValue), []);

    const selectedRace = raceFliter[0];

    if (selectedRace.hasSub === false) {
      this.setState({ isVisible: false });
      this.setState({ racialBonus: selectedRace.racialBonus });
    }
    if (selectedRace.hasSub === true) {
      this.setState({ isVisible: true });

      const subraceOptions = subraces.filter(
        (subraces) => subraces.baseRaceRef === Number(selectedRace.id)
      );

      this.setState({ subraceOptions: subraceOptions });
    }

    this.setState({ selectedRace: selectedRace });
  };

  render() {
    const {
      races,
      selectedRace,
      racialBonus,
      isVisible,
      subraceOptions,
      disableRace,
    } = this.state;

    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <CalcTable
              races={races}
              selectedRace={selectedRace}
              racialBonus={racialBonus}
              onRaceSelect={this.updateSlectedRace}
              isVisible={isVisible}
              subraceOptions={subraceOptions}
              disableRace={disableRace}
            />
            <RacialTraits selectedRace={selectedRace} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
