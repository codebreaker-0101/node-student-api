const express = require("express");
const app = express();

app.use(express.json()); 
let students = [
  { id: 1, name: "Hamesh", dept: "CSE", place: "Chennai" },
  { id: 2, name: "Harish", dept: "ECE", place: "Madurai" },
  { id: 3, name: "Saran", dept: "IT", place: "Thiruvallur" }
]
app.get("/students", (req, res) => {
  res.json(students);
});
app.put("/students", (req, res) => {
  const updates = req.body;

  updates.forEach(update => {
    const index = students.findIndex(s => s.id === update.id);
    if (index !== -1) {
      students[index] = {
        ...students[index],
        name: update.name,
        dept: update.dept,
        place: update.place
      };
    }
  });

  res.json({
    message: "Students updated successfully",
    students
  });
});
app.listen(2900, () => {
  console.log("Server running on port 2900");
});
