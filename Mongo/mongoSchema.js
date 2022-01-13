const mongoose = require("mongoose");
//collection ==table
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const StudentSchema = new Schema({
  name: String,
  age: { required: true, type: Number },
  marks: Number,
});
// document == row

module.exports = mongoose.model("students", StudentSchema);
