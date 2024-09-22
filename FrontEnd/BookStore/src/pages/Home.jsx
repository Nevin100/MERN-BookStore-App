import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner.jsx";
import { Link } from "react-router-dom";

import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import BooksTable from "../components/home/BooksTable.jsx";
import BooksCard from "../components/home/BooksCard.jsx";

const Home = () => {
  const [books, setbooks] = useState([]);
  const [loading, setloading] = useState(false);
  const [showType, setShowTye] = useState("table");

  useEffect(() => {
    setloading(true);
    axios
      .get("http://localhost:3000/books")
      .then((res) => {
        setbooks(res.data.data);
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="p-4">
        <div className="flex justify-center items-center gap-x-4">
          <button
            className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
            onClick={() => setShowTye("table")}
          >
            Table
          </button>
          <button
            className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
            onClick={() => setShowTye("card")}
          >
            Card
          </button>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="text-3xl text-neutral-200 my-8">Books List</h2>
          <Link to="/books/create">
            <MdOutlineAddBox className="text-sky-700 text-4xl" />
          </Link>
        </div>
        {loading ? (
          <Spinner />
        ) : showType === "table" ? (
          <BooksTable books={books} />
        ) : (
          <BooksCard books={books} />
        )}
      </div>
    </>
  );
};

export default Home;
