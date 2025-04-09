
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
require("dotenv").config();
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();
console.log("MongoDB connected");

// Load Routes
// app.use("/api/comments", require("./routes/commentRoutes"));
// app.use("/api/posts", require("./routes/postRoutes"));
// app.use("/api/todos", require("./routes/todoRoutes"));
// app.use("/api/users", require("./routes/userRoutes"));

// Use the routes
app.use("/api/users", userRoutes);  // Use the user routes


// Default Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// switch (process.env.NODE_ENV) {
//   case "development":
//     app.use(morgan("dev"));
//     break;
//   case "production":
//     app.use(compression());
//     break;
//   default: "development";
//     break;
// }

// Error Handler
// app.use((err, req, res, next) => {
//   console.log(err.stack);
//   res.status(500).send("Server Error");
//   next();
// });


// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
//  Run the Express Server 
console.log("Express server started on port 5000", PORT);