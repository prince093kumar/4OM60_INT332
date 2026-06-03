import express from "express";
import mongoose from "mongoose";

const app = express();

const PORT = 3000;
const db = process.env.DB_URL;

app.use(express.json());

// Student Schema
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

// Student Model
const Student = mongoose.model("Student", studentSchema);

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.log("MongoDB Connection Failed:", error);
    process.exit(1);
  }
};

connectDB();

// Home Route
app.get("/", (req, res) => {
  res.send("Node + MongoDB + Docker Compose Working");
});

// Insert Student
app.get("/add", async (req, res) => {
  try {
    const student = new Student({
      name: "Prince",
      age: 22,
    });

    await student.save();

    res.send("Student Added Successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Get All Students
app.get("/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});