const mongoose = require("mongoose")

const urlSchema = mongoose.Schema(
  { 
    id:{
      type:String,
      require:true
    },
    url:{
      type:String,
      required:true,
      unique:true
    }
  }
)
const Url = new mongoose.model("Url",urlSchema);
module.exports = Url