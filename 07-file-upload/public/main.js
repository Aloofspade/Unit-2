const url = '/api/v1/products'
const fileForm = document.querySelector('.file-form');

const nameInput = document.querySelector('#name')

const priceInput = document.querySelector('#price')

const imageInput = document.querySelector('#image')

const container = document.querySelector('.container')

let imageValue; 

imageInput.addEventListener("change", async (e) => {
    const imageFile = e.target.files[0];

    const formData = new FormData();

    formData.append("image", imageFile);

    try {
        const {data: {image : {src} }, } = await axios.post(`${url}/uploads`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            },

        });

        imageValue = src
    } catch(err){
        imageValue = null
        console.log(err);
    }


    // console.log([...formData.keys()]);

});

fileForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nameValue = nameInput.value;

    const priceValue = priceInput.value;


    try{
        const product = {price: priceValue, image: imageValue, name: nameValue}

        await axios.post(url, product);


  fetchProducts();
    } catch (err) {
     console.log(err);
    }
})


async function fetchProducts() {
    try {
        const {data: {products}} = await axios.get(url);

        const tempContainerHTML = products.map(product => {
            return `<article class="products"> 
            <img src="${product.image}" alt="${product.name}" class="img" /> 
            <footer>
                <p>${product.name}</p>
                <span>${product.price}</span>
            </footer>
            </article>`
        }).join('');
        
        container.innerHTML = tempContainerHTML; 
    } catch (err){
        console.log(err);
    }
}


fetchProducts();


