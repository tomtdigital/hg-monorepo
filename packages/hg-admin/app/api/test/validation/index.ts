import * as yup from "yup";
import { messages } from "./messages";

const { name, employmentStatus } = messages;

export const testFormSchema = yup.object().shape({
  name: yup.string().required(name.required).min(4, name.minLengthFour),
  employmentStatus: yup
    .string()
    .required(employmentStatus.required)
    .when("name", (name, schema) => {
      if (name[0] === "Elon Musk") {
        return schema.oneOf(
          ["Self Employed"],
          messages.employmentStatus.validate
        );
      }
      return schema.oneOf(["Employed", "Unemployed", "Self Employed"]);
    }),
});
