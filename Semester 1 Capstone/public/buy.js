// const { empty } = require("statuses");

const purchase = [
    {id: '1', name: "Jordan 5", price: 21500, qty: 1},
    {id: '2', name: "Jordan 11", price: 23900, qty: 2},
    {id: '3', name: "Jordan 12", price: 45500, qty: 3},
]


const totalAmount = 90900
const shippingFee = 2000

const stripe = Stripe("pk_test_51K4ZHxEAGGc1EAR5xKJFOetpxksl4WzYfjCfMzGA4eOQbI7lWhFQaQhKVCUcyv6wXmpQAu61bpYHsqfnR9WUDnBm00xRZWrLkB");


document.querySelector('button').disabled = true;

fetch('/stripe', {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ purchase, totalAmount, shippingFee}),

})

.then((response) => {
return response.json()

}) 

.then((data) => {
    const elements = stripe.elements()

    const style = {
        base: {
            color: "#32325d",
            fontFamily: "Arial, sans-serif",
            fontSmoothing: " antialiased",
            fontSize: "16px",
            "::placeholder": {
                color: "#3235d",

            },
        },
        invalid: {
            fontFamily: "Ariel, sans-serif",
            color: "#fa755a",
            iconColor: "#fa755a"
        
        },
    }

    const card = elements.create("card", { style })

    card.mount("#card-element")

    card.on("change", (e) => {
        document.querySelector("button").disabled = e.empty;
        document.querySelector("#card-error").textContent = e.error ? e.error.message : "";
    });

    const form = document.querySelector("#payment-form")

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        payWithCard(stripe, card, data.clientSecret)
    })
})

.catch((err) => console.log(err));

const payWithCard = (stripe, card, clientSecret) => {
    loading(true);
    stripe
    .confirmCardPayment(clientSecret, {
        payment_method: {card}
    })
    .then(response => {
        if(response.error){
            showError(response.error.message)
        } else {
            orderComplete(response.paymentIntent.id)
        }
    })
    .catch(err => console.log(err));
};

const orderComplete = (paymentIntentID) => {
    loading(false);
    document.querySelector('.result-message a')
    .setAttribute("href", `https://dashboard.stripe.com/test/payments/${paymentIntentID}`)
    document.querySelector('.result-message').classList.remove('hidden');
    document.querySelector("button").disabled = true;
}


const showError = (errorMsgText) => {
    loading(false);
    const errorMsg = document.querySelector("#card-error")
    errorMsg.textContent = errorMsgText;
    setTimeout(()  => {
        errorMsg.textContent = "";
    }, 4000);
}


const loading = (isLoading) => {
    if(isLoading){
        document.querySelector("button").disabled = true;
        document.querySelector("#spinner").classList.remove("hidden");
        document.querySelector("#button-text").classList.add('hidden');
    } else {
        document.querySelector("button").disabled = false;
        document.querySelector("#spinner").classList.remove("hidden");
        document.querySelector("#button-text").classList.add('hidden');

    }
}