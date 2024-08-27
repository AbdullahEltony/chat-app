import React, { useCallback } from "react";
import FormProvider from "../../components/hook-form/FormProvider";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Stack } from "@mui/system";
import { Alert, Button} from "@mui/material";
import { RHFTextField } from "../../components/hook-form";
const ProfileForm = () => {
  const profileSchema = yup.object().shape({
    name: yup.string().required("name is required"),
    about: yup.string().required("About is required"),
    avatarUrl: yup.string().required("Avatar is required").nullable(true),
  });

  const defaultValues = {
    name: "",
    about: "",
    avatarUrl: "",
  };
  const methods = useForm({
    resolver: yupResolver(profileSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    control,
    setError,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  const values = watch();
  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      if (file) {
        setValue("avatarUrl", newFile, { shouldValidate: true });
      }
    },
    [setValue]
  );
  const onSubmit = async (data) => {
    try {
      // submit data to backend
      console.log(data);
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
        <RHFTextField name="name" label="Name" helperText={"This name is visible to your contacts"} />
        <RHFTextField name="about" label="About"  multiline rows={3} maxRows={5}/>
      </Stack>
      <Stack  direction={"row"} justifyContent={"flex-end"} sx={{mt:3}}>
        <Button color="primary" size="large" type="submit" variant="outlined">
            Save
        </Button>
      </Stack>
    </FormProvider>
  );
};

export default ProfileForm;
