import React, { createContext, useContext, useState, useEffect } from "react";
import { AppUsage } from "../../types";

type ContextType = {
  usage: AppUsage[];
};

const AppUsageContext = createContext<ContextType>({ usage: null });
export const useAppUsage = () => useContext(AppUsageContext);

const AppUsageProvider = ({ children }: { children: React.ReactNode }) => {
  const [usage, setUsage] = useState<AppUsage[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      window.systemUsageAPI
        .getUsage()
        .then((data) => setUsage((prev) => (prev.length > 14 ? [...prev.splice(1, 14), data] : [...prev, data])));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <AppUsageContext.Provider value={{ usage }}>{children}</AppUsageContext.Provider>;
};

export default AppUsageProvider;
