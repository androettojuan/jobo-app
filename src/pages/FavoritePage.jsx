import React from "react";
import FavoriteLayout from "../components/FavoriteLayout/FavoriteLayout";
import Title from "../components/Title/Title";

const FavoritePage = () => {
  return (
    <FavoriteLayout>
      <FavoriteLayout.Title>
        <Title size={"xl"}>Favoritos</Title>
      </FavoriteLayout.Title>
      <FavoriteLayout.Content></FavoriteLayout.Content>
    </FavoriteLayout>
  );
};

export default FavoritePage;
