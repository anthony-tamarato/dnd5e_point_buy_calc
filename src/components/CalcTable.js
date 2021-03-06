import React, { Component } from "react";
import Row from "./Row";
import SubraceSelect from "./SubraceSelect";
import ChooseBonus from "./ChooseBonus";
import VariantToggle from "./VariantToggle";

import data from "../data/Attributes.json";

export class CalcTable extends Component {
  state = {
    attributes: data,
  };

  render() {
    const { attributes } = this.state;
    const {
      races,
      racialBonus,
      isVisible,
      subraceOptions,
      disableRace,
      disableSubrace,
      hasChoiceBonus,
      choiceBonues,
      choiceBonusValue,
      numOfChoice,
      disableBonusCheckbox,
      hasVariant,
    } = this.props;

    const raceDropDown = races
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((races) => {
        return (
          <option key={races.id} value={races.id}>
            {races.name}
          </option>
        );
      });
    return (
      <>
        <div>
          <label for="race"></label>
          <select name="race" onChange={this.props.onRaceSelect}>
            <option disabled={disableRace}>Select Race</option>
            {raceDropDown}
          </select>
          {hasVariant === true && (
            <VariantToggle toggleVariant={this.props.toggleVariant} />
          )}
        </div>
        {isVisible === true && (
          <SubraceSelect
            subraceOptions={subraceOptions}
            onSubraceSelect={this.props.onSubraceSelect}
            disableSubrace={disableSubrace}
          />
        )}
        {hasChoiceBonus === true && (
          <ChooseBonus
            choiceBonues={choiceBonues}
            choiceBonusValue={choiceBonusValue}
            numOfChoice={numOfChoice}
            handleCheckboxChange={this.props.handleCheckboxChange}
            disableBonusCheckbox={disableBonusCheckbox}
          />
        )}
        <table>
          <thead>
            <tr>
              <th>Attribute</th>
              <th>Ability Score</th>
              <th></th>
              <th>Racial Bonus</th>
              <th></th>
              <th>Total Score</th>
              <th>Ability Modifier</th>
              <th>Point Cost</th>
            </tr>
          </thead>
          <tbody>
            <Row attributes={attributes} racialBonus={racialBonus} />
          </tbody>
          <tfoot>
            <div>
              <button>Restart</button>
              <p>Total Points 0/27</p>
            </div>
          </tfoot>
        </table>
      </>
    );
  }
}

export default CalcTable;
