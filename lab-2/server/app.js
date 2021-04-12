const http = require('http');
const fs = require('fs');



var news= require("../../lab-1/todo.json")
const hostname = '127.0.0.51';
const port = 3000;
//return http server

const server = http.createServer((req, res) => {
    //request

    switch (req.url) {
        case "/":
            var list = require("../../lab-1/todo.json");
            res.setHeader("content-type","text/html");
            res.statusCode=200;
            //res.end();

            res.end(`
            <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
</head>
<body>
<div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../a.html">Nature</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../nature.html">Quotes</a>
                </li>

            </ul>
        </div>
    </nav>

</div>
<div id="body">


</div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js" integrity="sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js" integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc" crossorigin="anonymous"></script>
<script>
var list =${JSON.stringify(list)};

var body_list =document.getElementById("body");
var ul = document.createElement("ul");
body_list.appendChild(ul);

for (var i = 1; i <= list.length; i++)
{
    var li = document.createElement("li");  

    li.innerHTML = list[i].id;
    li.innerHTML = list[i].title;
    ul.appendChild(li);
}
</script>
</body>
</html>
            
            `);

            break;







        case "/a.html":
            const image_nature= fs.readFileSync('./a.html')
            res.setHeader("content-type","text/html");
            res.statusCode=200;
            //console.log(image_Quotes)
            res.end(image_nature);
            break;

        case "/images/Nature/foresttb-l.jpg":
            res.setHeader("content-type","text/html");
            res.statusCode=200;
            const image = fs.readFileSync('./images/Nature/foresttb-l.jpg')
            res.end(image);

            break;
        case "/images/Nature/2-nature.jpg":
            res.setHeader("content-type","text/html");
            res.statusCode=200;
            const image2 = fs.readFileSync('./images/Nature/2-nature.jpg')
            res.end(image2);
            break;







        case "/nature.html":
            const image_Quotes= fs.readFileSync('./nature.html')
            res.setHeader("content-type","text/html");
            res.statusCode=200;
            //console.log(image_Quotes)
            res.end(image_Quotes);
            break;


        case "/images/Quotes/Linus.jpg":
            res.setHeader("content-type","text/html");
            res.statusCode=200;
            const image_quotes_one = fs.readFileSync('./images/Quotes/Linus.jpg')
            res.end(image_quotes_one);

            break;
        case "/images/Quotes/2.jpg":
            res.setHeader("content-type","text/html");
            res.statusCode=200;
            const image_quotes_two = fs.readFileSync('./images/Quotes/2.jpg')
            res.end(image_quotes_two);
            break;





        default:
            res.statusCode=404;
            res.end("<h1>not found</h1>")
    }


});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

