"use client";

import { StyledSelectField, StyledTextField } from "@hannagrams/ui";
import { Button, MenuItem } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

type TestFormValues = {
  name: string;
  employmentStatus: string;
};

const defaultValues = {
  name: "",
  employmentStatus: "se",
};

export default function TestForm() {
  const {
    handleSubmit,
    reset,
    watch,
    control,
    register,
    trigger,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: "all",
  });
  const onSubmit = (data: TestFormValues) => console.log(data);
  const name = watch("name");
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StyledTextField
        {...register("name", {
          minLength: { value: 4, message: "Sort your act out" },
        })}
        onBlur={() => {
          trigger("employmentStatus");
        }}
      />
      {errors?.name?.message && <p>{errors.name.message}</p>}
      <Controller
        render={({ field }) => (
          <StyledSelectField {...field}>
            <MenuItem value="e">Employed</MenuItem>
            <MenuItem value="u">Unemployed</MenuItem>
            <MenuItem value="se">Self Employed</MenuItem>
          </StyledSelectField>
        )}
        control={control}
        name="employmentStatus"
        rules={{
          validate: (value: string) => {
            if (name === "Elon Musk" && value !== "se")
              return "Elon Musk is self employed!";
            return true;
          },
        }}
      />
      {errors?.employmentStatus?.message && (
        <p>{errors.employmentStatus.message}</p>
      )}
      <Button
        type="button"
        sx={{ padding: "1em", backgroundColor: "purple" }}
        onClick={() => reset(defaultValues)}
      >
        Reset
      </Button>
      {/* NB: Don't use the SX prop due to performance impact */}
      <Button sx={{ padding: "1em", backgroundColor: "yellow" }} type="submit">
        Submit
      </Button>
    </form>
  );
}
