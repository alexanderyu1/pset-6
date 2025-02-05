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
    document.getElementById("unorderedList").appendChild(li);
  }
  document.getElementById("input").value = "";

//remove button

  var remove = document.createElement("BUTTON");
  remove.innerHTML = "remove";
  remove.className = "remove";
  li.appendChild(remove);

 //exclamation button

  var span = document.createElement("SPAN");
  var exclamation = document.createTextNode("!");
  span.id = "exclamation";
  span.appendChild(exclamation);
  li.appendChild(span);

  var close = document.getElementsByClassName("remove");
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.remove();
    }
  }

  li.addEventListener('click', function(ev) {
    if (ev.target.id == "exclamation") {
      ev.target.classList.toggle('priority');
      if (ev.target.className == 'priority'){
        document.getElementById("unorderedList").prepend(ev.target.parentElement);
      }else{
        document.getElementById("unorderedList").append(ev.target.parentElement);
      }
    }
  }, false);

  li.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI'){
      ev.target.classList.toggle('checked');
    }
  }, false);

//check mark

  var span = document.createElement("SPAN");
  var check = document.createTextNode("v");
  span.id = "check";
  span.appendChild(check);
  li.appendChild(span);

  li.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI'){
      ev.target.classList.toggle('checked');
    }
  }, false);

  li.addEventListener('click', function(ev) {
      ev.target.classList.toggle('check');
  }, false);
}
