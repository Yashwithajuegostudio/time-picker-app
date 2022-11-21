import React from "react";
import { ButtonStyle } from "./Button.style";

function Button({ title, clickHandler, active }) {
  return (
    <ButtonStyle onClick={clickHandler} active={active}>
      {title}
    </ButtonStyle>
  );
}

export default Button;
