import {
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { ArchiveBox, CircleDashed, MagnifyingGlass } from "phosphor-react";
import { Search, SearchIconWrapper, StyledInputBase } from "../../components";
import { ChatList } from "../../data";
import { ScrollBox } from "../../components/Scrollbar";
import { ChatItem } from "../../components/Chat/ChatItem";


const Chats = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "relative",
        width: "320px",
        backgroundColor:
          theme.palette.mode === "light"
            ? "#f8fAff"
            : theme.palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Stack p={3} spacing={2} sx={{ maxHeight: "100vh" }}>
        {/* title */}
        <Stack
          direction={"row"}
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Typography variant="h5"> Chats</Typography>
          <IconButton>
            <CircleDashed size={32} />
          </IconButton>
        </Stack>
        {/* search bar */}
        <Stack sx={{ width: "100%" }}>
          <Search>
            <SearchIconWrapper>
              <MagnifyingGlass color="#709CE6" />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search.." inputProps={{ "aria-label": "search" }} />
          </Search>
        </Stack>
        {/* archieved */}
        <Stack spacing={1}>
          <Stack direction={"row"} alignItems={"center"} spacing={1.5}>
            <ArchiveBox />
            <Button>Archieve</Button>
          </Stack>
          <Divider />
        </Stack>

        {/* chat list */}
        <ScrollBox spacing={2}>
          {/* chat list penned */}
          <Stack spacing={1}>
            <Typography variant="subtitle2">Penned</Typography>
            <Stack spacing={2.4}>
              {ChatList.filter((item) => item.pinned).map((item) => (
                <ChatItem key={item.id} {...item} />
              ))}
            </Stack>
          </Stack>
          {/* all chats */}
          <Stack spacing={2.4}>
            <Typography variant="subtitle2">All Chats</Typography>
            <Stack spacing={2.4}>
              {ChatList.map((item) => (
                <ChatItem key={item.id} {...item} />
              ))}
            </Stack>
          </Stack>
        </ScrollBox>
      </Stack>
    </Box>
  );
};

export default Chats;
