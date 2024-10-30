import { getSelectLabelByValue } from "@/app/utils/get-select-label-by-value";

export function transformTestForm(data: TestFormValues): TestFormValues {
  const employmentStatus = getSelectLabelByValue(data.employmentStatus);
  if (employmentStatus !== undefined) {
    return { employmentStatus, name: data.name };
  } else {
    throw new Error("Unable to transform request data");
  }
}
