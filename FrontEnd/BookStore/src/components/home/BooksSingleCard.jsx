import React, { useState } from "react"; // Import useState
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import BookModal from "./BookModal.jsx";

const BooksSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false); // Add state for modal visibility

  return (
    <div
      className="rounded-lg text-black border-gray-500 border-2 px-4 py-2 m-4 relative hover:shadow-xl"
      key={book._id}
    >
      <h2 className="absolute text-black top-1 right-2 px-4 py-1 bg-red-400 rounded-lg">
        {book.PublishYear}
      </h2>
      <h4 className="my-2 text-white">{book._id}</h4>
      <div className="flex justify-start items-center gap-x-2">
        <PiBookOpenTextLight className="text-red-400 text-2xl" />
        <h2 className="my-1 text-white">{book.title}</h2>
      </div>
      <div className="flex justify-start items-center gap-x-2">
        <BiUserCircle className="text-red-400 text-2xl" />
        <h2 className="my-1 text-white">{book.author}</h2>
      </div>
      <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
        <BiShow
          className="text-3xl text-blue-400 hover:text-black cursor-pointer"
          onClick={() => setShowModal(true)}
        />
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className="text-2xl text-green-500 hover:text-black" />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className="text-2xl text-yellow-400 hover:text-black" />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className="text-2xl text-red-500 hover:text-black" />
        </Link>
      </div>
      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default BooksSingleCard;
