import React, { useState } from "react";
import {
  StyledInputSwitch,
  StyledInputSwitchLabel,
  StyledSwitch,
  StyledSwitchBall,
} from "./InputSwitch.styles";

const InputSwitch = () => {
  const [active, setActive] = useState(false);

  return (
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
  );
};

export default InputSwitch;
