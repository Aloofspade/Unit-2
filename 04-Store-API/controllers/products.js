const getAllProductsStatic =  (req, res) => {
    
    res.json({ method: req.method, products: "getAllProductsStatic"});
};


const getAllProducts =  (req, res) => {
   
    res.json({ 
        method: req.method, 
        products: "getAllProducts", 
        query: req.query
    });
  };

  module.exports = {getAllProducts, getAllProductsStatic}