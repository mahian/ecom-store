let products = null;
const loadProducts = () => {
const dataContainer = document.getElementById("popular-products");
fetch("https://fakestoreapi.com/products")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then((data) => {
        products = data;
        data.forEach((item) => {
            const div = document.createElement('div');
            div.classList.add("p-3", "group", "border");
            div.innerHTML = `
            <div>
                <div class="relative overflow-hidden">
                    <span class="absolute top-2 left-2 bg-red-600 text-white text-sm p-1">50% OFF</span>
                    <div class="absolute -right-14 group-hover:right-2 transition-all duration-300 flex flex-col gap-2">
                        <div class="bg-white shadow-md p-2 hover:bg-red-600 hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                        </div>
                        <div class="bg-white shadow-md p-2 hover:bg-red-600 hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                class="w-6 h-6">
                                <path fill-rule="evenodd"
                                    d="M15.97 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 010 1.06l-4.5 4.5a.75.75 0 11-1.06-1.06l3.22-3.22H7.5a.75.75 0 010-1.5h11.69l-3.22-3.22a.75.75 0 010-1.06zm-7.94 9a.75.75 0 010 1.06l-3.22 3.22H16.5a.75.75 0 010 1.5H4.81l3.22 3.22a.75.75 0 11-1.06 1.06l-4.5-4.5a.75.75 0 010-1.06l4.5-4.5a.75.75 0 011.06 0z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    <div
                        class="absolute -bottom-14 group-hover:bottom-2 transition-all duration-300 flex justify-center w-full">
                        <button onclick="addToCart(${item.id})" class="bg-black text-white px-4 py-3">Add To Cart</button>
                    </div>
                    <div class="border-b h-[300px] p-3">
                    <img class="w-full object-contain h-full"
                        src="${item.image}"
                        alt="">
                    </div>
                </div>
                <div class="mt-3 text-center">
                    <h2 class="font-semibold line-clamp-2">${item.title}</h2>
                    <div class="flex gap-2 items-end justify-center">
                        <p class="text-gray-400 line-through text-sm">$400</p>
                        <p class="font-semibold text-red-600">$300</p>
                    </div>
                </div>
            </div>
            `
            dataContainer.appendChild(div)
        });
    
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
        dataContainer.textContent = "An error occurred while fetching data.";
    });
}

loadProducts()


// product add to cart function
function addToCart(productId) {
    const product = getProductById(productId);
    console.log(product);
    if (product) {
        const cart = getCartFromLocalStorage();
        cart.push(product);
        saveCartToLocalStorage(cart);
        updateCartDisplay(cart);
    }
}
function getProductById(productId) {
    return products.find(product => product.id === productId);
}
function getCartFromLocalStorage() {
    const cartData = localStorage.getItem('cart');
    return cartData ? JSON.parse(cartData) : [];
}

function saveCartToLocalStorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartDisplay(cart) {
    const cartElement = document.getElementById('cart-product-list');
    cartElement.innerHTML = '';

    if (cart.length === 0) {
        cartElement.textContent = 'Your cart is empty.';
        return;
    }

    const cartTotal = cart.reduce((total, product) => total + product.price, 0);

    cart.forEach(product => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <p>${product.title} - $${product.price}</p>
        `;
        cartElement.appendChild(cartItem);
    });

    const totalElement = document.createElement('p');
    totalElement.textContent = `Total: $${cartTotal.toFixed(2)}`;
    cartElement.appendChild(totalElement);
}

const initialCart = getCartFromLocalStorage();
updateCartDisplay(initialCart);