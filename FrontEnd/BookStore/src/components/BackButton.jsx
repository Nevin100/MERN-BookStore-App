import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const BackButton = ({ destination = "/" }) => {
  return (
    <>
      <div className="flex">
        <Link
          to={destination}
          className="bg-sky-400 text-white px-4 py-1 rounded-lg w-fit "
        ></Link>

        <BsArrowLeft className="text-2xl" />
      </div>
    </>
  );
};

export default BackButton;
