import React from "react";
import {
  StyledModalAlert,
  StyledModalAlertBody,
  StyledModalAlertClose,
  StyledModalAlertContent,
  StyledModalAlertFondo,
  StyledModalAlertHeader,
  StyledModalAlertTitle,
  StyledModalText,
} from "./ModalAlert.styles";
import Button from "../Button/Button";

const ModalAlert = ({ active, text, disabled, onClose }) => {
  return (
    <StyledModalAlert>
      <StyledModalAlertFondo active={active} onClick={onClose} />
      <StyledModalAlertContent active={active}>
        <StyledModalAlertHeader>
          <StyledModalAlertTitle>Pausar cuenta</StyledModalAlertTitle>
          <StyledModalAlertClose onClick={onClose} />
        </StyledModalAlertHeader>
        <StyledModalAlertBody>
          <StyledModalText>{text}</StyledModalText>
          <Button size={"medium"} color={"primary"} onClick={disabled}>
            Desactivar
          </Button>
        </StyledModalAlertBody>
      </StyledModalAlertContent>
    </StyledModalAlert>
  );
};

export default ModalAlert;
