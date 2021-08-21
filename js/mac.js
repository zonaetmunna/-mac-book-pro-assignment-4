
function updateProductPrice(product, price) {
     const productInput = document.getElementById(product + "-cost");
     productInput.innerText = price;

     // 
     const fixedPrice = document.getElementById("fixed-price");
     fixedPrice.innerText = 1299;

     const subTotal = parseInt(productInput.innerText) + parseInt(fixedPrice.innerText);
     return subTotal;

     // 

}

// 
function updateTotal() {
     updateProductPrice();
     const totalCost = document.getElementById("total-cost");
     totalCost.innerText = 1299;

     const total = parseInt(totalCost.innerText) + subTotal;
}

// memory add event handler
document.getElementById("memory-eight").addEventListener('click', function () {

     updateProductPrice('memory', 0);
     // 
     updateTotal();

});

document.getElementById("memory-sixteen").addEventListener('click', function () {

     updateProductPrice('memory', 180);
     // 
     updateTotal();

});

// storage add event handler
document.getElementById("storage-first").addEventListener('click', function () {
     updateProductPrice('storage', 0);

     // 
     updateTotal();


});
document.getElementById("storage-seceond").addEventListener('click', function () {
     updateProductPrice('storage', 100);

     // 
     updateTotal();


});

document.getElementById("storage-third").addEventListener('click', function () {
     updateProductPrice('storage', 180);
     // 
     updateTotal();
});

// delivery cost event handler
document.getElementById("delivery-free").addEventListener('click', function () {
     updateProductPrice('delivery', 0);
     // 
     updateTotal();
});

document.getElementById("delivery-paid").addEventListener('click', function () {
     updateProductPrice('delivery', 20);
     // 
     updateTotal();
});


