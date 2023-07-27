import React, { useEffect, useState } from "react";
import RegisterLayout from "../components/RegisterLayout/RegisterLayout";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import TextInput from "../components/TextInput/TextInput";
import InputSwitch from "../components/InputSwitch/InputSwitch";
import Select from "../components/Select/Select";
import Title from "../components/Title/Title";
import Button from "../components/Button/Button";
import ScrollLayout from "../components/ScrollLayout/ScrollLayout";
import { useNavigate } from "react-router-dom";
import UploadImage from "../components/UploadImage/UploadImage";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState(undefined);
  const [description, setDescription] = useState(undefined);
  const [isProfesional, setIsProfesional] = useState(0);
  const [jobId, setJobId] = useState(0);
  const [active, setActive] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [image, setImage] = useState(undefined);
  const navigate = useNavigate();

  async function getJobs() {
    const response = await fetch("http://localhost:8080/jobs");
    const data = await response.json();
    setJobs(data);
  }

  async function createUser(
    name_1,
    lastname_1,
    password_1,
    email_1,
    is_profesional_1,
    phone_1,
    job_1,
    description_1
  ) {
    await fetch("http://localhost:8080/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name_1,
        lastname: lastname_1,
        password: password_1,
        email: email_1,
        is_profesional: is_profesional_1,
        phone: phone_1,
        job_id: job_1,
        description: description_1,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }

  useEffect(() => {
    getJobs();
  }, []);

  console.log(image);

  return (
    <ScrollLayout>
      <ScrollLayout.ScrollPart>
        <RegisterLayout>
          <Breadcrumb
            pages={[
              { label: "Iniciar sesión", url: "/", name: "login" },
              { label: "Registro", url: "/register", name: "register" },
            ]}
          />
          <RegisterLayout.Inputs>
            <TextInput
              label="Nombre"
              placeholder="Escribe tu nombre"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <TextInput
              label="Apellido"
              placeholder="Escribe tu apellido"
              onChange={(e) => {
                setLastname(e.target.value);
              }}
            />
            <UploadImage
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
              image={image}
            />
            <TextInput
              label="Correo electrónico"
              placeholder="Escribe tu correo electrónico"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <TextInput
              label="Contraseña"
              placeholder="Escribe tu contraseña"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <br />
            <InputSwitch
              label="¿Eres profesional?"
              active={active}
              onClick={() => {
                setActive(!active);
                setIsProfesional(active ? 0 : 1);
              }}
            />
            {active && (
              <>
                <br />
                <Title size={"md"}>Selecciona una profesion</Title>
                <Select
                  name={jobId || ""}
                  value={jobId || ""}
                  onChange={(e) => {
                    setJobId(parseInt(e.target.value));
                  }}
                  options={jobs}
                />
                <TextInput
                  label="Descripción"
                  placeholder="Escribe una descripcion de tu trabajo"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
                <TextInput
                  label="Telefono"
                  placeholder="Escribe tu numero sin 0 ni 15"
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </>
            )}
            <br />
            <Button
              color={"primary"}
              size={"large"}
              onClick={() => {
                if (isProfesional === 1) {
                  createUser(
                    name,
                    lastname,
                    password,
                    email,
                    isProfesional,
                    phone,
                    jobId,
                    description
                  );
                } else {
                  createUser(name, lastname, password, email, isProfesional);
                }
                navigate("/");
              }}
            >
              Registrarse
            </Button>
            <br />
          </RegisterLayout.Inputs>
        </RegisterLayout>
      </ScrollLayout.ScrollPart>
    </ScrollLayout>
  );
};

export default RegisterPage;
