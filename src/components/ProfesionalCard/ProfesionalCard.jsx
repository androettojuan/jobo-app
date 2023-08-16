import React from "react";
import {
  StyledFavorites,
  StyledFavoritesAndRating,
  StyledInfoAndFavorites,
  StyledInfoContainer,
  StyledName,
  StyledPhoto,
  StyledProfesionalCard,
  StyledProfession,
  StyledRating,
  StyledRatingContainer,
  StyledRatingIcon,
} from "./ProfesionalCard.styles";
import { AiFillHeart, AiFillStar, AiOutlineHeart } from "react-icons/ai";

const ProfesionalCard = ({
  name,
  profession,
  photo,
  onClick,
  favorite,
  isFavorite,
}) => {
  return (
    <StyledProfesionalCard onClick={onClick}>
      <StyledPhoto src={photo} alt="foto profesional" />
      <StyledInfoAndFavorites>
        <StyledInfoContainer>
          <StyledName>{name}</StyledName>
          <StyledProfession>{profession}</StyledProfession>
        </StyledInfoContainer>
        <StyledFavoritesAndRating>
          <StyledFavorites onClick={isFavorite}>
            {favorite ? <AiFillHeart /> : <AiOutlineHeart />}
          </StyledFavorites>
          <StyledRatingContainer>
            <StyledRatingIcon>
              <AiFillStar />
            </StyledRatingIcon>
            <StyledRating>4.3</StyledRating>
          </StyledRatingContainer>
        </StyledFavoritesAndRating>
      </StyledInfoAndFavorites>
    </StyledProfesionalCard>
  );
};

export default ProfesionalCard;
