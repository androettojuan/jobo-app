import React, { useState } from "react";
import LoginLayout from "../components/LoginLayout/LoginLayout";
import TextInput from "../components/TextInput/TextInput";
import Button from "../components/Button/Button";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email, password);

  return (
    <LoginLayout>
      <LoginLayout.Logo>
        <img src="/img/logo.png" alt="logo" />
      </LoginLayout.Logo>
      <LoginLayout.Input>
        <TextInput
          value={email}
          label={"Email"}
          disabled={false}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Escriba su correo..."
        ></TextInput>
        <TextInput
          type="password"
          value={password}
          label={"Contraseña"}
          disabled={false}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Escriba su contraseña..."
        ></TextInput>
      </LoginLayout.Input>
      <LoginLayout.Button>
        <Button
          color="primary"
          size={"medium"}
          onClick={() => console.log("click")}
        >
          Iniciar
        </Button>
        <Button
          color="secondary"
          size={"medium"}
          onClick={() => console.log("click")}
        >
          Registrarse
        </Button>
      </LoginLayout.Button>
    </LoginLayout>
  );
};

export default LoginPage;
