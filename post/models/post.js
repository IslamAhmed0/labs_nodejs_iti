const mongoose = require('mongoose')
const postSchema = mongoose.Schema(
    {
    title :
        {
            type: String ,
            required:true ,
        } ,
    body  :
        {
            type: String ,
            required:true ,
            maxlength :70
        }  ,
    tags:{
        type: String ,
        maxlength :70
     },

    author :
        {
            type: mongoose.Schema.Types.ObjectId ,ref : "user"
        }

})

const post = mongoose.model("post", postSchema);
post.on('index',(err)=>{
    console.log("hhh"+err)
})
module.exports = post;