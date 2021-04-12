const mongoose = require('mongoose');
const userSchema = mongoose.Schema(
    {
        firstname:
             {
                type: String ,
                required:true ,
                maxlength :20 ,
                minlength :5
        } ,
        lastname:
            {
                    type: String ,
                    required:true ,
            } ,
        dob :
            {type:Date },
        password:
            {
                    type: String ,
                    required:true ,
                    minlength :8} ,
        gender :
            {
                    type:String,
                    enum:['female' ,'male']
            } ,
        email :
            {
                    type:String,
                    unique:true
            } ,
        phone :
            {
                    type: String ,
                    maxlength :11 ,
                    minlength :11,
                    unique :true
            }

    }
)

const users = mongoose.model("user" , userSchema)
users.on('index',(err)=>{
        console.log("hhh"+err)
})
module.exports =users
