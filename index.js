//Sets up Firebase Database

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: 'https://shoppingcart-a5a12-default-rtdb.europe-west1.firebasedatabase.app/'
}

const app = initializeApp(appSettings);
const dataBase = getDatabase(app);
const itemsInDB = ref(dataBase, "shopping");

//

let inputField = document.getElementById('input-field');
let addList = document.getElementById('add-list-btn');
let listItems = document.getElementById('list-items');

addList.addEventListener('click', function() {
    let inputValue = inputField.value;

    push(itemsInDB, inputValue);
    addToCart(inputValue);
    clearInput();
})

inputField.addEventListener('keydown', function(event) {
    let inputValue = inputField.value;

    if (event.key === 'Enter') {
        addToCart(inputValue);
        clearInput();
    }
});

function clearInput() {
    inputField.value = '';
}

function addToCart(item) {
    if (item.length > 0) {
        let list = document.createElement('li');
        list.textContent = item;
        listItems.appendChild(list);
    }
}

