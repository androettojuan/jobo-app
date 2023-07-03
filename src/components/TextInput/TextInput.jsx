import React from "react";
import {
  StyledButtonCopy,
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
  copy,
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
        {copy && (
          <StyledButtonCopy
            onClick={() => {
              navigator.clipboard.writeText(value);
            }}
          />
        )}
      </StyledLabel>
    </StyledInputContainer>
  );
};

export default TextInput;
