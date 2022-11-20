import React, { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button/Button";
import { HOUR_VALUES, MINUTE_VALUES, TITLE } from "../utils/constant";

const TimePickerContainer = styled.div`
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
const TimePickerBox = styled.div`
  width: 100%;
  height: calc(100% - 110px);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 0.9rem;
`;
const TimePickerHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.1rem solid var(--primary-black);
  padding: 1rem;
`;
function TimePicker() {
  const [hourValue, setHourValue] = useState("");
  const [minuteValue, setMinuteValue] = useState("");
  const [timeFieldStatus, setTimeFieldStatus] = useState(TITLE.minuteTitle);

  const handleNumberClick = (timeValue, btnStatus) => {
    btnStatus === TITLE.hourTitle
      ? setHourValue(timeValue)
      : setMinuteValue(timeValue);
    setTimeFieldStatus(btnStatus);
  };

  return (
    <TimePickerContainer>
      <TimePickerHeader>
        <Button
          title={hourValue === "" ? TITLE.hourTitle : hourValue}
          active={timeFieldStatus === TITLE.minuteTitle ? true : false}
        />
        <Button
          title={minuteValue === "" ? TITLE.minuteTitle : minuteValue}
          active={timeFieldStatus === TITLE.minuteTitle ? false : true}
        />
      </TimePickerHeader>

      <TimePickerBox>
        {timeFieldStatus === TITLE.minuteTitle &&
          HOUR_VALUES.flat().map((timeValue, index) => {
            return (
              <Button
                key={index}
                title={timeValue}
                clickHandler={() => {
                  handleNumberClick(timeValue, TITLE.hourTitle);
                }}
              />
            );
          })}
        {timeFieldStatus === TITLE.hourTitle &&
          MINUTE_VALUES.flat().map((timeValue, index) => {
            return (
              <Button
                key={index}
                title={timeValue}
                clickHandler={() => {
                  handleNumberClick(timeValue, TITLE.minuteTitle);
                }}
              />
            );
          })}
      </TimePickerBox>
    </TimePickerContainer>
  );
}

export default TimePicker;
