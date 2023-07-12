import React from "react";
import TextInput from "../components/TextInput/TextInput";
import HomeLayout from "../components/HomeLayout/HomeLayout";
import HomeButton from "../components/HomeButton/HomeButton";
import Title from "../components/Title/Title";
import ProfesionalCard from "../components/ProfesionalCard/ProfesionalCard";
import ScrollLayout from "../components/ScrollLayout/ScrollLayout";
import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <ScrollLayout>
      <ScrollLayout.ScrollPart>
        <HomeLayout>
          <HomeLayout.Search>
            <TextInput search placeholder="¿Que necesitas hoy?"></TextInput>
          </HomeLayout.Search>
          <HomeLayout.Buttons>
            <HomeLayout.ButtonLg>
              <HomeButton
                text="Catalogo de profesionales"
                icon="\img\ingeniero.png"
                color="prussian"
                size="lg"
                onClick={() => navigate("/categories")}
              ></HomeButton>
            </HomeLayout.ButtonLg>
            <HomeLayout.ButtonsSm>
              <HomeButton
                text="Gasista"
                icon="\img\gas.png"
                color="primary"
                size="sm"
                onClick={() => navigate("/categories/2")}
              />
              <HomeButton
                text="Plomero"
                icon="\img\plomero.png"
                color="secondary"
                size="sm"
                onClick={() => navigate("/categories/1")}
              />
              <HomeButton
                text="Refrigeración"
                icon="\img\refrigeracion.png"
                color="munsell"
                size="sm"
                onClick={() => navigate("/categories/16")}
              />
              <HomeButton
                text="Electricista"
                icon="\img\electricidad.png"
                color="tiffany"
                size="sm"
                onClick={() => navigate("/categories/4")}
              />
            </HomeLayout.ButtonsSm>
          </HomeLayout.Buttons>
          <HomeLayout.Title>
            <Title>Favoritos</Title>
          </HomeLayout.Title>
          <HomeLayout.Favorites>
            <ProfesionalCard
              name="Juan Manuel Androetto"
              onClick={() => navigate(`/categories/1/profesional/1}`)}
              profession="Electricista"
              photo="/img/plomero-foto.jpg"
            />
            <ProfesionalCard
              name="Juan Manuel Androetto"
              onClick={() => navigate(`/categories/1/profesional/1}`)}
              profession="Electricista"
              photo="/img/plomero-foto.jpg"
            />
          </HomeLayout.Favorites>
        </HomeLayout>
      </ScrollLayout.ScrollPart>
    </ScrollLayout>
  );
};

export default HomePage;
