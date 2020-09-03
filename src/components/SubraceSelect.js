import React, { Component } from "react";

export class SubraceSelect extends Component {
  render() {
    const { subraceOptions } = this.props;

    const subraceDropDown = subraceOptions
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((subraceOptions) => {
        return (
          <option key={subraceOptions.id} value={subraceOptions.id}>
            {subraceOptions.name}
          </option>
        );
      });

    return (
      <>
        <select name="subrace">
          <option>Select Subrace</option>
          {subraceDropDown}
        </select>
      </>
    );
  }
}

export default SubraceSelect;
