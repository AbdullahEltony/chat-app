import {
  Box,
  Divider,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { Search, SearchIconWrapper, StyledInputBase } from "../../components";
import { MagnifyingGlass, Plus } from "phosphor-react";
import { useTheme } from "@mui/material/styles";
import { ScrollBox } from "../../components/Scrollbar";
import { ChatList } from "../../data";
import { ChatItem } from "../../components/Chat/ChatItem";
import { CreateGroupDialog } from "../../sections/main/CreateGroup";
const Group = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleOpenDialog = () => {
    setOpen(true);
  }
  const handleCloseDialog = () => {
    setOpen(false);
  }
  return (
    <>
      <Stack direction={"row"} sx={{ width: "100%" }}>
        {/* left */}
        <Box
          sx={{
            height: "100vh",
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? "#f8fAff"
                : theme.palette.background.paper,
            width: 320,
            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Stack p={3} spacing={2} sx={{ maxHeight: "100vh" }}>
            <Stack>
              <Typography variant="h5">Groups</Typography>
            </Stack>
            <Stack sx={{ width: "100%" }}>
              <Search>
                <SearchIconWrapper>
                  <MagnifyingGlass color="#709CE6" />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search.."
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Stack>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography variant="subtitle2" component={Link}>
                {" "}
                Create New Group
              </Typography>
              <IconButton onClick={handleOpenDialog}>
                <Plus style={{ color: theme.palette.primary.main }} />
              </IconButton>
            </Stack>
            <Divider />
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
                <Typography variant="subtitle2">All Groups</Typography>
                <Stack spacing={2.4}>
                  {ChatList.map((item) => (
                    <ChatItem key={item.id} {...item} />
                  ))}
                </Stack>
              </Stack>
            </ScrollBox>
          </Stack>
        </Box>

        {/* right */}
        {/* // TODO => reuse the conversation component */}

      </Stack>
      {open && <CreateGroupDialog open={open} onClose={handleCloseDialog} />}
    </>
  );
};

export default Group;
