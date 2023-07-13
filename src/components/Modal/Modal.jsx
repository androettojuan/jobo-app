import React from "react";
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

const Modal = ({ show, title, onClose, textButton, onChange, comment, onClick }) => {
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
