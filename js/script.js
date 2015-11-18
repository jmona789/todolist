var newItem = document.getElementById("newItem");
document.getElementById("addItemBtn").addEventListener("click", addItem);

function addItem(){
  var ul = document.getElementById("toDoList");
  var li = document.createElement("li");
  ul.appendChild(li);
  li.innerHTML = '<input type="checkbox" />'+' '+newItem.value+' '+'<button class="btn btn-danger btn-xs">Delete</button>'
  document.getElementById("newItemForm").reset();
}

