import React, { createContext, useContext } from "react";
import { AppUsage } from "../../types";
import { useAppUsage } from "./AppUsageContext";
import { useServer } from "./ServerContext";

type ContextType = {
  usage: AppUsage[];
  serverPort: number;
  serverRunning: boolean;
};

const defaultValues: ContextType = {
  usage: [],
  serverPort: 0,
  serverRunning: false,
};

const AppContext = createContext<ContextType>(defaultValues);
export const useApp = () => useContext(AppContext);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const { usage } = useAppUsage();
  const { serverRunning, serverPort } = useServer();

  return <AppContext.Provider value={{ usage, serverRunning, serverPort }}>{children}</AppContext.Provider>;
};

export default AppProvider;
