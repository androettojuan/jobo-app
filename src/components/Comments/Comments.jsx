import React, { useState } from "react";
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
  name,
  comment,
  photo,
  rating,
  answer,
  photoAdmin,
  nameAdmin,
  commentAdmin,
  isAdmin = false,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [showOption, setShowOption] = useState(false);

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

  return (
    <StyledComments answer={answer ? true : false}>
      <StyledCommentsUser>
        <StyledCommentsUserPhoto src={photo} />
        <StyledCommentsContainerText>
          <StyledCommentsUserName>{name}</StyledCommentsUserName>
          <StyledCommentsUserText>{comment}</StyledCommentsUserText>
        </StyledCommentsContainerText>
        <StyledCommentsUserRating>
          {ratingColors(rating)}
        </StyledCommentsUserRating>
      </StyledCommentsUser>
      {!isAdmin && <StyledCommentsButton>Eliminar</StyledCommentsButton>}
      {isAdmin &&
        (!answer ? (
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
                <StyledCommentsUserText>{commentAdmin}</StyledCommentsUserText>
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
