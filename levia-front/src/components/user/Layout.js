import React from "react";
import { Box, Stack } from "@mui/material";
import Menubar from "./Menubar";

export default function Layout({ children }) {
  return (
    <div>
      <Stack direction="row" height={"100vh"}>
        <Menubar />
        <Box flex={10}>
          <Box p={2} display={"flex"} flexDirection={"column"}>
            {children}
          </Box>
        </Box>
      </Stack>
    </div>
  );
}
