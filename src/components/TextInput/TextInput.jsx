import React from "react";
import {
  StyledInputContainer,
  StyledLabel,
  StyledLoadingIcon,
  StyledSearchIcon,
  StyledTextInput,
} from "./Textinput.styles";

const TextInput = ({
  name,
  search,
  loading,
  value,
  onChange,
  placeholder,
  label,
  disabled,
}) => {
  return (
    <StyledInputContainer>
      <StyledLabel>
        {label}
        <StyledTextInput
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
        />
        {search && !loading && <StyledSearchIcon />}
        {loading && <StyledLoadingIcon />}
      </StyledLabel>
    </StyledInputContainer>
  );
};

export default TextInput;
