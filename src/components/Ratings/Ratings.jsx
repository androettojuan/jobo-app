import React from "react";
import {
  StyledRatingIcon,
  StyledRatingText,
  StyledRatings,
} from "./Ratings.styles";
import { AiFillStar } from "react-icons/ai";

const Ratings = () => {
  return (
    <StyledRatings>
      <StyledRatingIcon>
        <AiFillStar />
      </StyledRatingIcon>
      <StyledRatingText>4.6</StyledRatingText>
    </StyledRatings>
  );
};

export default Ratings;
