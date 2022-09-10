import React from "react";
import { MantineProvider } from "@mantine/core";
import AppProvider from "./context/AppContext";
import Layout from "./components/Layout";
import AppUsageProvider from "./context/AppUsageContext";

const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AppUsageProvider>
        <AppProvider>
          <Layout>
            <div>App</div>
          </Layout>
        </AppProvider>
      </AppUsageProvider>
    </MantineProvider>
  );
};

export default App;
