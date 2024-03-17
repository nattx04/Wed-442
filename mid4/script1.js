const items = [
  { name: "Apple", category: "Fruit", price: 1 },
  { name: "Carrot", category: "Vegetable", price: 0.5 },
  { name: "Banana", category: "Fruit", price: 0.8 },
  { name: "Cucumber", category: "Vegetable", price: 1.2 },
  { name: "Orange", category: "Fruit", price: 0.9 },
  { name: "Tomato", category: "Vegetable", price: 0.7 },
  { name: "Lettuce", category: "Vegetable", price: 0.3 },
  { name: "Grapes", category: "Fruit", price: 2 },
  { name: "Mushroom", category: "Vegetable", price: 1.5 },
  { name: "Strawberry", category: "Fruit", price: 1.8 },
  { name: "Blueberry", category: "Fruit", price: 2.5 },
  { name: "Potato", category: "Vegetable", price: 0.4 },
  { name: "Broccoli", category: "Vegetable", price: 1.1 },
  { name: "Mango", category: "Fruit", price: 1.7 },
  { name: "Spinach", category: "Vegetable", price: 0.6 },
  { name: "Cherry", category: "Fruit", price: 2.2 },
  { name: "Peas", category: "Vegetable", price: 0.9 },
  { name: "Peach", category: "Fruit", price: 1.3 },
  { name: "Pineapple", category: "Fruit", price: 1.5 },
  { name: "Celery", category: "Vegetable", price: 0.8 },
];

document.addEventListener('DOMContentLoaded', function() {

  const pricesWithTax = items.map(item => ({
    ...item,
    priceWithTax: item.price * 1.07 // 7% tax
  }));

  const sortedItems = items.sort((a, b) => a.price - b.price);

  const fruits = items.filter(item => item.category === 'Fruit');

  const expensiveFruit = items.find(item => item.category === 'Fruit' && item.price > 2);

  const totalVegetablePrice = items.reduce((accumulator, item) => {
    if (item.category === 'Vegetable') {
      return accumulator + item.price;
    }
    return accumulator;
  }, 0);

  displayResults(pricesWithTax, sortedItems, fruits, expensiveFruit, totalVegetablePrice);
});

function displayResults(pricesWithTax, sortedItems, fruits, expensiveFruit, totalVegetablePrice) {
  const resultElement = document.getElementById('result');

  resultElement.innerHTML += '<h2>1. Map: Prices with Tax</h2>';
  pricesWithTax.forEach(item => {
    resultElement.innerHTML += `<p>${item.name}: ${item.priceWithTax.toFixed(2)}</p>`;
  });

  resultElement.innerHTML += '<h2>2. Sort: Sorted Items by Price</h2>';
  sortedItems.forEach(item => {
    resultElement.innerHTML += `<p>${item.name}: ${item.price}</p>`;
  });

  resultElement.innerHTML += '<h2>3. Filter: Fruits</h2>';
  fruits.forEach(item => {
    resultElement.innerHTML += `<p>${item.name}</p>`;
  });


  resultElement.innerHTML += '<h2>4. Find: Expensive Fruit</h2>';
  if (expensiveFruit) {
    resultElement.innerHTML += `<p>${expensiveFruit.name}: ${expensiveFruit.price}</p>`;
  } else {
    resultElement.innerHTML += '<p>No expensive fruit found.</p>';
  }


  resultElement.innerHTML += '<h2>5. Reduce: Total Vegetable Price</h2>';
  resultElement.innerHTML += `<p>Total Vegetable Price: ${totalVegetablePrice.toFixed(2)}</p>`;
}