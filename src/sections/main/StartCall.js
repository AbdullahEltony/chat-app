import {
  Dialog,
  DialogContent,
  DialogTitle,
  Slide,
  Stack,
} from "@mui/material";
import React from "react";
import { Search, SearchIconWrapper, StyledInputBase } from "../../components";
import { MagnifyingGlass } from "phosphor-react";
import { CallElement } from "../../components/CallLogElement";
import { MempersList } from "../../data";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const StartCall = (open, onClose) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={onClose}
      aria-describedby="alert-dialog-slide-description"
      sx={{ p: 4 }}
      fullWidth
      maxWidth="xs"
    >
      <DialogTitle sx={{ mb: 2 }}>Start Call</DialogTitle>
      <DialogContent>
        <Stack spacing={3}>
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
          {/* call list*/}
          {MempersList.map((item) => (
            <CallElement key={item.id} {...item} />
          ))}
        </Stack>
        
      </DialogContent>
    </Dialog>
  );
};

export default StartCall;
