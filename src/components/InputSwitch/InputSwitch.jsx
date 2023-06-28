import React, { useState } from "react";
import {
  StyledInputSwitch,
  StyledInputSwitchLabel,
  StyledSwitch,
  StyledSwitchBall,
} from "./InputSwitch.styles";
import ModalAlert from "../ModalAlert/ModalAlert";

const InputSwitch = () => {
  const [active, setActive] = useState(true);

  return (
    <>
      <StyledInputSwitch
        onClick={() => {
          setActive(!active);
        }}
      >
        <StyledInputSwitchLabel>Desactivar cuenta</StyledInputSwitchLabel>
        <StyledSwitch active={active}>
          <StyledSwitchBall active={active} />
        </StyledSwitch>
      </StyledInputSwitch>
      {active === false && (
        <ModalAlert
          text="Si desactivas tu cuenta, tu perfil ya no estará disponible para que otras personas lo encuentren"
          active={active}
          onClose={() => {
            setActive(!active);
          }}
        />
      )}
    </>
  );
};

export default InputSwitch;
