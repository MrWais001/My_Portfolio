const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose"); // Import Mongoose

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas
mongoose
  .connect(
    "mongodb+srv://engrabdulridwan:WYt5m7bo0u6ZRSlN@ola-tech.lf27a.mongodb.net/Ola-Tech?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Define a Contact Schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact = mongoose.model("Contact", contactSchema);

// Define a simple route
app.get("/", (req, res) => {
  res.send("Server is running");
});

// Handle contact form submission
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  // Create a new contact entry
  const newContact = new Contact({ name, email, message });

  // Save to MongoDB
  newContact
    .save()
    .then(() => {
      console.log(`Contact form submitted by ${name} (${email}): ${message}`);
      res.status(200).json({ msg: "Form submitted successfully" });
    })
    .catch((err) => {
      console.error("Error saving contact:", err);
      res.status(500).json({ msg: "Error saving contact" });
    });
});

const portfolioItems = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description: "A personal website to showcase my projects and skills.",
    image: "portfolio1.jpg",
    url: "https://github.com/MrWais001/My_Portfolio",
  },
  {
    id: 2,
    title: "Task Management CLI",
    description:
      "A command-line interface to manage tasks with a JSON file backend.",
    image: "portfolio2.jpg",
    url: "https://github.com/MrWais001/Task_CLI",
  },

  {
    id: 3,
    title: "My-cardiology-app",
    description:
      "A website to ease communication between patient and cardiology.",
    image: "portfolio2.jpg",
    url: "https://github.com/MrWais001/My-cardiology-app.git",
  },
];

// Portfolio API endpoint
app.get("/api/portfolio", (req, res) => {
  res.json(portfolioItems);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
