// create an empty array to store the to-do list items
let todoList = [];

// check if the to-do list is saved in local storage
if (localStorage.getItem("todoList")) {
  // if it is, load the list from local storage
  todoList = JSON.parse(localStorage.getItem("todoList"));
}

// define a function to add an item to the to-do list
function addItem() {
  let item = document.getElementById("new-item").value;
  todoList.push(item);
  document.getElementById("new-item").value = "";
  saveList();
  displayList();
}

// define a function to remove an item from the to-do list
function removeItem(item) {
  let index = todoList.indexOf(item);
  if (index > -1) {
    todoList.splice(index, 1);
  }
  saveList();
  displayList();
}

// define a function to save the to-do list to local storage
function saveList() {
  localStorage.setItem("todoList", JSON.stringify(todoList));
}

// define a function to display the to-do list
function displayList() {
  let listElement = document.getElementById("todo-list");
  listElement.innerHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    let item = todoList[i];
    let listItem = document.createElement("li");
    listItem.innerHTML = item;
    let removeButton = document.createElement("button");
    removeButton.innerHTML = "Remove";
    removeButton.onclick = function() {
      removeItem(item);
    };
    listItem.appendChild(removeButton);
    listElement.appendChild(listItem);
  }
}

// add an event listener to the text input field to add the item when the user presses the enter key
document.getElementById("new-item").addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    addItem();
  }
});

// display the initial to-do list
displayList();