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
    const selectedRace = races
      .filter((races) => races.id === Number(e.target.value))
      .reduce((acc, currValue) => acc.concat(currValue), []);

    const oneRace = selectedRace[0];

    if (oneRace.hasSub === false) {
      this.setState({ isVisible: false });
      const racialBonus = selectedRace
        .map((selectedRace) => selectedRace.racialBonus)
        .reduce((acc, currValue) => acc.concat(currValue), []);

      this.setState({ racialBonus: racialBonus });
    }
    if (oneRace.hasSub === true) {
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
