const express = require('express');
const app = express();

app.get("/", (req, res) => {
    console.log("Home Page");
    res.status(200).send("Home Page");
})

app.all("*", (req, res) => {
    res.status(404).send("<h1>Page Not Found</h1>");
})

app.listen(3000, () => {
    console.log("server is listening on port 3000");
});

///app.get 
//app.post 
//app.put 
//app.delete 
//app.all 
//app.use
//app.listen