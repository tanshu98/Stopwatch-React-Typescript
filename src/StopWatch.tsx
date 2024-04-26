import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React, { useEffect, useState } from "react";

let intervalId: any;
function StopWatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  console.log(time, isRunning);

  useEffect(() => {
    if (isRunning) {
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, []);

  const startStop = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => setTime(0);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          p: 3,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ mb: 2, color: "white" }}>{time}</Box>
        <Box sx={{ display: "flex", gap: 3 }}>
          <Button onClick={startStop} variant="contained">
            {isRunning ? "Stop" : "Start"}{" "}
          </Button>
          <Button onClick={reset} variant="contained">
            Reset
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default StopWatch;
