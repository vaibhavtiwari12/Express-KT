const students = require("../studentDetails");
const { createDBConnection } = require("./mongoConnector");
const studentSchema = require("./mongoSchema");

const addStudent = async (data) => {
  await createDBConnection();
  const newStudent = new studentSchema({
    name: data.name,
    age: data.age,
    marks: data.marks,
  });
  await newStudent.save();
};

const getStudents = async () => {
  await createDBConnection();
  console.log("students");
  const students = await studentSchema.find();
  console.log("students data", students);
  return students;
};

module.exports = { addStudent, getStudents };
