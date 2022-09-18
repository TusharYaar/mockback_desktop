import React from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { AppUsage } from "../../types";

const UsageChart = ({ data }: { data: AppUsage[] }) => {
  return (
    <ResponsiveContainer width="100%" height={100}>
      <LineChart data={data}>
        <Line dataKey="cpuUsage" stroke="#8884d8" isAnimationActive={false} />
        <Line dataKey="memoryUsage" stroke="#122323" isAnimationActive={false} />
        {/* <Line type="monotone" dataKey="uv" data stroke="#8884d8" /> */}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default UsageChart;
