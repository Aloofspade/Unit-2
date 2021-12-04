

const nameInput = document.querySelector('#name')

const priceInput = document.querySelector('#price')

const imageInput = document.querySelector('#image')

const container = document.querySelector('.container')

const sendButton = document.querySelector('#send')

const resetButton = document.querySelector('#reset')

let imageValue; 


sendButton.addEventListener("click", async (e) => {
    e.preventDefault();
    const info = await axios.get("/send");
    console.log(info.data);
})

resetButton.addEventListener("click", async (e) => {
    e.preventDefault();
    const info = await axios.get("/reset/:id");
    
    console.log(info.data);
})


