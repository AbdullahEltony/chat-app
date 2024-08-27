import { Link, Stack, Typography } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import AuthSocial from "../../sections/auth/AuthSocial";
import RegisterForm from "../../sections/auth/RegisterForm";
const Login = () => {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h4">Get Started With Tawk</Typography>
        <Stack direction={"row"} spacing={0.5}>
          <Typography variant="body2">Already have an account?</Typography>
          <Link to="/auth/register" component={RouterLink} variant="subtitle2">
            Sign in
          </Link>
        </Stack>
        {/* Register form*/}
        <RegisterForm />
        <Typography variant="body2" sx={{textAlign:'center'}}>
          {" By signing up, you agree to our  "}
          <Link underline="always" color={"text.primary"}>
            Terms of Service
          </Link>
          {" and "}
          <Link underline="always" color={"text.primary"}>
            Privacy Policy
          </Link>
        </Typography>
      </Stack>

      <AuthSocial />
    </>
  );
};

export default Login;
