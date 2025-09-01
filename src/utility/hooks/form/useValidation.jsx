//@ Handles Yup validation
import * as yup from "yup";

export function validateForm(formData, validationMessages) {
  const { name, phone, service } = validationMessages;

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required(name.required)
      .matches(/^[A-Za-z\u0621-\u064A\s]+$/, name.invalid)
      .min(3, name.min)
      .matches(/^(?!([\u0621-\u064Aa-zA-Z])\1+$).+$/, name.repeated),
    phone: yup.string().required(phone.required).min(9, phone.min),
    service: yup.string().required(service.required),
  });
  try {
    formSchema.validateSync(formData, { abortEarly: false });
    return { valid: true, errors: {} };
  } catch (error) {
    const newErrors = { name: [], phone: [], service: [] };
    error.inner.forEach((err) => {
      if (err.path === "name") newErrors.name.push(err.message);
      else if (err.path === "phone") newErrors.phone.push(err.message);
      else if (err.path === "service") newErrors.service.push(err.message);
    });
    return { valid: false, errorMessages: newErrors };
  }
}
