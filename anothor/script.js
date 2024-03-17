document.addEventListener("DOMContentLoaded", loadData);

function saveData() {
    const key = document.getElementById('inputKey').value;
    const value = document.getElementById('inputValue').value;
    localStorage.setItem(key, value);
    alert("Data saved :hand_with_index_finger_and_thumb_crossed:");
}

function clearData() {
    localStorage.clear();
    loadData();
    alert("All data cleared :sake:");
}

function loadData() {
     const container = document.getElementById("data");
    container.innerHTML = "";

    const keys = Object.keys(localStorage).sort();

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const value = localStorage.getItem(key);

        const div = document.createElement("div");
        div.textContent = `Key: ${key}, Value: ${value}`;
        const removeButton = document.createElement("button");
        removeButton.textContent = 'Remove';
        removeButton.onclick = function () {
            localStorage.removeItem(key);
            loadData();
        };
        div.appendChild(removeButton);
        container.appendChild(div);
    }
}
