import { useState } from "react";
import "./App.css";
import TimePicker from "./components/TimePicker/TimePicker";
import { TITLE } from "./utils/constant";

function App() {
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
    <TimePicker
      hourValue={hourValue}
      minuteValue={minuteValue}
      timeFieldStatus={timeFieldStatus}
      handleNumberClick={handleNumberClick}
    />
  );
}

export default App;
