import React from "react";
import {
  StyledCategoryButton,
  StyledCategoryIcon,
  StyledCategoryProfession,
} from "./CategoryButton.styles";

const CategoryButton = ({ onClick, profession, icon, color }) => {
  return (
    <StyledCategoryButton onClick={onClick} color={color}>
      <StyledCategoryProfession>{profession}</StyledCategoryProfession>
      <StyledCategoryIcon src={icon} alt="icon"/>
    </StyledCategoryButton>
  );
};

export default CategoryButton;
