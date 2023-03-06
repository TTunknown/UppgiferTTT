// Get data with the help of value
let select = document.getElementById("language");
let value = select.options[select.selectedIndex].value;
console.log(value);

function getText() {
  let select2 = document.getElementById("language");
    let text = select2.options[select.selectedIndex].text;
    document.getElementById("ex2").innerHTML = text;
    alert("Du har valt " + text + " som språk");
}

function updateResult() {
  let select3 = document.getElementById("language");
  let option = select3.options[select.selectedIndex];

  document.getElementById("value").value = option.value;
  document.getElementById("text").value = option.text;
}
