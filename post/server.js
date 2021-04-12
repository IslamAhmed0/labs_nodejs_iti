const express = require('express');
const app = express();

//database
require('./Database/db');


const UserRoter = require('./router/user');
const Userposts = require('./router/post');

app.use(express.json());

const port = 3000





app.get('/',(req,res,next)=>{
    res.send("hello")
})

app.use(['/user','/users'], UserRoter);
app.use(['/post','/posts'], Userposts);



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})