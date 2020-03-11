const express = require("express");
const connectDB = require("./config/db");

const App = express();

// connect db
connectDB();

// Init middleware
App.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

App.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});

App.get("/", (req, res) =>
  res.json({ msg: "Welcome to the Contact Keeper API " })
);

App.use("/api/users", require("./routes/users"));
App.use("/api/auth", require("./routes/auth"));
App.use("/api/contacts", require("./routes/contacts"));
