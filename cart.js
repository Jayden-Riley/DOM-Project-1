// cart.js
document.addEventListener('DOMContentLoaded', function () {
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceElement = document.getElementById('total-price');

    // Function to update total price
    function updateTotal() {
        let total = 0;
        cartItems.forEach(item => {
            const priceElement = item.querySelector('.price');
            const price = parseFloat(priceElement.dataset.price.replace('Ksh ', ''));
            const quantity = parseInt(item.querySelector('.quantity').textContent);
            total += price * quantity;
        });
        totalPriceElement.textContent = `Ksh ${total.toFixed(2)}`; // Update total price
    }

    // Add event listeners for each cart item
    cartItems.forEach(item => {
        const decrementButton = item.querySelector('.decrement');
        const incrementButton = item.querySelector('.increment');
        const deleteButton = item.querySelector('.delete-btn');
        const likeButton = item.querySelector('.like-btn');
        const quantityElement = item.querySelector('.quantity');
        const itemTotalElement = item.querySelector('.item-total');

        // Decrement quantity
        decrementButton.addEventListener('click', () => {
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 1) {
                quantity--;
                quantityElement.textContent = quantity;
                itemTotalElement.textContent = `Ksh ${(parseFloat(item.querySelector('.price').dataset.price.replace('Ksh ', '')) * quantity).toFixed(2)}`;
                updateTotal();
            }
        });

        // Increment quantity
        incrementButton.addEventListener('click', () => {
            let quantity = parseInt(quantityElement.textContent);
            quantity++;
            quantityElement.textContent = quantity;
            itemTotalElement.textContent = `Ksh ${(parseFloat(item.querySelector('.price').dataset.price.replace('Ksh ', '')) * quantity).toFixed(2)}`;
            updateTotal();
        });

        // Delete item
        deleteButton.addEventListener('click', () => {
            item.remove();
            updateTotal();
        });

        // Like item
        likeButton.addEventListener('click', () => {
            likeButton.classList.toggle('liked');
        });
    });

    // Initialize total price on page load
    updateTotal();
});
