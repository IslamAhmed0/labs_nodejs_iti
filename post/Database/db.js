const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/posts',


    {useNewUrlParser: true, useUnifiedTopology: true

    })
.then(()=>{
    console.log("succsessfully")
})
    .catch((err)=>{
        console.log("error");
        process.exit(1)
    })


