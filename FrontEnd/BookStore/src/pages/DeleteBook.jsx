import { useState } from "react";
import React from "react";
import BackArrow from "../components/BackButton.jsx";
import Spinner from "../components/Spinner.jsx";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const DeleteBook = () => {
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setloading(true);
    axios
      .delete(`http://localhost:3000/books/${id}`)
      .then(() => {
        setloading(false);
        enqueueSnackbar("Book Deleted Successfully!!", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setloading(false);
        enqueueSnackbar("Something went wrong!!", { variant: "error" });
        console.log(error);
      });
  };
  return (
    <>
      <div className="p-4 text-white">
        <BackArrow />
        <h1 className="text-3xl text-white my-4">Delete Book</h1>
        {loading ? <Spinner /> : " "}
        <div className="flex flex-col items-center border-2 border-sky-500 rounded-xl w-[600px] p-8 mx-auto">
          <h3 className="text-2xl">
            Are youn sure you want to delete this book??
          </h3>
          <button
            className="p-4 bg-red-600 text-white m-8 w-full"
            onClick={handleDeleteBook}
          >
            Yes , Delete it
          </button>
        </div>
      </div>
    </>
  );
};

export default DeleteBook;
