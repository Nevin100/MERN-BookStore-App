import React, { useEffect, useState } from "react";
import BackArrow from "../components/BackButton.jsx";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../components/Spinner.jsx";
import axios from "axios";
import { useSnackbar } from "notistack";

const EditBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setauthor] = useState("");
  const [PublishYear, setpublishyear] = useState("");
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setloading(true);
    axios
      .get(`http://localhost:3000/books/${id}`)
      .then((res) => {
        setauthor(res.data.author);
        setpublishyear(res.data.PublishYear);
        setTitle(res.data.title);
        setloading(false);
        enqueueSnackbar("Book Edit Succesfully!!", { variant: "success" });
      })
      .catch((error) => {
        setloading(false);
        enqueueSnackbar("Something went wrong", { variant: "error" });
        console.log(error);
      });
  }, []);

  const handleEditbook = () => {
    const data = {
      title,
      author,
      PublishYear,
    };
    setloading(true);
    axios
      .put(`http://localhost:3000/books/${id}`, data)
      .then(() => {
        setloading(false);
        navigate("/");
      })
      .catch((error) => {
        setloading(false);
        alert("Something Went wrong!!..Check Console!!");
        console.log(error);
      });
  };
  return (
    <>
      <div className="p-4">
        <BackArrow />
        {loading ? <Spinner /> : ""}
        <div className="flex flex-col border-2 text-neutral-200 border-sky-500/50 rounded-xl bg-neutral-50/10 w-[600px] p-4 mx-auto">
          <h1 className="text-3xl my-4 text-center py-2 px-2 font-semibold ">
            Edit Book
          </h1>
          <div className="my-4">
            <label className="text-2xl mr-4 mb-2 text-white">Title :</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-2 border-gray-500/80 px-4 py-2 w-full text-black rounded-md"
            />
          </div>
          <div className="my-4">
            <label className="text-2xl mr-4 text-white mb-2">Author :</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setauthor(e.target.value)}
              className="border-2 border-gray-500/80 px-4 text-black py-2 w-full rounded-md"
            />
          </div>
          <div className="my-4">
            <label className="text-2xl mr-4 pb-2 text-neutral-200 mb-2">
              Publish-Year :
            </label>
            <input
              type="text"
              value={PublishYear}
              onChange={(e) => setpublishyear(e.target.value)}
              className="border-2 border-gray-500/80 px-4 py-2 w-full text-black rounded-md"
            />
          </div>
          <button
            className="bg-sky-500/80 text-xl text-white my-8 py-[10px] w-full rounded-lg "
            onClick={handleEditbook}
          >
            Edit
          </button>
        </div>
      </div>
    </>
  );
};

export default EditBooks;
