const container = document.getElementById('container');
const img = document.createElement('img')

img.src = 'images.jpg';
img.alt = 'Green Dragon';

container.appendChild(img);

const fruits = ['Apple', 'Banana', 'Mango', 'Strawberry', 'Orange'];

const list = document.getElementById('List');

const li = document.getElementById('li');
fruits.forEach((fruit) => {
    const li = document.createElement('li');
    li.textContent = fruit;
    list.appendChild(li);
});