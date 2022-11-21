import React, { useState } from "react";
import {
  ACTIVE_STATUS,
  HOUR_VALUES,
  MINUTE_VALUES,
  TITLE,
} from "../../utils/constant";
import Button from "../Button/Button";
import {
  TimePickerBox,
  TimePickerContainer,
  TimePickerHeader,
} from "./TimePicker.style";

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
          active={
            timeFieldStatus === TITLE.minuteTitle
              ? ACTIVE_STATUS.trueStatus
              : ACTIVE_STATUS.falseStatus
          }
        />
        <Button
          title={minuteValue === "" ? TITLE.minuteTitle : minuteValue}
          active={
            timeFieldStatus !== TITLE.minuteTitle
              ? ACTIVE_STATUS.trueStatus
              : ACTIVE_STATUS.falseStatus
          }
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
