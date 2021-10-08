const express = require('express');


const app = express();


const { menu } = require('./menu');


app.get("/" , (req, res) => {
    res.send(`<h1>Home Page</h1> <a href="/api/menu">Menu</a>`)
})

.get("/api/menu", (req, res) => {
    const newMenu = menu.app((men) => {
        const { title, id,  category} = men;
        return {title, id, category}
    });
    res.json({results: newMenu, success: true});
   
})

.get("/api/menu:id", (req, res) => {
    const { id } = req.params;
    const singleMenu = menu.find((men) => men.id === Number(id));
    if(!singleMenu) {
        return res
        .status(404)
        .json({result: [], success: false, message: "No matching  ID found" })
    }
    res.json({results: [singleMenu], success: true})
   })

.all("*", (req, res) => {
    res.status(404).send("Page not found")
})

.listen(3000, () => {
    console.log("serve is listening on port 3000");
})