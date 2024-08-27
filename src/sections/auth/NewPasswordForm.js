import React from "react";
import FormProvider from "../../components/hook-form/FormProvider";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Stack } from "@mui/system";
import { Alert, Button } from "@mui/material";
import { RHFTextField } from "../../components/hook-form";
import { Eye, EyeSlash } from "phosphor-react";

const NewPasswordForm = () => {
  const newPasswordShema = yup.object().shape({
    password: yup.string().min(6, "password must be at least 6 characters"),
    confirmPassword: yup
      .string()
      .min(6, "password must be at least 6 characters")
      .oneOf([yup.ref("password")], "Passwords must match"),
  });

  const defaultValues = {
    password: "",
    confirmPassword:""
  };
  const methods = useForm({
    resolver: yupResolver(newPasswordShema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;
  const onSubmit = async (data) => {
    try {
      // submit data to backend
    } catch (error) {
      console.log(error);
      reset();
      setError("afterSubmit", {
        ...error,
        message: error.message || error,
      });
    }
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {!!errors.afterSubmit && (
          <Alert severity="error">{errors.afterSubmit.message}</Alert>
        )}
        <RHFTextField name="password" label="Password" type="password" />
        <RHFTextField name="confirmPassword" label="Confirm Password" type="password" />
        <Button
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          sx={{
            bgcolor: "text.primary",
            color: (theme) =>
              theme.palette.mode === "light" ? "common.white" : "grey.800",
            "&:hover": {
              bgcolor: "text.primary",
              color: (theme) =>
                theme.palette.mode === "light" ? "common.white" : "grey.800",
            },
          }}
        >
          Submit
        </Button>
      </Stack>
    </FormProvider>
  );
};

export default NewPasswordForm;
