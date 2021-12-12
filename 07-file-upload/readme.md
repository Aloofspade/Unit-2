# Modals (folder)

### Products (file)
- name - String 
    - Required 

- price - Number 
     - Required 

- image - String 
    - Required 

# Controllers (folder)


### ProductsController (file)
- createProduct 
    - create a Product with req.body

- getAllProducts
    - finds all Products 


### imageUpLoadController (file)

- uploadImage 
     - takes a file and creates an image on the local storage, returns a string of the path 

# Routes (folder) 

### api/v1/products - productsRoutes (file)
- '/'
    - GET - getAllProducts 
    - POST - createProduct
- '/uploads'
 - POST - uploadImage

