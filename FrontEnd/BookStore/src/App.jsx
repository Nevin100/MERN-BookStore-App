import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateBooks from "./pages/CreateBooks.jsx";
import DeleteBook from "./pages/DeleteBook.jsx";
import EditBooks from "./pages/EditBooks.jsx";
import ShowBooks from "./pages/ShowBooks.jsx";
import Home from "./pages/Home.jsx";

const App = () => {
  return (
    <div className="absolute inset-0 -z-10 min-h-screen w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books/create" element={<CreateBooks />} />
          <Route path="/books/details/:id" element={<ShowBooks />} />
          <Route path="/books/edit/:id" element={<EditBooks />} />
          <Route path="/books/delete/:id" element={<DeleteBook />} />
        </Routes>
      </>
    </div>
  );
};

export default App;
