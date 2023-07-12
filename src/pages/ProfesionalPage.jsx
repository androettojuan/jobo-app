import React, { useEffect, useState } from "react";
import ProfesionalLayout from "../components/ProfesionalLayout/ProfesionalLayout";
import AccountName from "../components/AccountName/AccountName";
import Ratings from "../components/Ratings/Ratings";
import DescriptionAdmin from "../components/DescriptionAdmin/DescriptionAdmin";
import TextInput from "../components/TextInput/TextInput";
import UserPhoto from "../components/UserPhoto/UserPhoto";
import ScrollLayout from "../components/ScrollLayout/ScrollLayout";
import Comments from "../components/Comments/Comments";
import Button from "../components/Button/Button";
import { StyledProfesionalButtonComment } from "../components/ProfesionalLayout/ProfesionalLayout.styles";
import Modal from "../components/Modal/Modal";
import Title from "../components/Title/Title";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import Container from "../components/Container/Container";
import { useParams } from "react-router";

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

const ProfesionalPage = () => {
  const { id } = useParams();
  const userId = id;
  const [user, setUser] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [showModal, setShowModal] = useState(false);

  async function getUser(userId) {
    const response = await fetch("http://localhost:8080/user/" + userId);
    const data = await response.json();
    setUser(data[0]);
  }

  async function getJobs() {
    const response = await fetch("http://localhost:8080/jobs");
    const data = await response.json();
    setJobs(data);
  }

  useEffect(() => {
    getUser(userId);
    getJobs();
  }, [userId]);

  return (
    <ScrollLayout>
      <ScrollLayout.FixedPart>
        <Container>
          <Breadcrumb
            pages={[
              {
                label: `${jobs?.find((job) => job.id === user.job_id)?.title}`,
                url: `/categories/${user.job_id}`,
                name: "profesionals",
              },
              { label: "Profesional", name: "profession" },
            ]}
          ></Breadcrumb>
        </Container>
      </ScrollLayout.FixedPart>
      <ScrollLayout.ScrollPart>
        <ProfesionalLayout>
          <UserPhoto url={user.photo} />
          <ProfesionalLayout.Name>
            <AccountName
              name={user?.name + " " + user?.lastname}
              Profession={jobs.find((job) => job.id === user.job_id)?.title}
              admin
            ></AccountName>
            <Ratings></Ratings>
          </ProfesionalLayout.Name>
          <ProfesionalLayout.Description>
            <DescriptionAdmin>{user.description}</DescriptionAdmin>
          </ProfesionalLayout.Description>
          <ProfesionalLayout.Info>
            <TextInput
              label={"Teléfono"}
              value={user.phone}
              disabled={true}
              copy={true}
            ></TextInput>
          </ProfesionalLayout.Info>
          <ProfesionalLayout.Comments>
            <StyledProfesionalButtonComment>
              <Button
                size={"medium"}
                color={"primary"}
                onClick={() => setShowModal(true)}
              >
                Escribe un comentario
              </Button>
            </StyledProfesionalButtonComment>
            <Title>Comentarios</Title>
            {comments.length > 0 ? (
              comments.map((comment) => (
                <Comments
                  name={comment.name}
                  photo={comment.photo}
                  comment={comment.comment}
                  rating={comment.rating}
                  key={comment.name}
                  onClick={() => console.log("click")}
                ></Comments>
              ))
            ) : (
              <p>No hay comentarios</p>
            )}
          </ProfesionalLayout.Comments>
          <Modal
            show={showModal}
            title="Escribe un comentario"
            textButton="Comentar"
            onClose={() => setShowModal(false)}
          />
        </ProfesionalLayout>
      </ScrollLayout.ScrollPart>
    </ScrollLayout>
  );
};

export default ProfesionalPage;
