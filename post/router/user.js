const express = require('express')
const UserModel = require("../models/user")
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


router.post('/' , ( request , response  ,next )=>{
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
