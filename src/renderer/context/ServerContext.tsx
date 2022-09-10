import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

type ContextType = {
  serverRunning: boolean;
  serverPort: number;
};

const serverContext = createContext<ContextType>({
  serverPort: 0,
  serverRunning: false,
});
export const useServer = () => useContext(serverContext);

const ServerProvider = ({ children }: { children: React.ReactNode }) => {
  const [serverRunning, serServerRunning] = useState(false);
  const [serverPort, setServerPort] = useState(0);

  const getServerStatus = useCallback(async () => {
    const result = await window.serverAPI.getServerStatus();
    serServerRunning(result.serverRunning);
    setServerPort(result.port);
  }, []);

  useEffect(() => {
    getServerStatus();
  }, [getServerStatus]);

  useEffect(() => {
    window.serverAPI.onUpdateServer((event, value) => {
      setServerPort(value.port);
      serServerRunning(value.currentServerStatus);
    });
  }, []);

  return <serverContext.Provider value={{ serverRunning, serverPort }}>{children}</serverContext.Provider>;
};

export default ServerProvider;
