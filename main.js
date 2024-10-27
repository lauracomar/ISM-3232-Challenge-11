// Task 1: html
// Task 2: Add Event Listener for Product Selection
//get elements from html:
const selectProduct = document.getElementById('select-product'); //drpdown to select product
const inputQuantity = document.getElementById('quantity'); //input quantity
const totPrice = document.getElementById('tot-price'); //display tot price

//event listener for prod selection
selectProduct.addEventListener('change', updateTotalPrice); //calls function when product changes
inputQuantity.addEventListener('input', updateTotalPrice); // calls function when input changes