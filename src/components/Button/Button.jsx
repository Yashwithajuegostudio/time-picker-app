import React from "react";
import styled from "styled-components";

export const ButtonStyle = styled.button`
  padding: 1.2rem;
  width: 4rem;
  color: ${(props) => (props.active ? "red" : "grey")};
  cursor: pointer;
  border-radius: 0.5rem;
`;

function Button({ title, clickHandler, active }) {
  return (
    <ButtonStyle onClick={clickHandler} active={active}>
      {title}
    </ButtonStyle>
  );
}

export default Button;
