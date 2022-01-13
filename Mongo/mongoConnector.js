const mongoose = require("mongoose");

const createDBConnection = async () => {
  return await mongoose.connect("mongodb://localhost:27017/Students", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
module.exports = { createDBConnection };
