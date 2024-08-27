import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Grid, Stack, Typography } from '@mui/material';
import { SHORTCUT_LIST } from '../../../data';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ShortCuts({open,onClose}) {
  

  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        fullWidth
        maxWidth="md"
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Keyboard Shortcuts</DialogTitle>
        <DialogContent sx={{mt:4}}>
            <Grid container spacing={3}>
                {SHORTCUT_LIST.map(({key, title, combination})=>(
                    <Grid item xs={6} key={key}>
                        <Stack sx={{width:'100%'}} justifyContent={"space-between"} direction={"row"} spacing={3} alignItems={'center'}>
                            <Typography variant='caption' sx={{fontSize:14}}>{title}</Typography>
                            <Stack spacing={2} direction={"row"}>
                                {combination.map(el => (
                                    <Button disabled variant="contained" sx={{color:'#212121'}}>{el}</Button>
                                ))}
                            </Stack>
                        </Stack>
                    </Grid>
                ))}
            </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={onClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}