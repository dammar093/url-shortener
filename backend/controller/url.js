const Url = require("../model/url")

async function createUrl(req,res){
  const {url} =  req.body
  const string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0987654321"
  let id = ""
  for(let i=0; i< 8; i++){
    let randIndex = Math.floor(Math.random() * string.length + 1)
    id+= string.charAt(randIndex)
  }
  try {
    const savedUrl = await Url.create({id,url})
    res.status(201).json({
      url:savedUrl,
      message:"url created successfully",
      success:true
    })

  } catch (error) {
    console.log(error.message)
    res.status(500).json({
      url:null,
      message:"failed to create url",
      success:false
    })
}
}

async function getUrl(req,res) {
  const {id} = req.params;
  try {
  const url = await Url.findOne({id:id})
  console.log(url.url);
  
      return res.status(200).json({
        url: url.url,
        message: "URL not found",
        success: false
      });
  
  } catch (error) {
    console.log(error.message);
    
    res.status(404).json({
      url:null,
      message:"can not find url",
      success:false
    })
  }
}

module.exports= {createUrl,getUrl}