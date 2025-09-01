import { BiError } from "react-icons/bi";

function Error({ formFail }) {
  return (
    <div className="flex items-center justify-center gap-3 text-primary-100 px-4 py-3 relative">
      <div className="absolute inset-0 bg-red-500 animate-pulse"></div>
      <div className="z-10 flex gap-1">
        <BiError className="text-2xl text-primary-100" />
        <p className="font-medium">{formFail}</p>
      </div>
    </div>
  );
}

export default Error;
