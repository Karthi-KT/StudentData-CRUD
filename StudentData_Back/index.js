const express = require("express");
const app = express();
const port = 3002;
const fs = require("fs");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// GET route to fetch all students
app.get("/students", (req, res) => {
  fs.readFile(path.join(__dirname, "studentData.json"), "utf8", (err, data) => {
    if (err) {
      console.error("Error reading JSON file:", err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    const students = JSON.parse(data);
    res.json(students);
  });
});

// POST route to add a new student
app.post("/students", (req, res) => {
  const newStudent = req.body;

  fs.readFile(path.join(__dirname, "studentData.json"), "utf8", (err, data) => {
    if (err) {
      console.error("Error reading JSON file:", err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }

    let students = JSON.parse(data);

    students.push(newStudent);

    fs.writeFile(
      path.join(__dirname, "studentData.json"),
      JSON.stringify(students),
      (err) => {
        if (err) {
          console.error("Error writing JSON file:", err);
          res.status(500).json({ error: "Internal server error" });
          return;
        }

        res.status(201).json({ message: "Student data added successfully" });
      }
    );
  });
});

// PUT route to update a student by ID
app.put("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updatedStudent = req.body;

  fs.readFile(path.join(__dirname, "studentData.json"), "utf8", (err, data) => {
    if (err) {
      console.error("Error reading JSON file:", err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }

    let students = JSON.parse(data);

    // Find the index of the student with the matching ID
    const index = students.findIndex((student) => student.id === id);

    if (index === -1) {
      // Student not found
      res.status(404).json({ error: "Student not found" });
      return;
    }

    // Update the student data
    students[index] = { ...students[index], ...updatedStudent };

    fs.writeFile(
      path.join(__dirname, "studentData.json"),
      JSON.stringify(students),
      (err) => {
        if (err) {
          console.error("Error writing JSON file:", err);
          res.status(500).json({ error: "Internal server error" });
          return;
        }

        res.json({ message: "Student data updated successfully" });
      }
    );
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
