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

const ProfesionalPage = () => {
  const { id } = useParams();
  const userId = id;
  const [profesional, setProfesional] = useState([]);
  const [users, setUsers] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [comments, setComments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const userAdminId = 2;
  const [comment, setComment] = useState("");
  const [answer, setAnswer] = useState(false);

  const userSelected = (comment) =>
    users?.find((user) => user.id === comment.user_id);
  const userAdminSelected = (comment) =>
    users?.find((user) => user.id === comment.user_admin_id);

  // users

  async function getUser(userId) {
    const response = await fetch("http://localhost:8080/user/" + userId);
    const data = await response.json();
    setProfesional(data[0]);
  }

  async function getUsers() {
    const response = await fetch("http://localhost:8080/users");
    const data = await response.json();
    setUsers(data);
  }

  // jobs

  async function getJobs() {
    const response = await fetch("http://localhost:8080/jobs");
    const data = await response.json();
    setJobs(data);
  }

  // comments

  async function createComment(userId, userAdminId, rating, comment) {
    await fetch("http://localhost:8080/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        userId: parseInt(userId),
        userAdminId: parseInt(userAdminId),
        rating: parseInt(rating),
        comment: comment,
      }),
    });
  }

  useEffect(() => {
    async function getComments(userAdminId) {
      const response = await fetch(
        "http://localhost:8080/comments/" + userAdminId
      );
      const data = await response.json();
      setComments(data);
    }
    getUser(userId);
    getJobs();
    getComments(userAdminId);
    getUsers();
  }, [userId]);

  return (
    <ScrollLayout>
      <ScrollLayout.FixedPart>
        <Container>
          <Breadcrumb
            pages={[
              {
                label: `${
                  jobs?.find((job) => job.id === profesional.job_id)?.title
                }`,
                url: `/categories/${profesional.job_id}`,
                name: "profesionals",
              },
              { label: "Profesional", name: "profession" },
            ]}
          ></Breadcrumb>
        </Container>
      </ScrollLayout.FixedPart>
      <ScrollLayout.ScrollPart>
        <ProfesionalLayout>
          <UserPhoto url={profesional?.photo} />
          <ProfesionalLayout.Name>
            <AccountName
              name={profesional?.name + " " + profesional?.lastname}
              Profession={
                jobs.find((job) => job.id === profesional.job_id)?.title
              }
              admin
            ></AccountName>
            <Ratings></Ratings>
          </ProfesionalLayout.Name>
          <ProfesionalLayout.Description>
            <DescriptionAdmin>{profesional?.description}</DescriptionAdmin>
          </ProfesionalLayout.Description>
          <ProfesionalLayout.Info>
            <TextInput
              label={"Teléfono"}
              value={profesional?.phone}
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
            {comments?.length > 0 ? (
              comments.map((comment, index) => (
                <Comments
                  key={index}
                  name={
                    userSelected(comment)?.name +
                    " " +
                    userSelected(comment)?.lastname
                  }
                  photo={userSelected(comment)?.photo}
                  comment={comment?.comment}
                  rating={comment?.rating}
                  photoAdmin={userAdminSelected(comment)?.photo}
                  nameAdmin={userAdminSelected(comment)?.name}
                  commentAdmin={() => {
                    if (
                      comment.comment_admin !== null ||
                      comment.comment_admin !== ""
                    ) {
                      setAnswer(true);
                      return comment.comment_admin;
                    } else {
                      setAnswer(false);
                    }
                  }}
                  answer={answer}
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
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            onClose={() => setShowModal(false)}
            onClick={() => {
              if (userId) {
                createComment(userId, userAdminId, 5, comment);
              }
              setShowModal(false);
            }}
          />
        </ProfesionalLayout>
      </ScrollLayout.ScrollPart>
    </ScrollLayout>
  );
};

export default ProfesionalPage;
