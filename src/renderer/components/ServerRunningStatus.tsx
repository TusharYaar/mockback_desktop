import { Button, Box } from "@mantine/core";
import React, { useState } from "react";
import { useApp } from "../context/AppContext";
import UsageChart from "./UsageChart";

import MotionBox from "./MotionBox";

const ServerRunningStatus = () => {
  const { usage, serverRunning } = useApp();
  const [expand, setExpand] = useState(false);

  const handleStartServer = () => {
    window.serverAPI.startServer();
  };
  const handleStopServer = () => {
    window.serverAPI.stopServer();
  };
  return (
    <MotionBox
      sx={{
        backgroundColor: "#e5e5e5",
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        padding: 5,
      }}
      animate={{ height: expand ? 300 : 80 }}
      transition={{ duration: 0.4, type: "tween" }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Box sx={{ flexGrow: 1 }}>
          Memory: {usage.length > 1 && usage[usage.length - 1].memoryUsage}
          <MotionBox
            sx={{ backgroundColor: "#deb841", height: 5 }}
            animate={{ width: `${usage.length > 1 ? usage[usage.length - 1].memoryUsage : 0}%` }}
          />
          CPU: {usage.length > 1 && usage[usage.length - 1].cpuUsage}
          <MotionBox
            sx={{ backgroundColor: "#01baef", height: 5 }}
            animate={{ width: `${usage.length > 1 ? usage[usage.length - 1].cpuUsage : 0}%` }}
            transition={{ duration: 0.4, type: "tween" }}
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Button onClick={serverRunning ? handleStopServer : handleStartServer}>
            {serverRunning ? "Stop" : "Start"}
          </Button>
          <Button compact onClick={() => setExpand((prev) => !prev)}>
            {expand ? "Show Less" : "Show More"}
          </Button>
        </Box>
      </Box>
      {expand && <UsageChart data={usage} />}
    </MotionBox>
  );
};

export default ServerRunningStatus;
