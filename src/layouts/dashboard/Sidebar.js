import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { Nav_Buttons } from "../../data";
import logo from "../../assets/Images/logo.ico";
import { Gear } from "phosphor-react";
import { faker } from "@faker-js/faker";
import AntSwitch from "../../components/AntSwitch";
import { useState } from "react";
import useSettings from "../../hooks/useSettings";
import { Profile_Menu } from "../../data";
import { useNavigate } from "react-router-dom";
const getPath = (index) => {
  switch (index) {
    case 0:
      return "/app";
    case 1:
      return "/group";
    case 2:
      return "/call";
    case 3:
      return "/settings";
    default:
      return "/";
  }
};
const getMenuPath = (index) => {
  switch (index) {
    case 0:
      return "/profile";
    case 1:
      return "/settings";
    case 2:
      // TODO: logout
      return "/auth/login";
    default:
      break
  }
}
const Sidebar = () => {
  const theme = useTheme();
  const [selected, setSelected] = useState(0);
  const { onToggleMode, themeMode } = useSettings();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        height: "100vh",
        width: 100,
        padding: 2,
        backgroundColor: theme.palette.background.paper,
        boxShadow: "0 0 2px rgba(0, 0, 0, 0.25)",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Stack direction="column" alignItems={"center"} spacing={3}>
        <Box
          sx={{
            backgroundColor: theme.palette.primary.main,
            height: 64,
            width: 65,
            borderRadius: 1.5,
          }}
        >
          <img src={logo} alt="logo" />
        </Box>
        <Stack
          spacing={3}
          alignItems={"center"}
          width={"max-content"}
          direction="column"
        >
          {Nav_Buttons.map((item) =>
            item.index === selected ? (
              <Box
                key={item.index}
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: 1.5,
                  p: 1,
                }}
              >
                <IconButton sx={{ width: "max-content", color: "#fff" }}>
                  {item.icon}
                </IconButton>
              </Box>
            ) : (
              <IconButton
                key={item.index}
                sx={{
                  width: "max-content",
                  color:
                    themeMode === "light"
                      ? "#000"
                      : theme.palette.primary.contrastText,
                }}
                onClick={() => {
                  setSelected(item.index);
                  navigate(getPath(item.index));
                }}
              >
                {item.icon}
              </IconButton>
            )
          )}
          <Divider sx={{ width: "100%" }} />
          {selected === 3 ? (
            <Box
              sx={{
                backgroundColor: theme.palette.primary.main,
                borderRadius: 1.5,
                p: 1,
              }}
            >
              <IconButton sx={{ width: "max-content", color: "#fff" }}>
                <Gear />
              </IconButton>
            </Box>
          ) : (
            <IconButton onClick={() => {setSelected(3); navigate(getPath(3))}}>
              <Gear />
            </IconButton>
          )}
        </Stack>
      </Stack>
      <Stack spacing={4} alignItems={"center"} direction="column">
        <AntSwitch defaultChecked onChange={onToggleMode} />
        <Stack>
          <Avatar
            src={faker.image.avatar()}
            aria-label="more"
            id="long-button"
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
            style={{ cursor: "pointer" }}
          />
          <Menu
            id="long-menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            PaperProps={{
              style: {
                width: "20ch",
              },
            }}
          >
            {Profile_Menu.map((option,idx) => (
              <MenuItem
                key={option.title}
                selected={option === "Pyxis"}
                onClick={() => navigate(getMenuPath(idx))}
              >
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  sx={{ width: "100%" }}
                >
                  <Typography variant="subtitle">{option.title}</Typography>
                  {option.icon}
                </Stack>
              </MenuItem>
            ))}
          </Menu>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Sidebar;
