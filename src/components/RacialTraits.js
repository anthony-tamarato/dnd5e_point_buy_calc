import React, { Component } from "react";

export class RacialTraits extends Component {
  render() {
    const { selectedRace } = this.props;

    return <>{selectedRace.racialTraits}</>;
  }
}

export default RacialTraits;
