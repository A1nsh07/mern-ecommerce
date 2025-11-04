const mongoose = require("mongoose");

exports.connectToDB = async () => {
  try {
    console.log("Connecting with URI:", process.env.MONGO_URI); // <-- ADD THIS LINE
    await mongoose.connect(process.env.MONGO_URI.trim());
    console.log("connected to DB");
  } catch (error) {
    console.log(error);
  }
};