import React, { Component } from "react";

export class SubraceSelect extends Component {
  render() {
    const { subraceOptions, disableSubrace } = this.props;

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
        <select name="subrace" onChange={this.props.onSubraceSelect}>
          <option disabled={disableSubrace}>Select Subrace</option>
          {subraceDropDown}
        </select>
      </>
    );
  }
}

export default SubraceSelect;
