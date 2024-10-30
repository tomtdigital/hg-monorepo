"use client";

import { StyledTextField, StyledSelectField } from "@hannagrams/ui";
import { Button, MenuItem, Select } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

type TestFormValues = {
  name: string;
  gender: string;
};

const defaultValues = {
  name: "Dave",
  gender: "m",
};

export default function TestForm() {
  const { handleSubmit, reset, watch, control, register } = useForm({
    defaultValues,
  });
  const onSubmit = (data: TestFormValues) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StyledTextField {...register("name")} />
      <Controller
        render={({ field }) => (
          <StyledSelectField {...field}>
            <MenuItem value="m">Male</MenuItem>
            <MenuItem value="f">Female</MenuItem>
          </StyledSelectField>
        )}
        control={control}
        name="gender"
      />
      <Button
        type="button"
        sx={{ padding: "1em", backgroundColor: "purple" }}
        onClick={() => reset(defaultValues)}
      >
        Reset
      </Button>
      <Button sx={{ padding: "1em", backgroundColor: "yellow" }} type="submit">
        Submit
      </Button>
    </form>
  );
}
