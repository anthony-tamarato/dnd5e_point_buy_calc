import React, { Component } from "react";
import Checkbox from "./Checkbox";

export class ChooseBonus extends Component {
  render() {
    const {
      choiceBonues,
      choiceBonusValue,
      numOfChoice,
      disableBonusCheckbox,
    } = this.props;
    const bonusCheckBoxes = choiceBonues.map((choiceBonues, index) => {
      return (
        <lable>
          <Checkbox
            lable={choiceBonues}
            handleCheckboxChange={this.props.handleCheckboxChange}
            disableBonusCheckbox={disableBonusCheckbox}
          />
          {choiceBonues}
        </lable>
      );
    });
    return (
      <div className="chooseBonus">
        <p>
          Select {numOfChoice} ability scores to increase by {choiceBonusValue}
        </p>
        <div className="checkboxArea">{bonusCheckBoxes}</div>
      </div>
    );
  }
}

export default ChooseBonus;
