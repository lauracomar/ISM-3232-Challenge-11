// Task 1: html
// Task 2: Add Event Listener for Product Selection
//get elements from html:
const selectProduct = document.getElementById('select-product'); //drpdown to select product
const inputQuantity = document.getElementById('quantity'); //input quantity
const totPrice = document.getElementById('tot-price'); //display tot price

//Task 3: Calculate Total Price Dynamically
//calculate tot price based o selections
function updateTotalPrice() {
    const productPrice = parseFloat(selectProduct.value); // get prod price and convert to floating point number
    const quantity = parseInt(inputQuantity.value); //get quantity input and convert to integer
    const totalPrice = productPrice * quantity; //calculate tot price
    totPrice.textContent = totalPrice.toFixed(2); //update tot price, made it fixed to two decimal points
}

//event listener for prod selection
selectProduct.addEventListener('change', updateTotalPrice); //calls function when product changes
inputQuantity.addEventListener('input', updateTotalPrice); // calls function when input changes

// Task 4: Handle Order Submission
const placeOrder = document.getElementById('place-order');// place order button
const orderSummary = document.getElementById('order-summary');// display order summary

placeOrder.addEventListener('click', function () {
    const selectedProduct = selectProduct.options[selectProduct.selectedIndex].text;//get text from selected product
    const quantity = inputQuantity.value; // get inputed quantity
    const totalPrice = totPrice.textContent;//get tot price from display

    orderSummary.textContent = `Order Details: ${quantity} ${selectedProduct}, which totals $${totalPrice}`; //order summary display
});