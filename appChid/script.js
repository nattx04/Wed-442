const container = document.getElementById("container");
const button = document.createElement("button");
const table = document.getElementById("myTable");

console.log(name, age);

button.textContent = 'Click me!';
button.id = 'myButton';
container.appendChild(button);

button.addEventListener('click', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById("name").value;
    const ageInput = document.getElementById("age").value;

    const Myrow = table.insertRow();
    const cell1 = Myrow.insertCell(0);
    const cell2 = Myrow.insertCell(1);

    cell1.textContent = nameInput;
    cell2.textContent = ageInput;

    // Clear input values
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
});

