import styled from "styled-components";
import { COLOR } from "../../utils/constant";

export const ButtonStyle = styled.button`
  padding: 1.2rem;
  width: 4rem;
  color: ${(props) => (props.active ? COLOR.primaryRed : COLOR.primaryGrey)};
  cursor: pointer;
  border-radius: 0.5rem;
`;
