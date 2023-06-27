import React, { useState } from "react";
import { FiCheck, FiEdit3 } from "react-icons/fi";
import Header from "../components/Header/Header";
import TextInput from "../components/TextInput/TextInput";
import UserPhoto from "../components/UserPhoto/UserPhoto";
import AccountLayout from "../components/AccountLayout/AccoutLayout";
import Button from "../components/Button/Button";
import AccountName from "../components/AccountName/AccountName";
import ScrollLayout from "../components/ScrollLayout/ScrollLayout";
import Ratings from "../components/Ratings/Ratings";
import DescriptionAdmin from "../components/DescriptionAdmin/DescriptionAdmin";
import Comments from "../components/Comments/Comments";
import Title from "../components/Title/Title";

const admin = {
  displayName: "Pedro Gomez",
  phone: "351 555 5555",
  address: "Av. Siempreviva 742",
  description:
    "Soy un electricista con 8 años de experiencia. Ofrezco soluciones confiables para tus necesidades eléctricas. Contacta conmigo ahora y disfruta de un servicio de calidad",
  photo:
    "data:image/jpeg;base64,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",
};

const AccountPage = () => {
  const [editar, setEditar] = useState(false);
  const [displayName, setName] = useState("Juan Manuel Androetto");
  const [displayNameAdmin, setNameAdmin] = useState(admin.displayName);
  const [phone, setPhone] = useState(admin.phone);
  const [address, setAddress] = useState(admin.address);
  const [profession, setProfession] = useState(admin.profession);
  const [description, setDescription] = useState(admin.description);

  const userIsAdmin = true;

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
          {!userIsAdmin ? (
            <AccountLayout>
              <UserPhoto url="data:image/jpeg;base64,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" />
              <AccountLayout.Name>
                {editar ? (
                  <TextInput
                    disabled={!editar}
                    name={displayName}
                    value={displayName || ""}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nombre completo"
                  ></TextInput>
                ) : (
                  <AccountName name={displayName}></AccountName>
                )}
              </AccountLayout.Name>
              <AccountLayout.Info>
                <TextInput
                  label={"Email"}
                  disabled={true}
                  value={"adaslsaflmalfma@gmail.com" || ""}
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
              <UserPhoto url={admin.photo} />
              <AccountLayout.Name>
                {editar ? (
                  <>
                    <TextInput
                      disabled={!editar}
                      name={displayNameAdmin}
                      value={displayNameAdmin || ""}
                      onChange={(e) => setNameAdmin(e.target.value)}
                      placeholder="Nombre completo"
                    ></TextInput>
                    <TextInput
                      value={profession || ""}
                      disabled={!editar}
                      onChange={(e) => setProfession(e.target.value)}
                      placeholder="Profesion"
                    ></TextInput>
                  </>
                ) : (
                  <>
                    <AccountName
                      name={displayNameAdmin}
                      Profession={profession}
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
                  value={"adaslsaflmalfma@gmail.com" || ""}
                ></TextInput>
                <TextInput
                  label={"Teléfono"}
                  value={phone || ""}
                  disabled={!editar}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Telefono"
                ></TextInput>
                <TextInput
                  label={"Direccion"}
                  value={address || ""}
                  disabled={!editar}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Direccion"
                ></TextInput>
              </AccountLayout.Info>
              <AccountLayout.Comments>
                <Title>Comentarios</Title>
                <Comments
                  name="Mario Santos"
                  photo="/img/mariosantos.png"
                  comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed"
                  onClick={() => console.log("click")}
                  rating={5}
                ></Comments>
              </AccountLayout.Comments>
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
