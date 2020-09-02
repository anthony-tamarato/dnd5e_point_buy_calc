import React, { Component } from "react";

export class RacialTraits extends Component {
  render() {
    const { selectedRace } = this.props;
    const racialTraits = selectedRace.map((selectedRace) => {
      return selectedRace.racialTraits;
    });
    return <>{racialTraits}</>;
  }
}

export default RacialTraits;
