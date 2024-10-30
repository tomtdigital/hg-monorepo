import { styled } from "@mui/material/styles";
import Select, { SelectProps } from "@mui/material/Select";
import theme from "@hannagrams/theme";
import { FC } from "react";

export const StyledSelectField: FC<SelectProps> = styled(Select)<SelectProps>(
  ({ theme }) => ({
    backgroundColor: theme.status.warning,
    display: "block",
  })
);
