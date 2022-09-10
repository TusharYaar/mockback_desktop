import { AppUsage } from "./src/types";

export interface systemUsageAPI {
  getUsage: () => Promise<AppUsage>;
}
export interface serverAPI {
  startServer: () => void;
  stopServer: () => void;
  onUpdateServer: (callback: (event: any, value: any) => void) => Electron.IpcRenderer;
  getServerStatus: () => Promise<{ serverRunning: boolean; port: number }>;
}

declare global {
  interface Window {
    systemUsageAPI: systemUsageAPI;
    serverAPI: serverAPI;
  }
}
