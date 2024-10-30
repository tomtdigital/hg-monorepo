"use client";

import { StyledSelectField, StyledTextField } from "@hannagrams/ui";
import { Button, MenuItem } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { submitTestForm } from "../api/test/actions";
import { messages } from "../api/test/validation/messages";
import { employmentSelectOptions } from "../const/employment-select-options";

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
    setError,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: "all",
  });

  const name = watch("name");
  async function onSubmit(data: TestFormValues) {
    const response = await submitTestForm(data);
    if (response.success && response.data) {
      console.log(response.data);
    } else if (response.message) {
      setError("root", { message: response.message });
    }
  }

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data))}>
      <StyledTextField
        {...register("name", {
          required: { value: true, message: messages.name.required },
          minLength: { value: 4, message: messages.name.minLengthFour },
        })}
        onBlur={() => {
          trigger("employmentStatus");
        }}
      />
      {errors?.name?.message && <p>{errors.name.message}</p>}
      <Controller
        render={({ field }) => (
          <StyledSelectField {...field}>
            {employmentSelectOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </StyledSelectField>
        )}
        control={control}
        name="employmentStatus"
        rules={{
          required: {
            value: true,
            message: messages.employmentStatus.required,
          },
          validate: (value: string) => {
            if (name === "Elon Musk" && value !== "se")
              return messages.employmentStatus.validate;
            return true;
          },
        }}
      />
      {errors?.employmentStatus?.message && (
        <p>{errors.employmentStatus.message}</p>
      )}
      {errors?.root?.message && <p>{errors.root.message}</p>}
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
