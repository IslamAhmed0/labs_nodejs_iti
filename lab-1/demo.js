// console.log("hello node");
// setTimeout(function (){
//     console.log("after 2 seconds");
// },2000);
//
// console.log(process.argv)
// var user_name= process.argv[2];
// console.log("hello"+user_name);

const fs = require('fs');

const  array_list= process.argv;
let todo_array=[];

const [,,action,todo]= array_list;

switch (action){
    case "add":
        const current =fs.readFileSync('./tods.json',{encoding:"utf8"});
        todo_array=JSON.parse(current);
        todo_array.push(todo);
        console.log({todo_array})

        fs.writeFileSync("./tods.json",JSON.stringify(todo_array))
        break;

    case "edit":

    default:
        break;
}