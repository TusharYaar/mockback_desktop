import os from "os";

export interface AppUsage {
  time: number;
  cpuCount: number;
  cpuUsage: number;
  totalMemory: number;
  usedMemory: number;
  memoryUsage: number;
  cpus: os.CpuInfo[];
}
