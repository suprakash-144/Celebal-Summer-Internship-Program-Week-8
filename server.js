const express = require("express");
const fileUpload = require("express-fileupload");
const weatherRoutes = require("./routes/weatherRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const errorHandler = require("./middlewares/errorHandler");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.port || 3000;

// const uploadRoutes = require("./routes/uploadRoutes");

// Middleware for handling form data and JSON

// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  fileUpload({
    createParentPath: true,
  })
);

// Routes
app.use("/upload", uploadRoutes);
app.use("/weather", weatherRoutes);

// Example route to trigger an error
app.get("/error", (req, res) => {
  throw new Error("This is a forced error.");
});

// Error handling middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port :${port}`);
});
