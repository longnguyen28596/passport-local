import mongoose from "mongoose";

let connectDB = () => {
  mongoose.connect('mongodb://localhost:27017/my_blogs', { useNewUrlParser: true, useUnifiedTopology: true });
};

module.exports = connectDB;
