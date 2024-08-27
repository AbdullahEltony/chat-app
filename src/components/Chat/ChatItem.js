import { Avatar, Badge, Box, Stack, Typography } from "@mui/material";
import { StyledBadge } from "../ui/StyledBadge";
import {useTheme} from "@mui/material/styles";
export const ChatItem = (props) => {
    const theme = useTheme();
    return (
      <Box
        p={2}
        sx={{
          width: "100%",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#fff"
              : theme.palette.background.default,
          borderRadius: 1,
        }}
      >
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Stack direction={"row"} spacing={2}>
            {props.online ? (
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar alt="Remy Sharp" src={props.img} />
              </StyledBadge>
            ) : (
              <Avatar alt="Remy Sharp" src={props.img} />
            )}
  
            <Stack spacing={0.5}>
              <Typography variant={"subtitle2"}>{props.name}</Typography>
              <Typography variant={"caption"}>{props.msg}</Typography>
            </Stack>
          </Stack>
          <Stack spacing={2} alignItems={"center"}>
            <Typography variant={"caption"}>{props.time}</Typography>
            <Badge color="primary" badgeContent={props.unread}></Badge>
          </Stack>
        </Stack>
      </Box>
    );
  };