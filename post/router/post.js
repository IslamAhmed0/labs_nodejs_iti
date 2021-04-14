const express = require('express')
const posts = require("../models/post");

const router = express.Router()



// router.get('/' , (request , response  ,next) => {
//     posts.find({},(err,posts) =>{
//         if(!err){
//             response.json(posts)
//         }
//         next(err)
//     })
//
// })
// router.get('/:id' , (request , response) => {
//
//     const parameters = request.params
//     const { id } = parameters
//     posts.findById( id , function(err, result) {
//         if (err) {
//             response.send(err);
//         } else {
//             response.json(result);
//         }
//     });
// })

router.post('/' , ( request , response  ,next )=>{
    console.log("lllllllll")
     const { title , body ,tags } = request.body
    const postss = new posts({ title , tags, body   })
    postss.save((err,post)=>{
        if(!err)
        {
            console.log(post)
        }
        response.send(err)
    })
})



// router.delete('/:id' , (req , res ) =>{
//     const parameters = req.params
//     const { id } =parameters
//     posts.findByIdAndRemove(id, (err, post) => {
//
//         if (err) {
//             console.log(err);
//         }
//
//         res.json("your doc deleted")
//     });
// })

module.exports = router
