import React, { Component } from "react";

import data from "../data/Subrace.json";

export class SubraceSelect extends Component {
  state = {
    subRaceList: data,
  };

  render() {
    /*
        const { subRaceList } = this.state;
        const { selectedRaceId } = this.props;

        const subRaceDropDown = subRaceList
        .sort((a, b) => a.name.localeCompare(b.name))
        .reduce((subRaceList) => subRaceList.baseRaceRef === selectedRaceId )
        .map((subRaceList) => 
            return (
                <option key={subRaceList.id} value={subRaceList.id}>
                {subRaceList.name}
                </option>
            );
*/
    return (
      <>
        <p>here</p>
      </>
    );
  }
}

export default SubraceSelect;
