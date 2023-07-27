import React, { useEffect, useState } from "react";
import {
  StyledComments,
  StyledCommentsAdmin,
  StyledCommentsAdminOptionButton,
  StyledCommentsAdminOptionButtonContainer,
  StyledCommentsAdminOptionContainer,
  StyledCommentsAdminOptionIcon,
  StyledCommentsButton,
  StyledCommentsContainerText,
  StyledCommentsUser,
  StyledCommentsUserName,
  StyledCommentsUserPhoto,
  StyledCommentsUserRating,
  StyledCommentsUserText,
  StyledRatingIcon,
  StyledRatingNumer,
} from "./Comments.styles";
import Modal from "../Modal/Modal";
import Alert from "../Alert/Alert";

const Comments = ({
  comment,
  rating,
  photoAdmin,
  nameAdmin,
  ownerId,
  update,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [showOption, setShowOption] = useState(false);
  const [user, setUser] = useState();
  const [response, setResponse] = useState("");
  const deleteComment = undefined;
  const [showAlert, setShowAlert] = useState(false);

  const ratingColors = (star) => {
    if (star === 5) {
      return (
        <>
          <StyledRatingNumer>5</StyledRatingNumer>
          <StyledRatingIcon />
        </>
      );
    } else if (star === 4) {
      return (
        <>
          <StyledRatingNumer>4</StyledRatingNumer>
          <StyledRatingIcon />
        </>
      );
    } else if (star === 3) {
      return (
        <>
          <StyledRatingNumer>3</StyledRatingNumer>
          <StyledRatingIcon />
        </>
      );
    } else if (star === 2) {
      return (
        <>
          <StyledRatingNumer>2</StyledRatingNumer>
          <StyledRatingIcon />
        </>
      );
    } else if (star === 1) {
      return (
        <>
          <StyledRatingNumer>1</StyledRatingNumer>
          <StyledRatingIcon />
        </>
      );
    }
  };

  const ownerAdmin =
    parseInt(localStorage.getItem("userId")) === comment.user_admin_id;

  const owner = ownerId === comment.user_id;

  async function deleteCommentAdmin(comment, id) {
    await fetch("http://localhost:8080/comments/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({ comment_admin: comment }),
    })
      .then((response) => response.json())
      .then(() => update());
  }

  async function deleteCommentUser(id) {
    await fetch("http://localhost:8080/comments/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then(() => update());
  }

  async function replyComment(comment, id) {
    await fetch("http://localhost:8080/comments/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({ comment_admin: comment }),
    })
      .then((response) => response.json())
      .then(() => update());
  }

  async function getUser(id) {
    await fetch("http://localhost:8080/user/" + id, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setUser(data[0]));
  }

  useEffect(() => {
    getUser(comment.user_id);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  }, [comment.user_id]);

  return (
    <StyledComments answer={comment.comment_admin ? true : false}>
      <StyledCommentsUser>
        <StyledCommentsUserPhoto src={user?.photo} />
        <StyledCommentsContainerText>
          <StyledCommentsUserName>
            {user?.name + " " + user?.lastname}
          </StyledCommentsUserName>
          <StyledCommentsUserText>{comment.comment}</StyledCommentsUserText>
        </StyledCommentsContainerText>
        <StyledCommentsUserRating>
          {ratingColors(rating)}
        </StyledCommentsUserRating>
      </StyledCommentsUser>
      {owner && !ownerAdmin ? (
        <StyledCommentsButton
          onClick={() => {
            deleteCommentUser(comment.id);
          }}
        >
          Eliminar
        </StyledCommentsButton>
      ) : null}
      {(ownerAdmin || comment.comment_admin) &&
        (!comment.comment_admin ? (
          <StyledCommentsButton
            onClick={() => {
              setShowModal(true);
            }}
          >
            Responder
          </StyledCommentsButton>
        ) : (
          <StyledCommentsAdmin>
            <StyledCommentsUser>
              <StyledCommentsUserPhoto src={photoAdmin} />
              <StyledCommentsContainerText>
                <StyledCommentsUserName>{nameAdmin}</StyledCommentsUserName>
                <StyledCommentsUserText>
                  {comment.comment_admin}
                </StyledCommentsUserText>
              </StyledCommentsContainerText>
            </StyledCommentsUser>
            {ownerAdmin && (
              <StyledCommentsAdminOptionContainer>
                <StyledCommentsAdminOptionIcon
                  onClick={() => setShowOption(!showOption)}
                ></StyledCommentsAdminOptionIcon>
                <StyledCommentsAdminOptionButtonContainer show={showOption}>
                  <StyledCommentsAdminOptionButton
                    onClick={() => {
                      setShowOption(false);
                      deleteCommentAdmin(deleteComment, comment.id);
                    }}
                  >
                    Eliminar
                  </StyledCommentsAdminOptionButton>
                </StyledCommentsAdminOptionButtonContainer>
              </StyledCommentsAdminOptionContainer>
            )}
          </StyledCommentsAdmin>
        ))}
      <Modal
        show={showModal}
        title="Responder"
        value={response}
        onClose={() => setShowModal(false)}
        textButton={"Enviar comentario"}
        onChange={(e) => setResponse(e.target.value)}
        onClick={() => {
          if (response !== "" && response !== undefined && response !== null) {
            replyComment(response, comment.id);
            setShowModal(false);
          } else {
            setShowAlert(true);
          }
        }}
      ></Modal>
      <Alert visible={showAlert} text={"Debe ingresar un comentario"} />
    </StyledComments>
  );
};

export default Comments;
