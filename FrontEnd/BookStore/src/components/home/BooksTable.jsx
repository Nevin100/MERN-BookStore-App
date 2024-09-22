import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const BooksTable = ({ books }) => {
  return (
    <div>
      <table className="w-full border-separate border-spacing-2 ">
        <thead>
          <tr>
            <th className="border border-slate-600  text-neutral-200 rounded-md">
              SNo.
            </th>
            <th className="border border-slate-600  text-neutral-200 rounded-md">
              Title
            </th>
            <th className="border border-slate-600  text-neutral-200 rounded-md max-width:hidden">
              Author
            </th>
            <th className="border border-slate-600  text-neutral-200 rounded-md max-width:hidden">
              Publish Year
            </th>
            <th className="border border-slate-600  text-neutral-200 rounded-md">
              Operations
            </th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => {
            return (
              <tr key={book._id} className="h-8">
                <td className="border  text-neutral-200 border-slate-400 rounded-md text-center">
                  {index + 1}
                </td>
                <td className="border  text-neutral-200  border-slate-400 rounded-md text-center">
                  {book.title}
                </td>
                <td className="border  text-neutral-200 border-slate-400 rounded-md text-center max-width:hidden">
                  {book.author}
                </td>
                <td className="border  text-neutral-200 border-slate-400 rounded-md text-center max-width:hidden">
                  {book.PublishYear}
                </td>
                <td className="border  text-neutral-200 border-slate-400 rounded-md text-center">
                  <div className="flex justify-center gap-x-4">
                    <Link to={`/books/details/${book._id}`}>
                      <BsInfoCircle className="text-2xl text-green-500" />
                    </Link>
                    <Link to={`/books/edit/${book._id}`}>
                      <AiOutlineEdit className="text-2xl text-yellow-500" />
                    </Link>
                    <Link to={`/books/delete/${book._id}`}>
                      <MdOutlineDelete className="text-2xl text-red-500" />
                    </Link>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BooksTable;
