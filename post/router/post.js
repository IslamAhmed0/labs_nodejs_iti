const express = require('express')
const post =require("../models/post")
const router = express.Router()



router.get('/' , (request , response  ,next) => {
    post.find({},(err,posts) =>{
        if(!err){
            response.json(posts)
        }
        next(err)
    })

})
router.get('/:id' , (request , response) => {

    const parameters = request.params
    const { id } = parameters
    post.findById( id , function(err, result) {
        if (err) {
            response.send(err);
        } else {
            response.json(result);
        }
    });
})

router.post('/' , ( request , response  ,next )=>{
    const { title , body , author } = request.body
    const post = new post({ title , body ,author  })
    post.save((err,post)=>{
        if(!err)
        {
            response.json(post)
        }
        response.send(err)
    })
})



router.delete('/:id' , (req , res ) =>{
    const parameters = req.params
    const { id } =parameters
    post.findByIdAndRemove(id, (err, post) => {

        if (err) {
            console.log(err);
        }

        res.json("your doc deleted")
    });
})

module.exports = router
