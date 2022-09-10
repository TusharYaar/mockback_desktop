import React from "react";
import { createStyles } from "@mantine/core";
import { useApp } from "../context/AppContext";
import UsageChart from "./UsageChart";

const useStyles = createStyles((theme) => ({
  runningStatusContainer: {
    top: 0,
    left: 0,
    width: "100%",
    height: 200,
    backgroundColor: "olive",
    zIndex: 100,
    display: "flex",
    borderRadius: theme.radius.sm,
  },
}));

const ServerRunningStatus = () => {
  const { usage } = useApp();
  const { classes } = useStyles();

  return (
    <div className={classes.runningStatusContainer}>
      {usage.length > 1 && usage[usage.length - 1].memoryUsage}
      {usage.length > 1 && usage[usage.length - 1].cpuUsage}
      <UsageChart data={usage} />
    </div>
  );
};

export default ServerRunningStatus;
