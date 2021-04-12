const express = require('express')
const app = express()
const port = 3030
myfileOperations = require('./handle.js');
const myTodosPath = './todo.json';




//add
app.post('/todos',(req,res)=>{
    const parameters = req.params
    console.log(parameters)

    myfileOperations.add(parameters);
    res.send('PUT request to Todos');
    console.log(parameters)

})

app.get('/list',(req,res)=>{

    myfileOperations.list();
    res.send('list');

})
//delete
app.delete('/delete/:id', function (req, res) {
    const parameters = req.params
    myfileOperations.remove(parameters);
    console.log(parameters)
    res.send('DELETE request to homepage')
})

//

// EDIT
// app.get('/:id/edit', (req, res) => {
//     Review.findById(req.params.id, function(err, review) {
//         myfileOperations.edit(req.params.id);
//
//         res.render('reviews-edit', {review: review});
//     })
// })

// app.put('/:id', function (req, res) {
//     const parameters = req.params
//    myfileOperations.remove(parameters);
//
//     console.log(parameters)
//     res.send('PUT request to Todos')
// })



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})