var newItem = document.getElementById("newItem");
document.getElementById("addItemBtn").addEventListener("click", addItem);
var deleteButtons = document.getElementsByClassName("btn-danger");
var newItemNum = 5;

for(var i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].addEventListener("click", function(e) {
    var raw = document.getElementById(e.target.getAttribute("rawLink"));
    raw.parentNode.removeChild(raw);
    newItemNum--;
    });
}

function addItem(){
  var ul = document.getElementById("toDoList");
  var li = document.createElement("li");
  ul.appendChild(li);
  li.innerHTML = '<input class="checkboxes" type="checkbox" />'+' '+newItem.value+' '+'<button rawLink="r'+newItemNum+'" value="Delete"class="btn btn-danger btn-xs">Delete</button>';
  li.setAttribute("id", "r"+newItemNum);
  newItemNum ++;
  for(var i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].addEventListener("click", function(e) {
    var raw = document.getElementById(e.target.getAttribute("rawLink"));
    raw.parentNode.removeChild(raw);
    newItemNum--;
    });
  }
  document.getElementById("newItemForm").reset();
  var checkboxes = document.getElementsByClassName("checkboxes");
  for(var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("click", strikeThrough);
  }
}

var checkboxes = document.getElementsByClassName("checkboxes");
for(var i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener("click", strikeThrough);
}


function strikeThrough(){
  var checkboxes = document.getElementsByClassName("checkboxes");
  var checkboxes = document.getElementsByClassName("checkboxes");
  var itemClass = this.parentNode.getAttribute("class");
  if (itemClass === "str"){
  this.parentNode.setAttribute("class", "null");
  }
  else{
    this.parentNode.setAttribute("class", "str");
  }
}