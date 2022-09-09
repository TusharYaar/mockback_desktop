import React from "react";
import { MantineProvider } from "@mantine/core";
import AppProvider from "./context/AppContext";

const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AppProvider>
        <div>App</div>
      </AppProvider>
    </MantineProvider>
  );
};

export default App;
