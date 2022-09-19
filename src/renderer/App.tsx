import React from "react";
import { MantineProvider } from "@mantine/core";
import AppProvider from "./context/AppContext";
import Layout from "./components/Layout";
import AppUsageProvider from "./context/AppUsageContext";
import ServerProvider from "./context/ServerContext";
import Text from "./components/Text";

const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <ServerProvider>
        <AppUsageProvider>
          <AppProvider>
            <Layout>
              <div style={{ height: 1000 }}>
                <Text animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 2 }}>
                  Hello
                </Text>
              </div>
            </Layout>
          </AppProvider>
        </AppUsageProvider>
      </ServerProvider>
    </MantineProvider>
  );
};

export default App;
