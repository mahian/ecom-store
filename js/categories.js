
let image = "";
const setImageWithCategory = (item) => {
    if (item == "electronics") {
        image = "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg"
    }
    else if (item == "jewelery") {
        image = "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"
    }
    else if (item == "men's clothing") {
        image = "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
    }
    else if (item == "women's clothing") {
        image = "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg"
    }
    else {
        image = "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"
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
                <a href="" class="h-[200px] w-[200px] rounded p-2 flex flex-col items-center text-center justify-center hover:bg-gray-50 transtion-all border">
                    <img class="w-20 h-20 object-contain"
                        src="${image}"
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
                <a href="" class="px-3 py-3.5 hover:bg-gray-100 cursor-pointer border flex items-center gap-3">
                <img class="h-8 w-8 object-contain" src="${image}" alt="${item}">
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