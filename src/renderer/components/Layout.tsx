import React from "react";
import { AppShell, Header } from "@mantine/core";
import SideBar from "./SideBar";
import ServerRunningStatus from "./ServerRunningStatus";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AppShell
        padding="md"
        navbar={<SideBar />}
        header={
          <Header height={60}>
            <ServerRunningStatus />
          </Header>
        }
        styles={(theme) => ({
          main: { backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0] },
        })}>
        {/* <ServerRunningStatus />  */}
        {children}
      </AppShell>
    </>
  );
};

export default Layout;
