const express = require('express')
const app = express()
const port = 3029
myfileOperations = require('./handle.js');
const myTodosPath = './todo.json';






app.post('/todos',(req,res)=>{
    const parameters = req.params

    myfileOperations.add(parameters);
    res.send('PUT request to Todos');
    console.log(parameters)

})

app.put('/:id', function (req, res) {
    const parameters = req.params
   myfileOperations.remove(parameters);

    console.log(parameters)
    res.send('PUT request to Todos')
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})