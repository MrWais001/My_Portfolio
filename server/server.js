const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Define a simple route
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  // For now, just log the data (later you can store it in a database)
  console.log(`Contact form submitted by ${name} (${email}): ${message}`);

  res.status(200).json({ msg: "Form submitted successfully" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
