const express = require('express');


const app = express();


const {products } = require('./data');

app.get("/" , (req, res) => {
    res.send(`<h1>Home Page</h1> <a href="/api/products">Products</a>`)
})
.get("/api/products", (req, res) => {
    const newProduct = products.app((product) => {
        const {name, id, image} = product;
        return {name, id, image}
    });
    res.json({results: newProduct, success: true});
   
})
///Search using params_


.get("/api/products:id", (req, res) => {
 const { id } = req.params;
 const singleProduct = products.find((product) => product.id === Number(id));
 if(!singleProduct) {
     return res
     .status(404)
     .json({result: [], success: false, message: "No matching  ID found" })
 }
 res.json({results: [singleProduct], success: true})
})


.get('/api/products:price', (req, res) => {
    const {price} = req.params;
    const newProducts = products.filter((product) => {
        return product.price < price;
    })
    if(!newProducts) {
        return res
        .status(404)
        .json({result: [], success: false, message: "Nothing is that cheap" })
    }
    res.json({results: newProducts, success: true})
})


.get("/api/v1/query", (req, res) => {
   const  {search, limit} = req.query;
//    let newProducts = products is mutalble Bad 
let sortedProducts = [...products]
if(search){
   sortedProducts =  sortedProducts.filter((products) => {
         return products.name.includes(search)
    })

} 
if(limit) {
  sortedProducts =  sortedProducts.slice(0, Number(limit));
}
if (sortedProducts.length < 1) {
return res.json({results:[], success: false, message: "No products match the search parmeters"});

}
res.json({results: sortedProducts, success: true})
})


.all("*", (req, res) => {
    res.status(404).send("Page not found")
})
.listen(3000, () => {
    console.log("serve is listening on port 3000");
})