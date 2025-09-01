import { BiError } from "react-icons/bi";

function FormFail({ failMessage }) {
  return (
    <div className="visible_wrapper rounded-sm animate-pulse flex items-center justify-center gap-3 bg-red-600 text-primary-100 px-4 py-3 relative">
      <BiError className="text-2xl text-primary-100" />
      <p className="font-medium">{failMessage}</p>
    </div>
  );
}

export default FormFail;
