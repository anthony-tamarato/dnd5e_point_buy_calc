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
    disableSubrace: false,
    racialTraits: "",
  };

  //update SlectedRace
  //When a base race is selected this gets the id value of the race and filters to that race
  //Then check if the race has a subrace, a veriant, or neither, then update approiate states
  updateSlectedRace = (e) => {
    this.setState({ disableRace: true });
    const { races, subraces } = this.state;
    const raceFliter = races
      .filter((races) => races.id === Number(e.target.value))
      .reduce((acc, currValue) => acc.concat(currValue), []);

    const selectedRace = raceFliter[0];

    this.setState({
      racialBonus: selectedRace.racialBonus,
      racialTraits: selectedRace.racialTraits,
    });

    if (selectedRace.hasSub === false) {
      this.setState({
        isVisible: false,
        disableSubrace: false,
      });
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
  //end of updateSelectedRace

  //updateSelectedSubrace
  updateSelectedSubrace = (e) => {
    this.setState({ disableSubrace: true });
    const { selectedRace, subraces } = this.state;
    const subraceFilter = subraces
      .filter((subraces) => subraces.id === Number(e.target.value))
      .reduce((acc, currValue) => acc.concat(currValue), []);
    const selectedSubrace = subraceFilter[0];

    if (selectedRace.hasChoiceBonus === false) {
      const bonus1 = selectedRace.racialBonus;
      const bonus2 = selectedSubrace.racialBonus;
      const racialBonus = [bonus1[0], bonus2[0]];
      //bonus1 and 2 are arrays
      this.setState({
        racialBonus: racialBonus,
        racialTraits: selectedRace.racialTraits + selectedSubrace.racialTraits,
      });
    }
  };
  //end of updateSelectedSubrace

  render() {
    const {
      races,
      selectedRace,
      racialBonus,
      isVisible,
      subraceOptions,
      disableRace,
      disableSubrace,
      racialTraits,
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
              onSubraceSelect={this.updateSelectedSubrace}
              disableSubrace={disableSubrace}
            />
            <RacialTraits racialTraits={racialTraits} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
