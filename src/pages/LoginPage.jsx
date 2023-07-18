import React, { useState } from "react";
import { useNavigate } from "react-router";
import Button from "../components/Button/Button";
import LoginLayout from "../components/LoginLayout/LoginLayout";
import TextInput from "../components/TextInput/TextInput";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function getLoggedUserid(token) {
    const response = await fetch("http://localhost:8080/check-login", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const data = await response.json();
    return data;
  }

  async function login(emailL, passwordL) {
    await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailL,
        password: passwordL,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("userId", data.userId);
          getLoggedUserid(data.token).then((data) => {
            if (data) {
              localStorage.setItem("userId", data.userId);
            }
          });
          navigate("/");
        } else {
          alert("Usuario o contraseña incorrectos");
        }
      });
  }

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
          onClick={() => {
            login(email, password);
          }}
        >
          Iniciar
        </Button>
        <Button
          color="secondary"
          size={"medium"}
          onClick={() => navigate("/register")}
        >
          Registrarse
        </Button>
      </LoginLayout.Button>
    </LoginLayout>
  );
};

export default LoginPage;
