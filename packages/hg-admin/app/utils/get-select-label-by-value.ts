import { employmentSelectOptions } from "../const/employment-select-options";

export const getSelectLabelByValue = (value: string): string | undefined => {
  return employmentSelectOptions.find((option) => option.value === value)
    ?.label;
};
