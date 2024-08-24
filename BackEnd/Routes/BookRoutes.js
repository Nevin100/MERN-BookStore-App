import express from "express";
import { Book } from "../models/BookModel.js";

const router = express.Router();

// Post Books
router.post("/", async (req, res) => {
  try {
    const { title, author, PublishYear } = req.body;
    if (!title || !author || !PublishYear) {
      return res
        .status(400)
        .send({ message: "Please provide title, author, and PublishYear" });
    }
    const book = await Book.create({ title, author, PublishYear });
    return res.status(201).send(book); // Return 201 on successful creation
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: error.message }); // Handle error properly
  }
});

// Route Get all Books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find({});
    return res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Route for Get One Book from database by id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    return res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Route for Update a Book:
router.put("/:id", async (req, res) => {
  try {
    const { title, author, PublishYear } = req.body;
    if (!title || !author || !PublishYear) {
      return res.status(400).send({
        message: "Send all required fields: title, author, PublishYear",
      });
    }
    const { id } = req.params;
    const result = await Book.findByIdAndUpdate(id, req.body);
    if (!result) {
      return res.status(404).send({ message: "Book Not Found!!" });
    } else {
      return res.status(200).send({ message: "Book Updated Successfully" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//Route to delete a book:
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Book.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: "Book not found" });
    } else {
      return res.status(200).send({ message: "Book deleted successfully" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;
