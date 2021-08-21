
function updateProductPrice(product, price) {
     const productInput = document.getElementById(product + "-cost");
     let productCost = parseInt(productInput.innerText);
     productInput.innerText = price;
     // 
     const totalCost = document.getElementById("total-cost");
     const totalCostValue = parseInt(totalCost.innerText);
     totalCost.innerText = 1299 + price;

     // 

}





// memory add event handler
document.getElementById("memory-eight").addEventListener('click', function () {

     updateProductPrice('memory', 0);
     // 



});

document.getElementById("memory-sixteen").addEventListener('click', function () {

     updateProductPrice('memory', 180);
     // 

});

// storage add event handler
document.getElementById("storage-first").addEventListener('click', function () {
     updateProductPrice('storage', 0);

     // 


});
document.getElementById("storage-seceond").addEventListener('click', function () {
     updateProductPrice('storage', 100);

     // 


});

document.getElementById("storage-third").addEventListener('click', function () {
     updateProductPrice('storage', 180);
});

// delivery cost event handler
document.getElementById("delivery-free").addEventListener('click', function () {
     updateProductPrice('delivery', 0);
});

document.getElementById("delivery-paid").addEventListener('click', function () {
     updateProductPrice('delivery', 20);
});


