import React from "react";
import TextInput from "../../components/TextInput/TextInput";
import HomeLayout from "../../components/HomeLayout/HomeLayout";
import HomeButton from "../../components/HomeButton/HomeButton";
import Title from "../../components/Title/Title";

const HomePage = () => {
  return (
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
          ></HomeButton>
        </HomeLayout.ButtonLg>
        <HomeLayout.ButtonsSm>
          <HomeButton
            text="Gasista"
            icon="\img\gas.png"
            color="primary"
            size="sm"
          />
          <HomeButton
            text="Plomero"
            icon="\img\plomero.png"
            color="secondary"
            size="sm"
          />
          <HomeButton
            text="Refrigeración"
            icon="\img\refrigeracion.png"
            color="munsell"
            size="sm"
          />
          <HomeButton
            text="Electricista"
            icon="\img\electricidad.png"
            color="tiffany"
            size="sm"
          />
        </HomeLayout.ButtonsSm>
      </HomeLayout.Buttons>
      <HomeLayout.Title>
        <Title>Favoritos</Title>
      </HomeLayout.Title>
    </HomeLayout>
  );
};

export default HomePage;
