function updateProduct(product) {
     const memoryInput = document.getElementById(product + "-cost");
     const memoryCost = memoryInput.innerText;


     if (memoryCost == '0') {
          memoryInput.innerText = 0;
     }
     else {
          memoryInput.innerText = 180;
     }

}

// memory add event handler
document.getElementById("memory-eight").addEventListener('click', function () {
     /* const memoryInput = document.getElementById("memory-cost");
     const memoryCost = memoryInput.innerText;
     memoryInput.innerText = 0; */

     updateProduct();

});

document.getElementById("memory-sixteen").addEventListener('click', function () {
     /* const memoryInput = document.getElementById("memory-cost");
     const memoryCost = memoryInput.innerText;
     memoryInput.innerText = 180; */

     updateProduct('memory');

});

// storage add event handler
document.getElementById("storage-first").addEventListener('click', function () {
     const storageInput = document.getElementById("storage-cost");
     const memoryCost = storageInput.innerText;
     storageInput.innerText = 0;
});
document.getElementById("storage-seceond").addEventListener('click', function () {
     const storageInput = document.getElementById("storage-cost");
     const memoryCost = storageInput.innerText;
     storageInput.innerText = 100;
});

document.getElementById("storage-third").addEventListener('click', function () {
     const storageInput = document.getElementById("storage-cost");
     const memoryCost = storageInput.innerText;
     storageInput.innerText = 180;
});

// delivery cost event handler
document.getElementById("delivery-free").addEventListener('click', function () {
     const deliveryInput = document.getElementById("delivery-cost");
     const deliveryCost = deliveryInput.innerText;
     deliveryInput.innerText = 0;
});

document.getElementById("delivery-paid").addEventListener('click', function () {
     const deliveryInput = document.getElementById("delivery-cost");
     const deliveryCost = deliveryInput.innerText;
     deliveryInput.innerText = 20;
});


