import React from "react";
import { LineChart, Line } from "recharts";
import { AppUsage } from "../../types";

const UsageChart = ({ data }: { data: AppUsage[] }) => {
  return (
    <LineChart width={700} height={100} data={data}>
      <Line dataKey="cpuUsage" stroke="#8884d8" isAnimationActive={false} />
      <Line dataKey="memoryUsage" stroke="#122323" isAnimationActive={false} />

      {/* <Line type="monotone" dataKey="uv" data stroke="#8884d8" /> */}
    </LineChart>
  );
};

export default UsageChart;
