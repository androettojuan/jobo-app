import React, { useState } from "react";
import {
  StyledModal,
  StyledModalBody,
  StyledModalClose,
  StyledModalContent,
  StyledModalFondo,
  StyledModalFooter,
  StyledModalHeader,
  StyledModalInput,
  StyledModalTitle,
} from "./Modal.styles";
import Button from "../Button/Button";

const Modal = ({ show, title, onClose, textButton }) => {
  const [comment, setComment] = useState("");

  return (
    <StyledModal show={show}>
      <StyledModalFondo onClick={onClose}></StyledModalFondo>
      <StyledModalContent>
        <StyledModalHeader>
          <StyledModalTitle>{title}</StyledModalTitle>
          <StyledModalClose onClick={onClose} />
        </StyledModalHeader>
        <StyledModalBody>
          <StyledModalInput
            type="text"
            placeholder="Escribe tu comentario"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </StyledModalBody>
        <StyledModalFooter>
          <Button size={"medium"} color={"primary"}>
            {textButton}
          </Button>
        </StyledModalFooter>
      </StyledModalContent>
    </StyledModal>
  );
};

export default Modal;
