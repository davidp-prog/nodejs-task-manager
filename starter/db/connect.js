const mongoose = require("mongoose");

// const connectionSting = MONGO_URI;

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

//   .then(() => console.log("/// Database Connection SUCCESS!"))
//   .catch((err) => console.log(err));

module.exports = connectDB;
