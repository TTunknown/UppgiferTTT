function showMeal(meal){
    console.log(meal);
    return meal;
}
showMeal("morgonmål");

function calc() {
    var num1 = parseInt(document.querySelector("#value1").value);
    var num2 = parseInt(document.querySelector("#value2").value);
        var op = document.querySelector("#operator").value;

        var calculate;

        if (op == "add") {
            calculate = num1 + num2;
        } else if (op == "min") {
            calculate = num1 - num2;
            } else if (op == "div") {
                calculate = num1 / num2;
            } else if (op == "mult") {
                calculate = num1 * num2;
                }

    console.log(calculate);
    document.querySelector("#calcresult").innerHTML = calculate;
}  

let d = new Date();
document.getElementById("today").innerHTML = d;

function timeUpdate() {
	var d = new Date();

		var hours = d.getHours();
			minutes = d.getMinutes();
			seconds = d.getSeconds();

		var dt = [hours, minutes, seconds];
		var date = dt.join(":");

	document.getElementById("timearea").innerHTML = date;

	setTimeout(timeUpdate, 1000);
}
window.onload = timeUpdate();

function dagensDag(){ 
const d = new Date();
const weekday= ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];


const x = document.getElementById("dag");
x.innerHTML = d.getMonth().toString() + " " + d.getFullYear().toString();
}

let celsius = prompt("enter c");
let farenheit = Math.floor(celsius * (9/5) + 32);
console.log(farenheit);
let farenheit2 = prompt("enter f");
let celsius2 = Math.floor((farenheit2 - 32) * (5/9));
console.log(celsius2);