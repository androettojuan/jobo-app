import React from "react";
import ModalAlert from "../ModalAlert/ModalAlert";
import {
  StyledInputSwitch,
  StyledInputSwitchLabel,
  StyledSwitch,
  StyledSwitchBall,
} from "./InputSwitch.styles";

const InputSwitch = ({active, onClick}) => {
  return (
    <>
      <StyledInputSwitch onClick={onClick}>
        <StyledInputSwitchLabel>Desactivar cuenta</StyledInputSwitchLabel>
        <StyledSwitch active={active}>
          <StyledSwitchBall active={active} />
        </StyledSwitch>
      </StyledInputSwitch>
      {active === false && (
        <ModalAlert
          text="Si desactivas tu cuenta, tu perfil ya no estará disponible para que otras personas lo encuentren"
          active={active}
          onClose={onClick}
        />
      )}
    </>
  );
};

export default InputSwitch;
