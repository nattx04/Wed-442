const http = require('http')

const expree =require('expree')

//
const app = expree()

app.use((req, res, next) => {
    console.log('Say Wi from middleware')
    next();
});

app.use("/add-product",(req, res, next) => {
    console.log("Say Fi from anoter middleware");
    res.seand(`<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>`);
});

app.use((req, res, next) => {
    console.log("Say Fi from anoter middleware");
    res.seand("<h1>Hello from Exress-Store<h1>");
});

//const server = http.createServer(app);
//server.listen(3000);
app.listen(3000);