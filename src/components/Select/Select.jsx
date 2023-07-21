import React from "react";
import { StyledOption, StyledSelect } from "./Select.styles";

const Select = ({ name, value, onChange, options }) => {
  return (
    <StyledSelect name={name} value={value} onChange={onChange}>
      {options.map((option, index) => (
        <StyledOption key={index} value={option.id}>
          {option.title}
        </StyledOption>
      ))}
    </StyledSelect>
  );
};

export default Select;
