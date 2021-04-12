const fs = require('fs');



//read
function readTodos(pathName) {
    const todos = fs.readFileSync(pathName, 'utf8');
    return JSON.parse(todos)

}
//path
const path="./todo.json";
//write
function writeTodos(data) {
    const jsonData = JSON.stringify(data);
    fs.writeFileSync('todo.json', jsonData)

}

getLastId = (data) => {
    if (!data.length) {
        return 1;
    } else {
        let lastId = data[data.length - 1].id;
        return lastId + 1;
    }
}

function add(options) {
    let data = options;
    let todo = readTodos('./todo.json');
    data.id = getLastId(todo);
    data.checked = false;
    todo.push(data);
    writeTodos(todo);

}
function remove(data) {
    let fileData = readTodos(path);
    fileData.forEach((ele, index) => {
        if (ele.id == data.id) {
            console.log(`removed Succesfully${data.id}`)
            fileData.splice(index, 1);
        } else {
            console.log(`fail ${data.id}`);
        }
    });
    writeTodos(fileData);
}
//edit
//edit
function edit(data) {
    let todo = readTodos(path);
    todo.forEach((ele, index) => {
        if (ele.id == data.id) {
            editObject(todo, data, index);
            console.log(`updated Succesfully ${data.id} `);
            writeTodos(todo);

        } else {
            console.log(`fail ${data.id} `);
        }
    });

}
function list()
{
    listData=readTodos(path)
    console.log(listData);

}

module.exports = {
    add,
    remove,
    edit,
    list

};