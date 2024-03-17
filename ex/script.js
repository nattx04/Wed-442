document.addEventListener("DOMContentLoaded", function(){
    loadMenuItems();
    setupPayBillButton();
    updateOrdersDisplay();
});

function loadMenuItems() {
    fetch('menu.json')
    .then((response) => response.json())
    .then((menuItems) => {
        const menuContainer = document.querySelector(".menu");
        menuContainer.innerHTML = "";

        menuItems.forEach((item) => {
            const menuItemsElement = document.createElement("div");
            menuItemsElement.classList.add("menu-item");
            menuItemsElement.innerHTML = `
                <img src="${item.imgSrc}" alt="${item.name}" />
                <h2>${item.name}</h2>
                <p>${item.price}</p>`;
            menuContainer.appendChild(menuItemsElement);

            menuItemsElement.addEventListener("click", function() {
                let orders = JSON.parse(localStorage.getItem("customersOrders")) || [];
                const existingOrderIndex = orders.findIndex(
                    (order) => order.name === item.name
                );

                if (existingOrderIndex !== -1) {
                    orders[existingOrderIndex].quantity += 1;
                } else {
                    orders.push({ name: item.name, price: item.price, quantity: 1 });
                }

                localStorage.setItem("customersOrders", JSON.stringify(orders));
                updateOrdersDisplay();
            });
        });
    });
}

function updateOrdersDisplay(){
    const ordersPanel = document.querySelector("orders-penel");
    const orderList = document.getElementById('orders-list');
    const totalCostELemnt = document.getElementById("totel-cost");
    let order = JSON.parse(localStorage.getItem('customerOrders')) || [];
    let totalCost = 0;

    orderList.innerHTML = "";

    order.forEach((order) => {
        console.log(order);
        const li = document.createElement('li')
        li.textContent = `${order.name} - Quantity: ${order.quantity} - Price: ${order.price}`;
        orderList.appendChild(li);

        const price = parseFloat(order.price.replace("$",""));
        totalCost += price * order.quantity 
    });

    totalCostELemnt.textContent = `Totel Cost: $${totalCost.toFixed(2)}`;
}

function setupPayBillButton() {
    const payBillButton = document.getElementById("pay-bill-btn");
    payBillButton.addEventListener('click', function (){
        //localStorage.clear();
        localStorage.removeItem("customerOrders");
        updateOrdersDisplay();
    })
}