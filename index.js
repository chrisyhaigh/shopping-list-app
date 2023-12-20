
let inputField = document.getElementById('input-field');
let addList = document.getElementById('add-list-btn');
let listItems = document.getElementById('list-items');

let itemsArray = [];

addList.addEventListener('click', function() {
    let inputValue = inputField.value;

    if (inputValue.length > 0) {
        addToCart(inputValue);
        itemsArray.push(inputValue);
        clearInput();
        console.log('Current Items: ', itemsArray)
    }
})

inputField.addEventListener('keydown', function(event) {
    let inputValue = inputField.value;

    if (event.key === 'Enter') {
        addToCart(inputValue);
        itemsArray.push(inputValue);
        clearInput();
        console.log('Current Items: ', itemsArray)
    }

});

listItems.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        removeItem(event.target);
    }    
})


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

function removeItem(item) {
    listItems.removeChild(item);
    itemsArray.splice(itemsArray.indexOf(item.textContent), 1);
    console.log('Current Items: ', itemsArray);
}



