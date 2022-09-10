import { Button } from "@mantine/core";
import React from "react";
import { useApp } from "../context/AppContext";
import UsageChart from "./UsageChart";

const ServerRunningStatus = () => {
  const { usage, serverRunning } = useApp();

  const handleStartServer = () => {
    window.serverAPI.startServer();
  };
  const handleStopServer = () => {
    window.serverAPI.stopServer();
  };
  return (
    <div>
      {usage.length > 1 && usage[usage.length - 1].memoryUsage}
      {usage.length > 1 && usage[usage.length - 1].cpuUsage}
      <UsageChart data={usage} />
      <Button onClick={serverRunning ? handleStopServer : handleStartServer}>{serverRunning ? "Stop" : "Start"}</Button>
    </div>
  );
};

export default ServerRunningStatus;
