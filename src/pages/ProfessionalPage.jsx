import React, { useState } from "react";
import ProfessionalLayout from "../components/ProfessionalLayout/ProfessionalLayout";
import AccountName from "../components/AccountName/AccountName";
import Ratings from "../components/Ratings/Ratings";
import DescriptionAdmin from "../components/DescriptionAdmin/DescriptionAdmin";
import TextInput from "../components/TextInput/TextInput";
import UserPhoto from "../components/UserPhoto/UserPhoto";
import ScrollLayout from "../components/ScrollLayout/ScrollLayout";
import Comments from "../components/Comments/Comments";
import Button from "../components/Button/Button";
import { StyledProfessionalButtonComment } from "../components/ProfessionalLayout/ProfessionalLayout.styles";
import Modal from "../components/Modal/Modal";
import Title from "../components/Title/Title";

const comments = [
    {
        name: "Juan Androetto",
        photo: "/img/mariosantos.png",
        rating: 5,
        comment:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam",
      },
      {
        name: "Juan Manuel Androetto",
        photo: "/img/mariosantos.png",
        rating: 2,
        comment:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam",
      },
];

const ProfessionalPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <ScrollLayout>
      <ScrollLayout.ScrollPart>
        <ProfessionalLayout>
          <UserPhoto url={"/img/mariosantos.png"} />
          <ProfessionalLayout.Name>
            <AccountName
              name={"Juan Manuel Androetto"}
              Profession={"Desarrollador Web"}
              admin
            ></AccountName>
            <Ratings></Ratings>
          </ProfessionalLayout.Name>
          <ProfessionalLayout.Description>
            <DescriptionAdmin>
              {
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam"
              }
            </DescriptionAdmin>
          </ProfessionalLayout.Description>
          <ProfessionalLayout.Info>
            <TextInput
              label={"Teléfono"}
              value={"+548451216161651"}
              disabled={true}
              copy={true}
            ></TextInput>
          </ProfessionalLayout.Info>
          <ProfessionalLayout.Comments>
            <StyledProfessionalButtonComment>
              <Button
                size={"medium"}
                color={"primary"}
                onClick={() => setShowModal(true)}
              >
                Escribe un comentario
              </Button>
            </StyledProfessionalButtonComment>
            <Title>Comentarios</Title>
            {comments.length > 0 ? (
              comments.map((comment) => (
                <Comments
                  name={comment.name}
                  photo={comment.photo}
                  comment={comment.comment}
                  rating={comment.rating}
                  onClick={() => console.log("click")}
                ></Comments>
              ))
            ) : (
              <p>No hay comentarios</p>
            )}
          </ProfessionalLayout.Comments>
          <Modal
            show={showModal}
            title="Escribe un comentario"
            textButton="Comentar"
            onClose={() => setShowModal(false)}
          />
        </ProfessionalLayout>
      </ScrollLayout.ScrollPart>
    </ScrollLayout>
  );
};

export default ProfessionalPage;
