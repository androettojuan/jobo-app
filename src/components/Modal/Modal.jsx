import React from "react";
import { AiFillStar } from "react-icons/ai";
import Button from "../Button/Button";
import {
  StyledModal,
  StyledModalBody,
  StyledModalClose,
  StyledModalContent,
  StyledModalFondo,
  StyledModalFooter,
  StyledModalHeader,
  StyledModalInput,
  StyledModalRating,
  StyledModalTitle,
} from "./Modal.styles";

const ratings = [1, 2, 3, 4, 5];

const selectRating = (rating, onClickRating) => {
  return ratings.map((item) => (
    <AiFillStar
      key={item}
      color={item <= rating ? "#FFC107" : "#E0E0E0"}
      size={30}
      onClick={() => onClickRating(item)}
    />
  ));
};

const Modal = ({
  show,
  title,
  onClose,
  textButton,
  onChange,
  comment,
  onClick,
  onClickRating,
  rating,
}) => {
  return (
    <StyledModal show={show}>
      <StyledModalFondo onClick={onClose}></StyledModalFondo>
      <StyledModalContent>
        <StyledModalHeader>
          <StyledModalTitle>{title}</StyledModalTitle>
          <StyledModalClose onClick={onClose} />
        </StyledModalHeader>
        <StyledModalBody>
          <StyledModalRating>
            {selectRating(rating, onClickRating)}
          </StyledModalRating>
          <StyledModalInput
            type="text"
            placeholder="Escribe tu comentario"
            value={comment}
            onChange={onChange}
          />
        </StyledModalBody>
        <StyledModalFooter>
          <Button size={"medium"} color={"primary"} onClick={onClick}>
            {textButton}
          </Button>
        </StyledModalFooter>
      </StyledModalContent>
    </StyledModal>
  );
};

export default Modal;
