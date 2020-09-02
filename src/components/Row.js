import React, { Component } from "react";
import isObjEmpty from "./functions/isObjEmpty";

export class Row extends Component {
  state = {
    abilityScore: 8,
    totalScore: 8,
    abilityModifier: -1,
  };
  render() {
    const { abilityScore, totalScore, abilityModifier } = this.state;
    const { attributes, racialBonus } = this.props;

    const row = attributes.map((attributes, index) => {
      const bonusCheck = racialBonus
        .filter((racialBonus) => racialBonus.name === attributes.shortName)
        .map((racialBonus) => racialBonus.value);

      const bonus = isObjEmpty(bonusCheck) ? 0 : bonusCheck;
      return (
        <tr key={index}>
          <td>{attributes.name}</td>
          <td>
            <p>{abilityScore}</p>
            <div>
              <button>UP</button>
              <button>Down</button>
            </div>
          </td>
          <td>+</td>
          <td>{bonus}</td>
          <td>=</td>
          <td>{totalScore}</td>
          <td>{abilityModifier}</td>
          <td>{attributes.pointCoast}</td>
        </tr>
      );
    });
    return <>{row}</>;
  }
}

export default Row;
