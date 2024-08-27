import { Avatar, Box, Divider, IconButton, Stack, Typography } from '@mui/material'
import { CaretDown, MagnifyingGlass, Phone, VideoCamera } from 'phosphor-react'
import React from 'react'
import {faker} from '@faker-js/faker'
import {useTheme} from '@mui/material/styles'
import { StyledBadge } from '../ui/StyledBadge'
import { ToggleSidebar } from '../../store/slices/app'
import { useDispatch } from 'react-redux'
const Header = () => {
    const theme = useTheme()
    const dispatch = useDispatch()
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
        <Stack
          width={"100%"}
          height={"100%"}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Stack direction={"row"} spacing={2}  sx={{cursor:"pointer"}}
            onClick={()=> dispatch(ToggleSidebar())}
          >
            <Box>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar alt="Remy Sharp" src={faker.image.avatar()} />
              </StyledBadge>
            </Box>
            <Stack>
              <Typography variant={"subtitle2"}>John Doe</Typography>
              <Typography variant={"caption"}>Online</Typography>
            </Stack>
          </Stack>
          <Stack direction={"row"} spacing={3}>
            <IconButton>
              <VideoCamera />
            </IconButton>
            <IconButton>
              <Phone />
            </IconButton>
            <IconButton>
              <MagnifyingGlass />
            </IconButton>
            <Divider orientation="vertical" flexItem />
            <IconButton>
              <CaretDown />
            </IconButton>
          </Stack>
        </Stack>
      </Box>
  )
}

export default Header