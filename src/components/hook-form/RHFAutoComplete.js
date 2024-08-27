import PropTypes from "prop-types";

import { useFormContext, Controller, set } from "react-hook-form";
// @mui
import { Autocomplete, TextField } from "@mui/material";

RHFAutoComplete.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    helperText: PropTypes.node
}
export default function RHFAutoComplete({ name, helperText,label, ...other }) {
  const { control , setValue } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Autocomplete
          {...field}
          fullWidth
          value={
            typeof field.value === "number" && field.value === 0 ? "" : field.value
          }
          onChange={(event,newValue) => setValue(name,newValue,{shouldDirty:true})}
          error={!!error}
          helperText={error ? error.message : helperText}
          {...other}
          renderInput = {(params)=> (
            <TextField id="outlined-basic" label={label} error={!!error} variant="outlined" helperText={error ? error.message : helperText} {...params}/>
          ) }
        />
      )}
    />
  );
}
