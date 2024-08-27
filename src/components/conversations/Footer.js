import { Box, Fab, IconButton, Stack, Tooltip } from "@mui/material";
import { LinkSimple, PaperPlaneTilt, Smiley } from "phosphor-react";
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { StyledInput } from "../ui/StyledInput";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { Actions } from "../../data";
const ChatInput = ({ setOpenPicker }) => {
  const [openActions,setOpenActions] = useState(false)
  return (
    <StyledInput
      fullWidth
      placeholder="write Your message.."
      disableUnderline={true}
      startAdornment={
        <Stack sx={{ width: "max-content" }}>
          <Stack sx={{ position: "relative" , display: openActions ? "inline-block" : "none" }}>
            {Actions.map((action) => (
              <Tooltip key={action.title} placement="right" title={action.title}>
                <Fab
                  sx={{
                    position: "absolute",
                    top: -action.y,
                    backgroundColor: action.color,
                  }}
                >
                  {action.icon}
                </Fab>
              </Tooltip>
            ))}
          </Stack>
          <IconButton onClick={() => setOpenActions((prev) => !prev)}>
            <LinkSimple />
          </IconButton>
        </Stack>
      }
      endAdornment={
        <IconButton onClick={() => setOpenPicker((prev) => !prev)}>
          <Smiley />
        </IconButton>
      }
    />
  );
};
const Footer = () => {
  const theme = useTheme();
  const [openPicker, setOpenPicker] = React.useState(false);
  return (
    <Box
      p={2}
      sx={{
        width: "100%",
        backgroundColor:
          theme.palette.mode === "light"
            ? "#F8FAFF"
            : theme.palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Stack direction={"row"} alignItems={"center"} spacing={3}>
        <Stack sx={{ width: "100%" }}>
          <Box
            sx={{
              display: openPicker ? "inline" : "none",
              zIndex: 1,
              position: "fixed",
              right: "100px",
              bottom: 81,
            }}
          >
            <Picker
              theme={theme.palette.mode}
              data={data}
              onEmojiSelect={console.log}
            />
          </Box>
          <ChatInput setOpenPicker={setOpenPicker} />
        </Stack>
        <Box
          sx={{
            width: 48,
            height: 48,
            backgroundColor: theme.palette.primary.main,
            borderRadius: 1.5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton>
            <PaperPlaneTilt color="#fff" />
          </IconButton>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
