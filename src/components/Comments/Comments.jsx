import React, { useState } from "react";
import {
  StyledComments,
  StyledCommentsAdmin,
  StyledCommentsButton,
  StyledCommentsContainerText,
  StyledCommentsUser,
  StyledCommentsUserName,
  StyledCommentsUserPhoto,
  StyledCommentsUserRating,
  StyledCommentsUserText,
} from "./Comments.styles";
import { AiFillStar } from "react-icons/ai";
import Modal from "../Modal/Modal";

const Comments = ({ name, comment, photo, rating, answer }) => {
  const [showModal, setShowModal] = useState(false);

  const ratingColors = (star) => {
    if (star === 5) {
      return (
        <>
          <AiFillStar color="#ffc107" />
          <AiFillStar color="#ffc107" />
          <AiFillStar color="#ffc107" />
          <AiFillStar color="#ffc107" />
          <AiFillStar color="#ffc107" />
        </>
      );
    } else if (star === 4) {
      return (
        <>
          <AiFillStar color="#ffc107" />
          <AiFillStar color="#ffc107" />
          <AiFillStar color="#ffc107" />
          <AiFillStar color="#ffc107" />
          <AiFillStar color="#e4e5e9" />
        </>
      );
    } else if (star === 3) {
      return (
        <>
          <AiFillStar color="#ffc107" />
          <AiFillStar color="#ffc107" />
          <AiFillStar color="#ffc107" />
          <AiFillStar color="#e4e5e9" />
          <AiFillStar color="#e4e5e9" />
        </>
      );
    } else if (star === 2) {
      return (
        <>
          <AiFillStar color="#ffc107" />
          <AiFillStar color="#ffc107" />
          <AiFillStar color="#e4e5e9" />
          <AiFillStar color="#e4e5e9" />
          <AiFillStar color="#e4e5e9" />
        </>
      );
    } else if (star === 1) {
      return (
        <>
          <AiFillStar color="#ffc107" />
          <AiFillStar color="#e4e5e9" />
          <AiFillStar color="#e4e5e9" />
          <AiFillStar color="#e4e5e9" />
          <AiFillStar color="#e4e5e9" />
        </>
      );
    }
  };

  return (
    <StyledComments>
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
      {!answer ? (
        <StyledCommentsButton
          onClick={() => {
            setShowModal(true);
          }}
        >
          Responder
        </StyledCommentsButton>
      ) : (
        <StyledCommentsAdmin></StyledCommentsAdmin>
      )}
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
