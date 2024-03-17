document.addEventListener("DOMContentLoaded", loadData);

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
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// เพิ่ม middleware เพื่อให้ Express สามารถอ่านข้อมูลในรูปแบบ JSON ได้
app.use(bodyParser.json());

// เมนูอาหาร 20 เมนู
const menu = {
    "pizza": 10.99,
    "burger": 8.49,
    "sushi": 15.99,
    "pasta": 12.99,
    "salad": 6.99,
    "steak": 19.99,
    "sandwich": 7.99,
    "tacos": 9.99,
    "fried chicken": 11.99,
    "soup": 5.99,
    "lasagna": 14.99,
    "fajitas": 13.49,
    "burrito": 10.49,
    "pad thai": 12.49,
    "ramen": 11.49,
    "pancakes": 8.99,
    "wings": 9.49,
    "sushi roll": 16.49,
    "nachos": 7.49,
    "pho": 10.99
};

// เส้นทาง API สำหรับเรียกดูเมนูทั้งหมด
app.get('/api/menu', (req, res) => {
    res.json(menu);
});

// เส้นทาง API สำหรับเรียกด


