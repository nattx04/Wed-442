const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const mealDetailsContent = document.querySelector('.meal-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');

searchBtn.addEventListener('click', getMealList);
mealList.addEventListener('click', getMealRecipe);
recipeCloseBtn.addEventListener('click', () => {
    mealDetailsContent.parentElement.classList.remove('showRecipe');
});


function getMealList(){
    let searchInputTxt = document.getElementById('search-input').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
    .then(response => response.json())
    .then(data => {
        let html = "";
        if(data.meals){
            data.meals.forEach(meal => {
                html += `
                    <div class = "meal-item" data-id = "${meal.idMeal}">
                        <div class = "meal-img">
                            <img src = "${meal.strMealThumb}" alt = "food">
                        </div>
                        <div class = "meal-name">
                            <h3>${meal.strMeal}</h3>
                            <a href = "#" class = "recipe-btn">Get Recipe</a>
                        </div>
                    </div>
                `;
            });
            mealList.classList.remove('notFound');
        } else{
            html = "Sorry, we didn't find any meal!";
            mealList.classList.add('notFound');
        }

        mealList.innerHTML = html;
    });
}


function getMealRecipe(e){
    e.preventDefault();
    if(e.target.classList.contains('recipe-btn')){
        let mealItem = e.target.parentElement.parentElement;
        fetch(`www.themealdb.com/api/json/v1/1/categories.php${mealItem.dataset.id}`)
        .then(response => response.json())
        .then(data => mealRecipeModal(data.meals));
    }
}

// create a modal
function mealRecipeModal(meal){
    console.log(meal);
    meal = meal[0];
    let html = `
        <h2 class = "recipe-title">${meal.strMeal}</h2>
        <p class = "recipe-category">${meal.strCategory}</p>
        <div class = "recipe-instruct">
            <h3>Instructions:</h3>
            <p>${meal.strInstructions}</p>
        </div>
        <div class = "recipe-meal-img">
            <img src = "${meal.strMealThumb}" alt = "">
        </div>
        <div class = "recipe-link">
            <a href = "${meal.strYoutube}" target = "_blank">Watch Video</a>
        </div>
    `;
    mealDetailsContent.innerHTML = html;
    mealDetailsContent.parentElement.classList.add('showRecipe');
}
function saveData() {
    const name = document.getElementById('inputName').value;
    const image = document.getElementById('inputImage').value;
    const price = parseFloat(document.getElementById('inputPrice').value);

    if (name && image && price) {
        const existingOrder = JSON.parse(localStorage.getItem('currentOrder')) || { items: [], total: 0 };
        existingOrder.items.push({ name, image, price });
        existingOrder.total += price;
        localStorage.setItem('currentOrder', JSON.stringify(existingOrder));
        alert("Item added to order 🍽️");
        loadData();
    } else {
        alert("Please enter food name, image URL, and price.");
    }
}

function cancelItem(index) {
    const existingOrder = JSON.parse(localStorage.getItem('currentOrder')) || { items: [], total: 0 };
    const canceledItem = existingOrder.items.splice(index, 1)[0];
    existingOrder.total -= canceledItem.price;
    localStorage.setItem('currentOrder', JSON.stringify(existingOrder));
    alert("Item canceled from order ❌");
    loadData();
}

function clearBill() {
    localStorage.removeItem('currentOrder');
    alert("Bill cleared 🧾");
    loadData();
}

function loadData() {
    const container = document.getElementById("data");
    container.innerHTML = "";

    const existingOrder = JSON.parse(localStorage.getItem('currentOrder')) || { items: [], total: 0 };
    const items = existingOrder.items;

    items.forEach((item, index) => {
        const div = document.createElement("div");
        const img = document.createElement("img");
        img.src = item.image;
        img.alt = item.name;
        const namePara = document.createElement("p");
        namePara.textContent = `Name: ${item.name}`;
        const pricePara = document.createElement("p");
        pricePara.textContent = `Price: ${item.price}`;

        const cancelButton = document.createElement("button");
        cancelButton.textContent = 'Cancel';
        cancelButton.onclick = function () {
            cancelItem(index);
        };

        div.appendChild(img);
        div.appendChild(namePara);
        div.appendChild(pricePara);
        div.appendChild(cancelButton);

        container.appendChild(div);
    });

    const totalPara = document.createElement("p");
    totalPara.textContent = `Total: ${existingOrder.total}`;
    container.appendChild(totalPara);

    // Add clear bill button
    const clearBillButton = document.createElement("button");
    clearBillButton.textContent = 'Clear Bill';
    clearBillButton.onclick = clearBill;
    container.appendChild(clearBillButton);
}