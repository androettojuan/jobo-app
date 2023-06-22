import React from "react";
import {
  StyledAccountName,
  StyledAccountNameContainer,
  StyledNameAdmin,
  StyledProfession,
} from "./AccountName.styles";

const AccountName = ({ name, admin = false, Profession }) => {
  return (
    <StyledAccountNameContainer>
      {admin ? (
        <>
          <StyledNameAdmin>{name}</StyledNameAdmin>
          <StyledProfession>({Profession})</StyledProfession>
        </>
      ) : (
        <StyledAccountName>{name}</StyledAccountName>
      )}
    </StyledAccountNameContainer>
  );
};

export default AccountName;
