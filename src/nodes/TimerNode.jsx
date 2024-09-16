import { useState, useEffect } from "react";
import { BaseNode } from "../BaseNode";
import { Button } from "antd";
import CustomInput from "../components/CustomInput";

export const TimerNode = ({ id, data }) => {
  const [duration, setDuration] = useState(data?.duration || 10); // Default 10 seconds
  const [remainingTime, setRemainingTime] = useState(duration);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && remainingTime > 0) {
      timer = setTimeout(() => {
        setRemainingTime((prev) => prev - 1);
      }, 1000);
    } else if (remainingTime === 0) {
      triggerOutput(); // Trigger output when countdown reaches 0
      setIsRunning(false);
    }

    return () => clearTimeout(timer);
  }, [isRunning, remainingTime]);

  const handleDurationChange = (e) => {
    const newDuration = parseInt(e.target.value, 10);
    setDuration(newDuration);
    setRemainingTime(newDuration);
  };

  const startTimer = () => {
    setIsRunning(true);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setRemainingTime(duration);
  };

  const triggerOutput = () => {
    console.log("Timer has ended!");
    // Trigger the event or any output logic here.
  };

  return (
    <BaseNode
      id={id}
      data={data}
      label="Timer"
      handles={[
        { type: "target", position: "Left", idSuffix: "input" },
        { type: "source", position: "Right", idSuffix: "output" },
      ]}
      height={"auto"}
    >
      <div className="flex flex-col items-center gap-2">
        <CustomInput
          label="Duration (seconds):"
          type="number"
          id="duration"
          value={duration}
          onChange={handleDurationChange}
          min="1"
        />

        <span>Remaining Time: {remainingTime}s</span>

        <div className="flex justify-between gap-1 w-full">
          <Button onClick={startTimer} disabled={isRunning} size="small">
            Start Timer
          </Button>
          <Button onClick={resetTimer} size="small">
            Reset Timer
          </Button>
        </div>
      </div>
    </BaseNode>
  );
};
