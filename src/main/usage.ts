import { cpu, mem } from "node-os-utils";
import os from "os";
import { AppUsage } from "../types";

export const getUsage = async (): Promise<AppUsage> => {
  const cpuUsage = await cpu.usage();
  const memUsage = await mem.info();

  const cpus = os.cpus();

  return {
    time: Date.now(),
    cpuCount: cpu.count(),
    cpuUsage,
    totalMemory: memUsage.totalMemMb,
    usedMemory: memUsage.usedMemMb,
    memoryUsage: memUsage.usedMemPercentage,
    cpus,
  };
};
