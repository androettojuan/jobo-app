import React, { useEffect, useState } from "react";
import RegisterLayout from "../components/RegisterLayout/RegisterLayout";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import TextInput from "../components/TextInput/TextInput";
import InputSwitch from "../components/InputSwitch/InputSwitch";
import Select from "../components/Select/Select";
import Title from "../components/Title/Title";
import Button from "../components/Button/Button";
import ScrollLayout from "../components/ScrollLayout/ScrollLayout";

const RegisterPage = () => {
  const [active, setActive] = useState(false);
  const [jobId, setJobId] = useState(0);
  const [jobs, setJobs] = useState([]);

  async function getJobs() {
    const response = await fetch("http://localhost:8080/jobs");
    const data = await response.json();
    setJobs(data);
  }

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <ScrollLayout>
      <ScrollLayout.ScrollPart>
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
            <br />
            <InputSwitch
              label="¿Eres profesional?"
              active={active}
              onClick={() => setActive(!active)}
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
                />
                <TextInput
                  label="Telefono"
                  placeholder="Escribe tu numero sin 0 ni 15"
                />
              </>
            )}
            <br />
            <Button color={"primary"} size={"large"}>
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
