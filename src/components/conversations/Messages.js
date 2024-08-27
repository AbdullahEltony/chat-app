import { Box, Stack } from '@mui/material'
import React from 'react'
import { Chat_History } from '../../data'
import { DocMsg, LinkMsg, MediaMsg, ReplyMsg, TextMsg, TimeLine } from './MessageTypes'
const Messages = ({menu}) => {
  return (
    <Box p={2}>
        <Stack spacing={3} >
            {Chat_History.map((el) => {
                switch (el.type) {
                    case 'divider':
                        // timeline
                        return (<TimeLine text={el.text}/>)

                        // msg
                    case 'msg': 
                        switch (el.subtype) {
                            case 'img':
                                return (<MediaMsg el={el} menu={menu}/>)
                            case 'doc':
                                return <DocMsg el={el} menu={menu}/>

                            case 'link':
                               return (<LinkMsg el={el} menu={menu}/>)
                            
                            case 'reply':
                                return <ReplyMsg el={el} menu={menu}/>
                        
                            default:
                                return (<TextMsg el={el} menu={menu}/>)
                        }
                
                        // break;
                    default:
                        return <></>
                }
            
            // return <></>
            })}
        </Stack>
    </Box>
  )
}

export default Messages