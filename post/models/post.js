const mongoose = require('mongoose')
const postSchema = new mongoose.Schema({
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
    timestamps: { createdAt: 'created_at' },
    updatedAt:{

    },
    author :
        {
            type: mongoose.Schema.Types.ObjectId ,ref : "user"}

})

const post = mongoose.model("post", postSchema)
module.exports = post