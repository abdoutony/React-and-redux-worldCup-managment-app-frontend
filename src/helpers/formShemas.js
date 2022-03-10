import * as Yup from "yup";

export const PlayerSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("First Name is required")
    .max(20, "First Name is too Long - should be 20 chars maximum"),
  lastName: Yup.string()
    .required("Last Name is required")
    .max(20, "Last Name is too Long - should be 20 chars maximum"),
  age: Yup.number().required("Age is required").positive().integer(),
  shirtNumber: Yup.number().required("Shirt number is required"),
});
