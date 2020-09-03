import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import CalcTable from "./components/CalcTable";
import RacialTraits from "./components/RacialTraits";

import data from "./data/Races.json";

class App extends Component {
  state = {
    races: data,
    selectedRace: [],
    racialBonus: [],
    isVisible: false,
  };
  updateSlectedRace = (e) => {
    const { races } = this.state;
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
    }

    this.setState({ selectedRace: selectedRace });
  };

  render() {
    const { races, selectedRace, racialBonus, isVisible } = this.state;

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
            />
            <RacialTraits selectedRace={selectedRace} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
