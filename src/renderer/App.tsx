import React from "react";
import { MantineProvider } from "@mantine/core";
import AppProvider from "./context/AppContext";
import Layout from "./components/Layout";
import AppUsageProvider from "./context/AppUsageContext";
import ServerProvider from "./context/ServerContext";

const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <ServerProvider>
        <AppUsageProvider>
          <AppProvider>
            <Layout>
              <div style={{ height: 1000 }}>App</div>
            </Layout>
          </AppProvider>
        </AppUsageProvider>
      </ServerProvider>
    </MantineProvider>
  );
};

export default App;
