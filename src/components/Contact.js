import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import {
  Bell,
  CaretRight,
  Phone,
  Prohibit,
  Star,
  Trash,
  VideoCamera,
  X,
} from "phosphor-react";
import { useDispatch } from "react-redux";
import { ToggleSidebar, UpdateSidebarType } from "../store/slices/app";
import { faker } from "@faker-js/faker";
import AntSwitch from "../components/AntSwitch";
import { BlockDialog, DeleteDialog } from "./ui/CustomDialog";
const Contact = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [titleOpen, setTitleOpen] = React.useState("Block");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
            justifyContent={"space-between"}
            spacing={3}
          >
            <Typography variant="subtitle2">Contact Info</Typography>
            <IconButton onClick={() => dispatch(ToggleSidebar())}>
              <X />
            </IconButton>
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
          p={3}
          spacing={3}
        >
          <Stack alignItems={"center"} direction={"row"} spacing={2}>
            <Avatar
              src={faker.image.avatar()}
              alt={faker.name.firstName()}
              sx={{ height: 64, width: 65 }}
            />
            <Stack spacing={0.5}>
              <Typography fontWeight={600} variant="article">
                {faker.name.fullName()}
              </Typography>
              <Typography variant="body2">{"+91 123 456 789"}</Typography>
            </Stack>
          </Stack>
          <Stack
            alignItems={"center"}
            direction={"row"}
            spacing={2}
            justifyContent={"space-evenly"}
          >
            <Stack spacing={1} alignContent={"center"}>
              <IconButton>
                <Phone />
              </IconButton>
              <Typography variant="overline">Voice</Typography>
            </Stack>
            <Stack spacing={1} alignContent={"center"}>
              <IconButton>
                <VideoCamera />
              </IconButton>
              <Typography variant="overline">Video</Typography>
            </Stack>
          </Stack>
          <Divider />
          <Stack spacing={0.5}>
            <Typography variant="article">About</Typography>
            <Typography variant="body2">Hi there, Iam using</Typography>
          </Stack>
          <Divider />
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography variant="subtitle">Media, Link & Docs</Typography>
            <Button
              endIcon={<CaretRight />}
              onClick={() => dispatch(UpdateSidebarType("SHARED"))}
            >
              401
            </Button>
          </Stack>
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            {[1, 2, 3, 4].map((item) => (
              <Box>
                <img src={faker.image.food()} alt={faker.name.fullName()} />
              </Box>
            ))}
          </Stack>
          <Divider />
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <Star size={21} />
              <Typography variant="subtitle2">Starred Messages</Typography>
            </Stack>
            <IconButton onClick={() => dispatch(UpdateSidebarType("STARRED"))}>
              <CaretRight />
            </IconButton>
          </Stack>
          <Divider />
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <Bell size={21} />
              <Typography variant="subtitle2">Mute Notifications</Typography>
            </Stack>
            <AntSwitch />
          </Stack>
          <Divider />
          <Typography>1 group in common</Typography>
          <Stack alignItems={"center"} direction={"row"} spacing={2}>
            <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
            <Stack spacing={0.5}>
              <Typography variant="subtitle2">Coding Monk</Typography>
              <Typography variant="caption">
                Owl, Parrot , Rabbit, You
              </Typography>
            </Stack>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Button
              startIcon={<Prohibit />}
              variant="outlined"
              fullWidth
              onClick={handleClickOpen}
            >
              Block
            </Button>
            <Button
              startIcon={<Trash />}
              variant="outlined"
              fullWidth
              onClick={() => {
                handleClickOpen();
                setTitleOpen("Delete");
              }}
            >
              Delete
            </Button>
          </Stack>
        </Stack>
      </Stack>
      {titleOpen === "Delete" ? (
        <DeleteDialog
          onOpen={handleClickOpen}
          open={open}
          onClose={handleClose}
          title={titleOpen}
        />
      ) : (
        <BlockDialog
          onOpen={handleClickOpen}
          open={open}
          onClose={handleClose}
        />
      )}
    </Box>
  );
};

export default Contact;
