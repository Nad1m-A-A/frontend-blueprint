import { ENDPOINT } from "@data/config";
import { useLanguage } from "@contexts/LanguageContext";
import { useState } from "react";

export function useSubmitForm(setValidationErrors, setUserInputs) {
  const [isLoading, setIsLoading] = useState(false);
  const [fail, setFail] = useState(false);
  const [success, setSuccess] = useState(false);

  //@ get active language
  const { language } = useLanguage();

  //@ get active language
  const collectPayload = (userInputs) => {
    const payload = {
      ...userInputs,
      lang: language,
    };
    return payload;
  };

  const submitToAPI = async (payload) => {
    const response = await fetch(`${ENDPOINT}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  };

  const handleSubmit = async (
    e,
    userInputs,
    validateForm,
    validationMessages
  ) => {
    e.preventDefault();

    //@ reset errors
    setValidationErrors(
      Object.fromEntries(Object.keys(userInputs).map((key) => [key, []]))
    );
    //@ validate user inputs
    const { valid, errorMessages } = validateForm(
      userInputs,
      validationMessages
    );
    //@ assign validation errors, if any, to formState
    if (!valid) {
      setValidationErrors(errorMessages);
      return;
    }
    //@ activate loader
    setIsLoading(true);
    //@ collect payload
    const payload = collectPayload(userInputs);
    //@ attempt post
    try {
      await submitToAPI(payload);
      setUserInputs(
        Object.fromEntries(Object.keys(userInputs).map((key) => [key, ""]))
      );
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } catch (error) {
      setFail(true);
    } finally {
      setIsLoading(false);
    }
  };

  return { handleSubmit, isLoading, fail, success };
}
