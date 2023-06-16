import React from "react";
import {
  StyledInputContainer,
  StyledSearchIcon,
  StyledAccountName,
  StyledLoadingIcon,
  StyledLabel,
} from "./AccountName.styles";

const AccountName = ({
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
        <StyledAccountName
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

export default AccountName;
