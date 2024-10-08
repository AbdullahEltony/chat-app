import { faker } from "@faker-js/faker";
import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { StyledBadge } from "./ui/StyledBadge";
import {
  ArrowDownLeft,
  ArrowUpRight,
  Phone,
  VideoCamera,
} from "phosphor-react";

const CallLogElement = ({ online, incoming, missed }) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          borderRadius: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? "#fff"
              : theme.palette.background.paper,
        }}
        p={2}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            {online ? (
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar alt="Remy Sharp" src={faker.image.avatar()} />
              </StyledBadge>
            ) : (
              <Avatar alt="Remy Sharp" src={faker.image.avatar()} />
            )}
            <Stack spacing={0.5}>
              <Typography variant="subtitle2">
                {faker.name.fullName()}
              </Typography>
              <Stack direction={"row"} spacing={1} alignItems={"center"}>
                {incoming ? (
                  <ArrowDownLeft color={missed ? "red" : "green"} />
                ) : (
                  <ArrowUpRight color={missed ? "red" : "green"} />
                )}
                <Typography variant="caption">Yesterday 21:24</Typography>
              </Stack>
            </Stack>
          </Stack>
          <IconButton>
            <Phone size={24} color={missed ? "red" : "green"} />
          </IconButton>
        </Stack>
      </Box>
    </>
  );
};
const CallElement = ({online}) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          borderRadius: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? "#fff"
              : theme.palette.background.paper,
        }}
        p={2}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
          {online ? (
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar alt="Remy Sharp" src={faker.image.avatar()} />
              </StyledBadge>
            ) : (
              <Avatar alt="Remy Sharp" src={faker.image.avatar()} />
            )}
            <Stack spacing={0.5}>
              <Typography variant="subtitle2">
                {faker.name.fullName()}
              </Typography>
            </Stack>
          </Stack>
          <Stack spacing={2} direction={"row"} >
            <IconButton>
              <Phone size={24} color="green" />
            </IconButton>
            <IconButton>
              <VideoCamera color="green" />
            </IconButton>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export { CallLogElement, CallElement };
