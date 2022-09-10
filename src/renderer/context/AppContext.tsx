import React, { createContext, useContext, useState, useEffect } from "react";
import { AppUsage } from "../../types";
import { useAppUsage } from "./AppUsageContext";

type ContextType = {
  usage: AppUsage[];
};

const AppContext = createContext<ContextType>({ usage: [] });
export const useApp = () => useContext(AppContext);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  // TODO Add app states
  // TODO Subscribe to main process listeners

  const { usage } = useAppUsage();

  return <AppContext.Provider value={{ usage }}>{children}</AppContext.Provider>;
};

export default AppProvider;
