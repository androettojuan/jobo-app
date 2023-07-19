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

const Comments = ({
  comment,
  onClick,
  rating,
  photoAdmin,
  nameAdmin,
  isAdmin,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [showOption, setShowOption] = useState(false);
  const [user, setUser] = useState();

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
      {!isAdmin && <StyledCommentsButton>Eliminar</StyledCommentsButton>}
      {isAdmin &&
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
            <StyledCommentsAdminOptionContainer>
              <StyledCommentsAdminOptionIcon
                onClick={() => setShowOption(!showOption)}
              ></StyledCommentsAdminOptionIcon>
              <StyledCommentsAdminOptionButtonContainer show={showOption}>
                <StyledCommentsAdminOptionButton
                  onClick={() => {
                    setShowOption(false);
                    console.log("eliminar comentario");
                  }}
                >
                  Eliminar
                </StyledCommentsAdminOptionButton>
              </StyledCommentsAdminOptionButtonContainer>
            </StyledCommentsAdminOptionContainer>
          </StyledCommentsAdmin>
        ))}
      <Modal
        show={showModal}
        title="Responder"
        onClose={() => setShowModal(false)}
        textButton={"Enviar comentario"}
      ></Modal>
    </StyledComments>
  );
};

export default Comments;
