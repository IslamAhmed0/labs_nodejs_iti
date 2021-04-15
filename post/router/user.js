const express = require('express')
const UserModel = require("../models/user");
const bcrypt = require('bcrypt');
const router = express.Router()


router.use((request , response , next) => {
    console.log('users route')
    next()

})
router.get('/' , (request , response  ,next) => {
    console.log(request)
    UserModel.find({}).exec((err,user) =>{
        if(!err){
            response.send(user);
            console.log(user)
        }
        next(err)
    })

})

//search
router.get('/:id' , (request , response) => {

    const parameters = request.params
    const { id } = parameters
    UserModel.findById( id , function(err, result) {
        if (err) {
            response.send(err);
        } else {
            response.json(result);
        }
    });
})

//const saltRounds=7;
router.post('/register' , ( request , response  ,next )=>{
  // const salt = bcrypt.genSalt(saltRounds);
    //request.body.password
    const { firstName ,lastName , email ,dob ,password ,gender ,phone } = request.body

    const user = new UserModel(request.body)
    console.log(request)
    user.save((err,user)=>{
        if(!err)
        {
            response.json(user)
        }
        response.send(err)
    })
})


router.post('/login',async(request,response)=>{
    const user =  UserModel.findOne({firstname:request.body.firstname})
     console.log("login"+user);
    const token = user.generateToken();
    response.json({
        user,
        token,
        message:"hello"
    })

})




router.delete('/:id' , (req , res ) =>{
    const parameters = req.params
    const { id } =parameters
    UserModel.findByIdAndRemove(id, (err, user) => {

        if (err) {
            console.log(err);
        }
        else{
            res.send("your doc deleted")

        }

    });
})

module.exports = router
