import React, { Component } from "react";
import Checkbox from "./Checkbox";

export class VariantToggle extends Component {
  render() {
    return (
      <label>
        <Checkbox label="1" handleCheckboxChange={this.props.toggleVariant} />
        Use Variant?
      </label>
    );
  }
}

export default VariantToggle;
