const express = require("express");
const student = require("./studentDetails");
const { addStudent, getStudents } = require("./Mongo/mongoController");
const app = express();
app.listen(4000);
console.log("Server is running on port 4000");
// this was bare minimum

//Enable JSON POST REQUEST
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log("Root path executed", student);
  res.status(200).send("This is the root path");
});

app.get("/home", (req, res) => {
  console.log("This is the home path", req.query);

  res.send("hello");
});

app.post("/addStudent", async (req, res) => {
  try {
    await addStudent(req.body);
  } catch (error) {
    console.log("Something Went Wrong", error);
  }
  res.send("Student Added Successfully");
});
app.get("/fetchAllStudents", async (req, res) => {
  let students;
  try {
    students = await getStudents();
    console.log("inside API");
  } catch (error) {
    console.log("Something Went Wrong", error);
  }
  res.send(students);
});

app.post("/submitForm", (req, res) => {
  console.log("reqest body", req.body);
  addresses.push(req.body);
  console.log("New Addresses", addresses);
  res.send("Received Data");
});

// Create a node and express application from scratch.
// create a GET API -
//  - create a separate File that contains  the object -  containing details of students
// Create a post Method to add the students to that file.
// BONUS : Post API or GET API and return the student object with the name given in wither query param or POST Object
