function multiply() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let parsemult = parseInt(num1) * parseInt(num2);

    let result = document.getElementById("result").innerHTML = parsemult;
    return result;
}

function divide() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let parsediv = parseInt(num1) / parseInt(num2);

    let result = document.getElementById("result").innerHTML = parsediv;
    return result;
}

function addition() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let parseplus = parseInt(num1) + parseInt(num2);

    let result = document.getElementById("result").innerHTML = parseplus;
    return result;
}

function minus() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let parsemin = parseInt(num1) - parseInt(num2);

    let result = document.getElementById("result").innerHTML = parsemin;
    return result;
}
