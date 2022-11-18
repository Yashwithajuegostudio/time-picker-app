import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  padding: 1.2rem;
  color: grey;
  cursor: pointer;
  border-radius: 0.5rem;
`;
function Button({ title, clickHandler }) {
  return <ButtonStyle onClick={clickHandler}>{title}</ButtonStyle>;
}

export default Button;
