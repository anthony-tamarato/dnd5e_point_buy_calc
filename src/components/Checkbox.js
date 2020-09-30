import React, { Component } from "react";

export class Checkbox extends Component {
  state = {
    isChecked: false,
  };
  toggleCheckboxChange = () => {
    const { handleCheckboxChange, lable } = this.props;

    this.setState(({ isChecked }) => ({
      isChecked: !isChecked,
    }));

    handleCheckboxChange(lable);
  };

  render() {
    const { lable, disableBonusCheckbox } = this.props;
    const { isChecked } = this.state;
    return (
      <>
        <input
          type="checkbox"
          name="chooseBonus[]"
          value={lable}
          checked={isChecked}
          onChange={this.toggleCheckboxChange}
          disabled={isChecked !== true ? disableBonusCheckbox : false}
        />
      </>
    );
  }
}

export default Checkbox;
