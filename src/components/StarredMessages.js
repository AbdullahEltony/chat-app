import { Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";

import { useDispatch } from "react-redux";
import { UpdateSidebarType } from "../store/slices/app";
import { CaretLeft } from "phosphor-react";
import { faker } from "@faker-js/faker";
import Messages from "./conversations/Messages";

const StarredMessages = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  return (
    <Box sx={{ width: "320px", height: "100vh" }}>
      <Stack sx={{ height: "100%" }}>
        {/*heder*/}
        <Box
          sx={{
            width: "100%",
            boxShadow: "0 0 2px rgb(0 ,0 ,0 ,0.25)",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background.default,
          }}
        >
          <Stack
            direction={"row"}
            sx={{ height: "100%", p: 2 }}
            alignItems={"center"}
            spacing={3}
          >
            <IconButton onClick={() => dispatch(UpdateSidebarType("CONTACT"))}>
              <CaretLeft />
            </IconButton>
            <Typography variant="subtitle2">Starred Messages</Typography>
          </Stack>
        </Box>


        {/*body*/}
        <Stack
          sx={{
            height: "100%",
            position: "relative",
            flexGrow: 1,
            overflowY: "scroll",
          }}
          p={2}
          spacing = {2}
        >
            <Messages menu={false}/>
        </Stack>
      </Stack>
    </Box>
  );
};

export default StarredMessages;
