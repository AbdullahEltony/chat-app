import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import * as Yup from "yup";
import FormProvider from "../../components/hook-form/FormProvider";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Stack } from "@mui/material";
import RHFTextField from "../../components/hook-form/RHFTextField";
import RHFAutoComplete from "../../components/hook-form/RHFAutoComplete";

const MEMPERS = ["memper1", "memper2", "memper3"];

// TODO => create a reusable dialog component

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const CreateGroupForm = ({onClose}) => {
  const NewGroupShema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    members: Yup.array().min(2, "Must have at least 2 members"),
  });

  const defaultValues = {
    title: "",
    members: [],
  };
  const methods = useForm({
    resolver: yupResolver(NewGroupShema),
    defaultValues,
  });

  const {
    handleSubmit,
    reset,
    setError,
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  const onSubmit = async (data) => {
    try {
      // Api Call
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <RHFTextField name="title" label="Title" />
        <RHFAutoComplete
          name="members"
          label="Members"
          multiple
          freeSolo
          options={MEMPERS.map((option) => option)}
          ChipProps={{ size: "medium" }}
        />
        <Stack spacing={2} direction="row" justifyContent="flex-end" alignItems="center">
          <Button onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" variant="contained">
            Create
          </Button>
        </Stack>
      </Stack>
    </FormProvider>
  );
};

export function CreateGroupDialog({ onClose, open }) {
  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{ p: 4}}
        fullWidth
        maxWidth="xs"
      >
        <DialogTitle sx={{mb:2}}>Create New Group</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {/* From */}
            <CreateGroupForm onClose={onClose}/>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
