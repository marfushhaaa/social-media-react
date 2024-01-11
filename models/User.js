const mongoose = require("mongoose");
//const { MongoClient, ServerApiVersion } = require('mongodb');

const UserSchema = new mongoose.Schema({
  username:{
    type: String,
    require: true,
    min:3,
    max:20,
    unique:true,
  },
  email:{
    type: String,
    required: true,
    max:50,
    unique:true,
  },
  password:{
    type: String,
    required: true,
    min:8,
  },
  profilePicture:{
    type: String,
    default:"",
  },
  coverPicture:{
    type: String,
    default:"",
  },
  followers:{
    type: Array,
    default:[],
  },
  followings:{
    type: Array,
    default:[],
  },
  desc:{
    type: String,
    max: 50,
  },
  city:{
    type: String,
    max: 50,
  },
  from:{
    type: String,
    max: 50,
  },
  city:{
    type: Number,
    enum: [1,2,3],
  }
//   isAdmin:{
// //    type: Bollean,
//     default: false,
//   },
},
{timestamps:true}
);

module.exports = mongoose.model("User", UserSchema);
