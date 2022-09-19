import { motion } from "framer-motion";
import { Text, Sx } from "@mantine/core";
import React from "react";

type Props = { children?: React.ReactNode; sx?: Sx };

const TextRef = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  return (
    <Text ref={ref} sx={props.sx}>
      {props.children}
    </Text>
  );
});
export default motion(TextRef);
