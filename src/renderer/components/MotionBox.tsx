import React from "react";
import { Box, Sx } from "@mantine/core";
import { motion } from "framer-motion";
const MotionBox = React.forwardRef<HTMLDivElement, { children?: React.ReactNode; sx?: Sx }>((props, ref) => (
  <Box ref={ref} {...props} />
));

export default motion(MotionBox);
