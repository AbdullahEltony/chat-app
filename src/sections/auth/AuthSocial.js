import { Divider, IconButton, Stack } from '@mui/material'
import { GithubLogo, GoogleLogo, TwitterLogo } from 'phosphor-react'
import React from 'react'

const AuthSocial = () => {
  return (
    <Stack sx={{mt:5}}>
        <Divider sx={{my:2.5, typography:"overline", color:"text.disabled",
            '&::before, &::after':{
                borderTopStyle:"dashed"
            }
        }}>
            OR
        </Divider>
        <Stack direction={'row'} spacing={2} justifyContent={"center"}>
            <IconButton>
                <GoogleLogo color="#DF3E30"/>
            </IconButton>
            <IconButton>
                <GithubLogo/>
            </IconButton>
            <IconButton>
                <TwitterLogo color="#1C9BEF"/>
            </IconButton>
        </Stack>
    </Stack>
  )
}

export default AuthSocial