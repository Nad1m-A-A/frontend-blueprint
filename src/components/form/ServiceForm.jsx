import { EXTERNAL_TO_INTERNAL_KEYS, CAMPAIGNS_LIST } from "@data/config";
import { useEffect } from "react";
import { useFormState } from "@utility/hooks/form/useFormState";
import { validateForm } from "@utility/hooks/form/useValidation";
import { useSubmitForm } from "@utility/hooks/form/useSubmitForm";
import { loadData } from "@utility/hooks/useDataLoader";
import Input from "@components/form/Input";
import Button from "./Button";
import FormSuccess from "./FormSuccess";
import FormFail from "./FormFail";

const ServiceForm = ({ styles }) => {
  //@ get form content
  const { data: formContent } = loadData("form.js", "form");
  const {
    buttonText,
    inputs = {},
    validationMessages,
    failMessage,
    successMessage,
  } = formContent || {};
  const { visible = {} } = inputs;

  //@ set form state
  const {
    userInputs,
    setUserInputs,
    validationErrors,
    setValidationErrors,
    handleChange,
  } = useFormState(
    {
      name: "",
      phone: "",
      service: "",
    },
    {
      name: [],
      phone: [],
    }
  );

  //@ get service name from url
  const urlKey = location.pathname.split("/")[2];
  const activeService = CAMPAIGNS_LIST.find(
    (c) => c.toLowerCase() === EXTERNAL_TO_INTERNAL_KEYS[urlKey].toLowerCase()
  );

  useEffect(() => {
    setUserInputs((prev) => ({
      ...prev,
      service: activeService,
    }));
  }, [CAMPAIGNS_LIST]);

  //@ post data or set errors
  const { handleSubmit, isLoading, fail, success } = useSubmitForm(
    setValidationErrors,
    setUserInputs
  );

  return (
    <div
      className="space-y-4 w-full max-w-[30rem] mx-auto app_container"
      id="contact-section"
    >
      <form
        className="space-y-1"
        onSubmit={(e) =>
          handleSubmit(e, userInputs, validateForm, validationMessages)
        }
      >
        <div className={`flex flex-col gap-1 ${styles}`}>
          <Input
            className="text-center text-primary-500 placeholder:text-primary-300"
            type="text"
            name={visible.name?.name || ""}
            value={userInputs.name}
            onChange={handleChange}
            error={validationErrors.name[0]}
            placeholder={visible.name?.placeholder || ""}
          />

          <Input
            className="bg-white text-center text-primary-500 placeholder:text-primary-300"
            type="number"
            name={visible.phone?.name || ""}
            value={userInputs.phone}
            onChange={handleChange}
            error={validationErrors.phone[0]}
            placeholder={visible.phone?.placeholder || ""}
          />

          <Input type="text" name="service" className="hidden" />
        </div>
        <Button
          isLoading={isLoading}
          buttonText={buttonText}
          styles="dark_button"
        />
        {fail && <FormFail failMessage={failMessage} />}
        {success && <FormSuccess successMessage={successMessage} />}
      </form>
    </div>
  );
};

export default ServiceForm;
