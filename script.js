

document.addEventListener('DOMContentLoaded', () => {
    const minusBtn = document.querySelector('.minus-btn');
    const plusBtn = document.querySelector('.plus-btn');
    const quantityInput = document.querySelector('.quantity input');
    const addToCartBtn = document.querySelector('.add-to-cart button');
    const cartIcon = document.querySelector('.cart img');
    const mainImage = document.querySelector('.main-image');
    const thumbnailImages = document.querySelectorAll('.thumbnail-images img');
    
    let cartCount = 0;

    minusBtn.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 0) {
            quantityInput.value = currentValue - 1;
        }
    });

    plusBtn.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value);
        quantityInput.value = currentValue + 1;
    });

    addToCartBtn.addEventListener('click', () => {
        let quantityToAdd = parseInt(quantityInput.value);
        if (quantityToAdd > 0) {
            cartCount += quantityToAdd;
            alert(`Added ${quantityToAdd} items to cart. Total items in cart: ${cartCount}`);
            quantityInput.value = 0;
        } else {
            alert('Please select a quantity greater than zero.');
        }
    });

    thumbnailImages.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            mainImage.src = thumbnail.src.replace('-thumbnail', '');
        });
    });
});








