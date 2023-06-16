import React from "react";
import { StyledUserPhoto, StyledUserPhotoContainer } from "./UserPhoto.styles";

const UserPhoto = ({url, name}) => {
  return (
    <StyledUserPhotoContainer>
      <StyledUserPhoto src={url} alt={name}/>
    </StyledUserPhotoContainer>
  );
};

export default UserPhoto;
