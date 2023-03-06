// 1


/*

let name = "Tuisku";

for (let i = 0; i < 10; i++) {
  document.getElementById("output").innerHTML += name + "<br>";
}

*/


// 2


/*

function nameAge(name = "Tuisku", x) {
  if (x === undefined) {
    x = 16;
  }
    for (let i = 0; i < x; i++) {
      document.getElementById("output").innerHTML += name + "<br>";
    }
}
window.onload = nameage();

*/


// 3


/*

function nameAge2(name, y) {
  let stringPrint = "";
    for (let i = 0; i < y; i++) {
      stringPrint += name;
    }
  return stringPrint;
}

document.getElementById("output").innerHTML = nameAge2("Tuisku", 16);

*/

// 4



function multiply() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let parsemult = parseInt(num1) * parseInt(num2);

    let result = document.getElementById("result").innerHTML = parsemult;
    return result;
}



// 5







// 6

/*

function sum() {
  let sums = 0;
    for (let i = 0; i < arguments.length; i++) {
      sums += arguments[i];
    }
  return sums;
}
document.getElementById("output").innerHTML = sum(5, 62, 128, 324, 70, 88);

*/









// other

/*

let names = ["Xingqiu", "Xiao", "Juju", "Shou", "Shouta", "Sakura"];

for (i = 0; i < names.length; i++) {

  if (names.length > 3) {
    console.log("The names are as following: " + names[i]);
  } else {
    console.log("The " + names + " have 3 or less letters.")
  }
}

*/
