import React from "react";

function TimerComponent() {
  const [time, setTime] = React.useState(0);
  function updateTime() {
    setTime(time + 1);
  }

  return (
    <div>
      <div>{time}초</div>
      <button onClick={updateTime}>1씩 올려줌요</button>
    </div>
  );
}
export default TimerComponent;
