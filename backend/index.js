const app = require("./app")
const dbConnect = require("./config/connectDb")

dbConnect().then(()=>{
app.listen(8000,()=>{
  console.log("Server is running on port::8000")
})
}).catch(()=>{
  console.log("Error")
})
