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
        <h1 className="text-3xl text-neutral-200 my-4">Show Book :</h1>
        {loading ? (
          <Spinner />
        ) : (
          <div className="flex flex-col border-2 border-sky-300/90 rounded-xl w-fit p-4">
            <div className="my-4">
              <span className="text-xl mr-4  text-neutral-200 ">Id</span>
              <span className=" text-neutral-200">{book._id}</span>
            </div>

            <div className="my-4">
              <span className="text-xl mr-4  text-neutral-200">Title : </span>
              <span className=" text-neutral-200">{book.title}</span>
            </div>

            <div className="my-4">
              <span className="text-xl mr-4  text-neutral-200">Author : </span>
              <span className=" text-neutral-200">{book.author}</span>
            </div>

            <div className="my-4">
              <span className="text-xl mr-4  text-neutral-200">
                Publish-Year :
              </span>
              <span className=" text-neutral-200">{book.PulishYear}</span>
            </div>

            <div className="my-4">
              <span className="text-xl mr-4 text-neutral-200">Create Time</span>
              <span className=" text-neutral-200">
                {new Date(book.createdAt).toString()}
              </span>
            </div>

            <div className="my-4">
              <span className="text-xl mr-4 text-neutral-200">
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
