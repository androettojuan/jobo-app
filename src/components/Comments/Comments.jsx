import React from "react";
import {
  StyledComments,
  StyledCommentsButton,
  StyledCommentsContainerText,
  StyledCommentsUser,
  StyledCommentsUserName,
  StyledCommentsUserPhoto,
  StyledCommentsUserRating,
  StyledCommentsUserText,
} from "./Comments.styles";
import { AiFillStar } from "react-icons/ai";

const Comments = ({ name, comment, photo, onClick }) => {
  return (
    <StyledComments>
      <StyledCommentsUser>
        <StyledCommentsUserPhoto src={photo} />
        <StyledCommentsContainerText>
          <StyledCommentsUserName>{name}</StyledCommentsUserName>
          <StyledCommentsUserText>{comment}</StyledCommentsUserText>
        </StyledCommentsContainerText>
        <StyledCommentsUserRating>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </StyledCommentsUserRating>
      </StyledCommentsUser>
      <StyledCommentsButton onClick={onClick}>Responder</StyledCommentsButton>
    </StyledComments>
  );
};

export default Comments;
