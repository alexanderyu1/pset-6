//when user inputs something to the list
var array = [];

function newInput() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("input").value;
  array.push(inputValue);
  var text = document.createTextNode(inputValue);
  li.appendChild(text);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("unorderList").appendChild(li);
  }
  document.getElementById("input").value = "";
