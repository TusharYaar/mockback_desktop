import { AppUsage } from "./src/types";

export interface systemUsageAPI {
  getUsage: () => Promise<AppUsage>;
}

declare global {
  interface Window {
    systemUsageAPI: systemUsageAPI;
  }
}
