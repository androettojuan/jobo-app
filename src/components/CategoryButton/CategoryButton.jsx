import React from "react";
import {
  StyledCategoryButton,
  StyledCategoryIcon,
  StyledCategoryProfession,
} from "./CategoryButton.styles";

const CategoryButton = ({ onClick, profession, icon }) => {
  return (
    <StyledCategoryButton onClick={onClick}>
      <StyledCategoryIcon src={icon} alt="icon"/>
      <StyledCategoryProfession>{profession}</StyledCategoryProfession>
    </StyledCategoryButton>
  );
};

export default CategoryButton;
