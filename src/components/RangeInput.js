import React from "react";
import { FormGroup, Label, CustomInput } from "reactstrap";

const RangeInput = props => {
  return (
    <FormGroup>
      <Label for="exampleCustomRange">Custom Range</Label>
      <CustomInput
        type="range"
        id="exampleCustomRange"
        name="customRange"
        max={20}
        min={0}
        value={props.value}
        onChange={props.handleChange}
      />
    </FormGroup>
  );
};

export default RangeInput;
