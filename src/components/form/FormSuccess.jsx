function FormSuccess({ successMessage }) {
  return (
    <div
      id="confirm_form_submission"
      className="visible_wrapper confirm_form_submission bg-green-600 text-center text-primary-100 p-3 rounded-sm"
    >
      {successMessage}
    </div>
  );
}

export default FormSuccess;
