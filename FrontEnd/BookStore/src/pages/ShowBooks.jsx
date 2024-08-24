import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackArrow from "../components/BackButton.jsx";
import Spinner from "../components/Spinner.jsx";

const ShowBooks = () => {
  const [book, setbook] = useState("");
  const [loading, setloading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setloading(true);
    axios
      .get(`http://localhost:3000/books/${id}`)
      .then((res) => {
        setbook(res.data);
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
        setloading(false);
      });
  }, []);

  return (
    <>
      <div className="p-4">
        <BackArrow />
        <h1 className="text-3xl my-4">Show Book :</h1>
        {loading ? (
          <Spinner />
        ) : (
          <div className="flex flex-col border-2 border-sky-300/90 rounded-xl w-fit p-4">
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-600">Id</span>
              <span>{book._id}</span>
            </div>

            <div className="my-4">
              <span className="text-xl mr-4 text-gray-600">Title : </span>
              <span>{book.title}</span>
            </div>

            <div className="my-4">
              <span className="text-xl mr-4 text-gray-600">Author : </span>
              <span>{book.author}</span>
            </div>

            <div className="my-4">
              <span className="text-xl mr-4 text-gray-600">
                Publish-Year :{" "}
              </span>
              <span>{book.PulishYear}</span>
            </div>

            <div className="my-4">
              <span className="text-xl mr-4 text-gray-600">Create Time</span>
              <span>{new Date(book.createdAt).toString()}</span>
            </div>

            <div className="my-4">
              <span className="text-xl mr-4 text-gray-600">
                Last Update Time
              </span>
              <span>{new Date(book.updatedAt).toString()}</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ShowBooks;
