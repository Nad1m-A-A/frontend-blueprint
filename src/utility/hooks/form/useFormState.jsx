import { useState } from "react";
export function useFormState(initialInputValues, initialValidationErrors) {
  const [userInputs, setUserInputs] = useState(initialInputValues);
  const [validationErrors, setValidationErrors] = useState(
    initialValidationErrors
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValidationErrors({ ...validationErrors, [name]: [] });
    setUserInputs({ ...userInputs, [name]: value });
  };

  return {
    userInputs,
    setUserInputs,
    validationErrors,
    setValidationErrors,
    handleChange,
  };
}
