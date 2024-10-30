"use server";

import { transformTestForm } from "../transform";
import { testFormSchema } from "../validation";

export async function submitTestForm(data: TestFormValues): Promise<{
  success: boolean;
  data?: { name: string; employmentStatus: string };
  message?: string;
}> {
  try {
    const transformedData = transformTestForm(data);
    const validatedData = await testFormSchema.validate(transformedData, {
      abortEarly: false,
    });
    console.log({ validatedData });
    return { success: true, data: validatedData };
  } catch (validationErrors) {
    console.error({ validationErrors });
    return {
      success: false,
      message: "There was an error processing your request, please try again",
    };
  }
}
