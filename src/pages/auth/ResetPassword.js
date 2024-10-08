import { Link, Stack, Typography } from "@mui/material";
import { CaretLeft } from "phosphor-react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import ResetPasswordForm from '../../sections/auth/ResetPasswordForm'
const ResetPassword = () => {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h3" paragraph>
          Forgot Your Password?
        </Typography>
        <Typography sx={{ color: "text.secondary" }}>
          Please enter your email address and we will send you a password reset
          link.
        </Typography>
        <ResetPasswordForm/>
        <Link
          component={RouterLink}
          to="/auth/login"
          color="inherit"
          variant="subtitle2"
          sx={{
            mt: 3,
            mx: "auto",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <CaretLeft/>
          Return to sign in
        </Link>
      </Stack>
    </>
  );
};

export default ResetPassword;
