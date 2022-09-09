import React, { createContext, useContext, useState, useEffect } from "react";
const AppContext = createContext({});
export const useApp = () => useContext(AppContext);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  // TODO Add app states
  // TODO Subscribe to main process listeners

  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export default AppProvider;
