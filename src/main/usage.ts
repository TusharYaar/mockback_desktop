import { cpu, mem } from "node-os-utils";
import { AppUsage } from "../types";

export const getUsage = async (): Promise<AppUsage> => {
  const cpuUsage = await cpu.usage();
  const memUsage = await mem.info();

  return {
    time: Date.now(),
    cpuCount: cpu.count(),
    cpuUsage,
    totalMemory: memUsage.totalMemMb,
    usedMemory: memUsage.usedMemMb,
    memoryUsage: memUsage.usedMemPercentage,
  };
};
