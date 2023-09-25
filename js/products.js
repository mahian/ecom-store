let products = null;
const loadProducts = () => {
    fetch("https://fakestoreapi.com/products")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            displayProducts(data)
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
            dataContainer.textContent = "An error occurred while fetching data.";
        });
}

loadProducts()
const displayProducts = (data) => {
    products = data;
    const dataContainer = document.getElementById("popular-products");
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
                        <button onclick="addToCart(${item.id})" class="bg-black text-white px-4 py-3">Add to cart</button>
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
        dataContainer.appendChild(div);
    });
}
// display the single products
const loadSingleProduct = () => {
    const dataContainer = document.getElementById("details-field");
    fetch("https://fakestoreapi.com/products/5")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            dataContainer.innerHTML = `
                <div class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200 p-5 lg:max-h-[500px]">
                <img class="w-full object-contain h-full" alt="ecommerce"
                    src="${data.image}">
                </div>
                <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h2 class="text-sm title-font text-gray-500 tracking-widest">Category : ${data.category}</h2>
                    <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">${data.title}</h1>
                    <div class="flex mb-4">
                        <span class="flex items-center">
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-yellow-500"
                                viewBox="0 0 24 24">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                                </path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-yellow-500"
                                viewBox="0 0 24 24">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                                </path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-yellow-500"
                                viewBox="0 0 24 24">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                                </path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-yellow-500"
                                viewBox="0 0 24 24">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                                </path>
                            </svg>
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" class="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                                </path>
                            </svg>
                            <span class="text-gray-600 ml-3">4 Reviews</span>
                        </span>
                        <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                            <a class="text-gray-500">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    class="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a class="ml-2 text-gray-500">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    class="w-5 h-5" viewBox="0 0 24 24">
                                    <path
                                        d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                                    </path>
                                </svg>
                            </a>
                            <a class="ml-2 text-gray-500">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    class="w-5 h-5" viewBox="0 0 24 24">
                                    <path
                                        d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z">
                                    </path>
                                </svg>
                            </a>
                        </span>
                    </div>
                    <p class="leading-relaxed">${data.description}</p>
                    <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                        <div class="flex">
                            <span class="mr-3">Color</span>
                            <button class="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                            <button
                                class="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                            <button
                                class="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
                        </div>
                        <div class="flex ml-6 items-center">
                            <span class="mr-3">Size</span>
                            <div class="relative">
                                <select
                                    class="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                                    <option>SM</option>
                                    <option>M</option>
                                    <option>L</option>
                                    <option>XL</option>
                                </select>
                                <span
                                    class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                                        <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="flex">
                        <span class="title-font font-medium text-2xl text-gray-900">$${data.price}</span>
                        <button
                            class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Buy
                            Now</button>
                        <button
                            class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                class="w-5 h-5" viewBox="0 0 24 24">
                                <path
                                    d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
                `
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
            dataContainer.textContent = "An error occurred while fetching data.";
        });
}

loadSingleProduct()


// display categories

let categoryImage = "";
const setImageWithCategory = (item) => {
    if (item == "electronics") {
        categoryImage = "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg"
    }
    else if (item == "jewelery") {
        categoryImage = "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"
    }
    else if (item == "men's clothing") {
        categoryImage = "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
    }
    else if (item == "women's clothing") {
        categoryImage = "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg"
    }
    else {
        categoryImage = "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"
    }
}

const loadCategories = () => {
    const dataContainer = document.getElementById("popular-categories");
    
    fetch("https://fakestoreapi.com/products/categories")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            data.forEach((item) => {
                const element = document.createElement('div');
                setImageWithCategory(item)
                element.innerHTML = `
                <a href="/pages/category.html" class="h-[200px] w-[200px] rounded p-2 flex flex-col items-center text-center justify-center hover:bg-gray-50 transtion-all border">
                    <img class="w-20 h-20 object-contain"
                        src="${categoryImage}"
                        alt="">
                    <p class="font-semibold mt-3">${item}</p>
                </a>
                `
                dataContainer.appendChild(element)
            });
            data.forEach((item) => {
                const element = document.createElement('li');
                setImageWithCategory(item)
                element.innerHTML = `
                <a href="/pages/category.html" class="px-3 py-3.5 hover:bg-gray-100 cursor-pointer border flex items-center gap-3">
                <img class="h-8 w-8 object-contain" src="${categoryImage}" alt="${item}">
                ${item}
                </a>
                `
                document.getElementById("category-menu").appendChild(element)
            });
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
            dataContainer.textContent = "An error occurred while fetching data.";
        });
}

loadCategories()

// product add to cart function
function addToCart(productId) {
    const product = getProductById(productId);
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

function removeFromCart(productId) {
    const cart = getCartFromLocalStorage();
    const productIndex = cart.findIndex(product => product.id === productId);

    if (productIndex !== -1) {
        cart.splice(productIndex, 1);
        saveCartToLocalStorage(cart);
        updateCartDisplay(cart);
    }
}

function updateCartDisplay(cart) {
    const cartElement = document.getElementById('cart-product-list');
    cartElement.innerHTML = '';
    document.getElementById('cart-count').innerHTML = cart.length;

    if (cart.length === 0) {
        cartElement.textContent = 'Your cart is empty.';
        return;
    }

    const cartTotal = cart.reduce((total, product) => total + product.price, 0);

    cart.forEach(product => {
        const element = document.createElement('li');
        element.innerHTML = `
        <div class="flex gap-3 w-full">
            <div class="w-16 h-16 flex items-center justify-center">
            <img class="w-full h-full object-contain"
            src="${product.image}"
            alt="">
            </div>
            <div class="flex w-full justify-between gap-4">
                <div>
                    <p class="font-semibold line-clamp-2">${product.title}</p>
                    <p>1 piece</p>
                </div>
                <div class="flex flex-col items-end">
                    <p>$${product.price}</p>
                    <button onclick="removeFromCart(${product.id})" class="h-8 w-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                    </button>
                </div>
            </div>
        </div>
            
        `;
        cartElement.appendChild(element);
    });

    document.getElementById("subtotal").innerText = `Total: $${cartTotal.toFixed(2)}`
}

const initialCart = getCartFromLocalStorage();
updateCartDisplay(initialCart);