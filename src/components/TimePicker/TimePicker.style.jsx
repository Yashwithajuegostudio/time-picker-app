import styled from "styled-components";

export const TimePickerContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 0.1rem solid var(--primary-black);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const TimePickerBox = styled.div`
  width: 100%;
  height: calc(100% - 110px);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 0.9rem;
`;
export const TimePickerHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.1rem solid var(--primary-black);
  padding: 1rem;
`;
