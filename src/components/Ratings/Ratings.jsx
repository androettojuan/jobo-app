import React from "react";
import {
  StyledRatingIcon,
  StyledRatingText,
  StyledRatings,
} from "./Ratings.styles";
import { AiFillStar } from "react-icons/ai";

const Ratings = ({rating}) => {
  return (
    <StyledRatings>
      <StyledRatingIcon>
        <AiFillStar />
      </StyledRatingIcon>
      <StyledRatingText>{rating}</StyledRatingText>
    </StyledRatings>
  );
};

export default Ratings;
