import React, { useEffect, useState } from "react";
import { FiCheck, FiEdit3 } from "react-icons/fi";
import AccountLayout from "../components/AccountLayout/AccoutLayout";
import AccountName from "../components/AccountName/AccountName";
import Button from "../components/Button/Button";
import DescriptionAdmin from "../components/DescriptionAdmin/DescriptionAdmin";
import Header from "../components/Header/Header";
import Ratings from "../components/Ratings/Ratings";
import ScrollLayout from "../components/ScrollLayout/ScrollLayout";
import TextInput from "../components/TextInput/TextInput";
import UserPhoto from "../components/UserPhoto/UserPhoto";
import InputSwitch from "../components/InputSwitch/InputSwitch";
import { useUserData } from "../utils/userData";
import Select from "../components/Select/Select";

const AccountPage = () => {
  const user = useUserData();
  const [editar, setEditar] = useState(false);
  const [name, setName] = useState(user.name);
  const [lastname, setLastname] = useState(user.lastname);
  const displayName = name + " " + lastname;
  const [phone, setPhone] = useState(user.phone);
  const [jobs, setJobs] = useState([]);
  const [jobId, setJobId] = useState(user.job_id);
  const [profession, setProfession] = useState("");
  const [description, setDescription] = useState(user.description);
  const [active, setActive] = useState(user?.is_active === 1 ? true : false);
  const [show, setShow] = useState(false);
  const token = localStorage.getItem("token");

  async function getJobs() {
    const response = await fetch("http://localhost:8080/jobs");
    const data = await response.json();
    setJobs(data);
  }

  async function updateUser(
    name_1,
    lastname_1,
    phone_1,
    description_1,
    active_1,
    job_1,
    id_1
  ) {
    await fetch("http://localhost:8080/user/" + id_1, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        name: name_1,
        lastname: lastname_1,
        phone: phone_1,
        is_active: active_1 ? 1 : 0,
        job_id: job_1,
        description: description_1,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          alert("Usuario actualizado");
        } else {
          alert("Error al actualizar");
        }
      });
  }

  async function getJob(jobId) {
    const response = await fetch("http://localhost:8080/job/" + jobId);
    const data = await response.json();
    setProfession(data[0].title);
  }

  const iconSelect = () => {
    if (editar === false) {
      return FiEdit3;
    } else {
      return FiCheck;
    }
  };

  const action = async () => {
    if (editar === false) {
      setEditar(true);
    } else {
      await updateUser(
        name,
        lastname,
        phone,
        description,
        active,
        jobId,
        user.id
      );
      setEditar(false);
    }
  };

  const textSelect = () => {
    if (editar === false) {
      return "Editar";
    } else {
      return "Guardar";
    }
  };

  useEffect(() => {
    if (jobId) {
      getJob(jobId);
    }
    getJobs();
  }, [jobId]);

  return (
    <>
      <ScrollLayout>
        <ScrollLayout.FixedPart>
          <Header
            title="Mi cuenta"
            actions={[
              {
                icon: iconSelect(),
                onClick: action,
                name: "edit",
                visible: true,
                text: textSelect(),
              },
            ]}
          ></Header>
        </ScrollLayout.FixedPart>
        <ScrollLayout.ScrollPart>
          {!user?.is_profesional ? (
            <AccountLayout>
              <UserPhoto url="data:image/jpeg;base64,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" />
              <AccountLayout.Name>
                {editar ? (
                  <>
                    <TextInput
                      disabled={!editar}
                      name={displayName || ""}
                      value={displayName || ""}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Nombre"
                    ></TextInput>
                    <TextInput
                      disabled={!editar}
                      name={displayName || ""}
                      value={displayName || ""}
                      onChange={(e) => setLastname(e.target.value)}
                      placeholder="Apellido"
                    ></TextInput>
                  </>
                ) : (
                  <AccountName name={displayName || ""}></AccountName>
                )}
              </AccountLayout.Name>
              <AccountLayout.Info>
                <TextInput
                  label={"Email"}
                  disabled={true}
                  value={user.email || ""}
                ></TextInput>
              </AccountLayout.Info>
              <AccountLayout.Button>
                <Button size="large" color="grey">
                  Cerrar sesion
                </Button>
              </AccountLayout.Button>
            </AccountLayout>
          ) : (
            <AccountLayout>
              <UserPhoto url={user.photo} />
              <AccountLayout.Name>
                {editar ? (
                  <>
                    <TextInput
                      disabled={!editar}
                      name={name || ""}
                      value={name || ""}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Nombre"
                    ></TextInput>
                    <TextInput
                      disabled={!editar}
                      name={lastname || ""}
                      value={lastname || ""}
                      onChange={(e) => setLastname(e.target.value)}
                      placeholder="Apellido"
                    ></TextInput>
                    <Select
                      name={profession || ""}
                      value={jobId || ""}
                      onChange={(e) => {
                        setJobId(parseInt(e.target.value));
                      }}
                      options={jobs}
                    />
                  </>
                ) : (
                  <>
                    <AccountName
                      name={displayName || ""}
                      Profession={profession || ""}
                      admin
                    ></AccountName>
                    <Ratings></Ratings>
                  </>
                )}
              </AccountLayout.Name>
              <AccountLayout.Description>
                {editar ? (
                  <TextInput
                    disabled={!editar}
                    name={description}
                    value={description || ""}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Descripcion"
                  ></TextInput>
                ) : (
                  <DescriptionAdmin>{description || ""}</DescriptionAdmin>
                )}
              </AccountLayout.Description>
              <AccountLayout.Info>
                <TextInput
                  label={"Email"}
                  disabled={true}
                  value={user.email || ""}
                ></TextInput>
                <TextInput
                  label={"Teléfono"}
                  value={phone || ""}
                  disabled={!editar}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Telefono"
                ></TextInput>
              </AccountLayout.Info>
              <AccountLayout.Switch>
                <InputSwitch
                  label={"Desactivar cuenta"}
                  textAlert={
                    "Si desactivas tu cuenta, tu perfil ya no estará disponible para que otras personas lo encuentren"
                  }
                  active={active}
                  show={show}
                  onClick={() => {
                    setActive(!active);
                    setShow(!show);
                    setEditar(!editar);
                  }}
                  disabled={() => {
                    setActive(false);
                    setShow(false);
                  }}
                />
              </AccountLayout.Switch>
              <AccountLayout.Button>
                <Button size="large" color="grey">
                  Cerrar sesion
                </Button>
              </AccountLayout.Button>
            </AccountLayout>
          )}
        </ScrollLayout.ScrollPart>
      </ScrollLayout>
    </>
  );
};

export default AccountPage;
