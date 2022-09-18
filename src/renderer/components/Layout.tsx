import React from "react";
import { AppShell, Header, Navbar, ScrollArea } from "@mantine/core";
import SideBar from "./SideBar";
import ServerRunningStatus from "./ServerRunningStatus";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AppShell
        padding="md"
        navbar={
          <Navbar width={{ base: 80 }}>
            <SideBar />
          </Navbar>
        }
        header={
          <Header height={80}>
            <ServerRunningStatus />
          </Header>
        }
      >
        <ScrollArea>{children}</ScrollArea>
      </AppShell>
    </>
  );
};

export default Layout;
