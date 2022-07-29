window.onload = init;

function handleButtonClick() {
    alert("Button was clicked!");
}

function init() {
  var button = document.getElementById("addButton");
  button.onclick = handleButtonClick;
}