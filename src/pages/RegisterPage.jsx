import React from "react";
import RegisterLayout from "../components/RegisterLayout/RegisterLayout";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import TextInput from "../components/TextInput/TextInput";

const RegisterPage = () => {
  return (
    <RegisterLayout>
      <Breadcrumb
        pages={[{ label: "Registro", url: "/register", name: "register" }]}
      />
      <RegisterLayout.Inputs>
        <TextInput label="Nombre" placeholder="Escribe tu nombre" />
        <TextInput label="Apellido" placeholder="Escribe tu apellido" />
        <TextInput
          label="Correo electrónico"
          placeholder="Escribe tu correo electrónico"
        />
        <TextInput
          label="Contraseña"
          placeholder="Escribe tu contraseña"
          type="password"
        />
      </RegisterLayout.Inputs>
    </RegisterLayout>
  );
};

export default RegisterPage;
