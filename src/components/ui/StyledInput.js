import { FilledInput, styled } from "@mui/material";

export const StyledInput = styled(FilledInput)(({ theme }) => ({
  "& .MuiInputBase-input": {
    paddingTop: "12px",
    paddingBottom: "12px",
  },
}));
