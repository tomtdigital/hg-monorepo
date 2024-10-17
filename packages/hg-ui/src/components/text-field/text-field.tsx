import React from "react";
import { styled } from "@mui/material/styles";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import theme from "@hannagrams/theme";
import { FC } from "react";

export const StyledTextField: FC<TextFieldProps> = styled(
  TextField
)<TextFieldProps>(({ theme }) => ({
  backgroundColor: theme.status.success,
}));
