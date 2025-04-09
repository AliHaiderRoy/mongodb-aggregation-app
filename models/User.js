const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  index: Number,
  name: String,
  isActive: Boolean,
  registered: Date,
  age: Number,
  gender: String,
  eyeColor: String,
  favoriteFruit: String,
  company: {
    title: String,
    email: String,
    phone: String,
    location: {
      country: String,
      address: String,
    },
  },
  tags: [String],
});

const User = mongoose.model("User", userSchema);

module.exports = User;













// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   index: Number,
//   name: String,
//   isActive: Boolean,
//   registered: Date,
//   age: Number,
//   gender: String,
//   eyeColor: String,
//   favoriteFruit: String,
//   company: {
//     title: String,
//     email: String,
//     phone: String,
//     location: {
//       country: String,
//       address: String,
//     },
//   },
//   tags: [String],
// });

// const User = mongoose.model("User", userSchema);

// module.exports = User;
