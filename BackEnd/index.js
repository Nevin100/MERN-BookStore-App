// Packages:
import express from "express";
import { mongoDBURL, PORT } from "./config.js";
import mongoose from "mongoose";
import bookRoutes from "./Routes/BookRoutes.js";
import cors from "cors";

const app = express();

// Middleware for parsing request body
app.use(express.json());

//Cors:
app.use(cors());

//handling CORS Policy:
//Allowing Custom Headers
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "PUT", "POST", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

// Default Route
app.get("/", (req, res) => {
  console.log(req);
  return res.status(200).send("Welcome to the Book Store!");
});

app.use("/books", bookRoutes);

// Mongoose Connection:
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to the database");
    app.listen(PORT || 3000, () => {
      console.log(`App is listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error.message);
  });
