# Modals (folder)

### Products (file)
- image - String 
    - Required 

- name - String 
    - Required 

- price - Number 
     - Required 

# Controllers (folder)


### ShoesController (file)

- createShoes
    - create a Product with req.body

- getAllShoes
    - finds all Products 


### imageUpLoadController (file)

- uploadImage 
     - takes a file and creates an image on the local storage, returns a string of the path 

# Routes (folder) 

### api/v1/shoes - shoesRoutes (file)
- '/'
    - GET - getAllShoes 
    - POST - createShoes
- '/uploads'
 - POST - uploadImage

