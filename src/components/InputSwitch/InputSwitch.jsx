import React from "react";
import ModalAlert from "../ModalAlert/ModalAlert";
import {
  StyledInputSwitch,
  StyledInputSwitchLabel,
  StyledSwitch,
  StyledSwitchBall,
} from "./InputSwitch.styles";

const InputSwitch = ({ active, onClick, disabled, show, label, textAlert }) => {
  return (
    <>
      <StyledInputSwitch onClick={onClick}>
        <StyledInputSwitchLabel>{label}</StyledInputSwitchLabel>
        <StyledSwitch active={`${active}`}>
          <StyledSwitchBall active={`${active}`} />
        </StyledSwitch>
      </StyledInputSwitch>
      {show === true && (
        <ModalAlert
          text={textAlert}
          active={`${active}`}
          onClose={onClick}
          disabled={disabled}
        />
      )}
    </>
  );
};

export default InputSwitch;
