import React from "react";
import { FormGroup, Label, CustomInput } from "reactstrap";

const RangeInput = props => {
  return (
    <FormGroup>
      <Label for="exampleCustomRange">{props.value}</Label>
      <CustomInput
        type="range"
        id="exampleCustomRange"
        name="customRange"
        max={props.max}
        min={0}
        value={props.value}
        onChange={props.handleChange}
      />
    </FormGroup>
  );
};

export default RangeInput;
