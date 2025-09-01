import React from "react";
import { useFormState } from "@utility/hooks/form/useFormState";
import { validateForm } from "@utility/hooks/form/useValidation";
import { useSubmitForm } from "@utility/hooks/form/useSubmitForm";
import Input from "@components/form/Input";
import Button from "./Button";
import FormSuccess from "./FormSuccess";
import FormFail from "./FormFail";
import { withViewObserver } from "react-load-on-view";
import { loadData } from "@utility/hooks/useDataLoader";

const Form = ({ styles, inputsStyle, buttonStyle, services }) => {
  const { data: formContent } = loadData("form.js", "form");
  //@ extract from content
  const {
    buttonText,
    inputs = {},
    validationMessages,
    failMessage,
    successMessage,
  } = formContent || {};
  const { visible = {} } = inputs;

  //@ collect select options
  const selectOptions = services?.map((service) => {
    return {
      value: service.value,
      label: service.label,
    };
  });

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
      service: [],
    }
  );

  //@ post data or set errors
  const { handleSubmit, isLoading, fail, success } = useSubmitForm(
    setValidationErrors,
    setUserInputs
  );

  return (
    <div className="space-y-4 w-full" id="contact-section">
      <form
        className="space-y-1"
        onSubmit={(e) =>
          handleSubmit(e, userInputs, validateForm, validationMessages)
        }
      >
        <div className={`flex flex-col gap-1 ${styles}`}>
          <Input
            className={inputsStyle}
            type="text"
            name={visible.name?.name || ""}
            value={userInputs.name}
            onChange={handleChange}
            error={validationErrors.name[0]}
            placeholder={visible.name?.placeholder || ""}
            autoFocus
          />

          <Input
            className={inputsStyle}
            type="number"
            name={visible.phone?.name || ""}
            value={userInputs.phone}
            onChange={handleChange}
            error={validationErrors.phone[0]}
            placeholder={visible.phone?.placeholder || ""}
          />

          <Input
            className={inputsStyle}
            name={visible.service?.name || ""}
            value={userInputs.service}
            onChange={handleChange}
            error={validationErrors.service[0]}
            options={selectOptions}
            placeholder={visible.service?.placeholder || ""}
          />
        </div>
        <div className="space-y-2">
          <Button
            isLoading={isLoading}
            buttonText={buttonText}
            styles={`${buttonStyle}`}
          />
          {fail && !success && <FormFail failMessage={failMessage} />}
          {success && !fail && <FormSuccess successMessage={successMessage} />}
        </div>
      </form>
    </div>
  );
};

export default React.memo(
  withViewObserver(Form, {
    animate: true,
  })
);
