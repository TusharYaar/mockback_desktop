import { Button } from "@mantine/core";
import React from "react";
import MotionBox from "./MotionBox";

const SideBar = () => {
  return (
    <MotionBox style={{ backgroundColor: "green", paddingTop: 80 }}>
      <Button>Setting</Button>
      <Button>Dashboard</Button>
    </MotionBox>
  );
};

export default SideBar;
