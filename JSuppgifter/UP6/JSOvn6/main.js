function showMeal(meal){
    meal = document.getElementById("food").value;
    if(meal.length > 0){
        if(meal == "morgonmål" || meal == "lunch" || meal == "middag" || meal == "kvällsmål"){
            document.getElementById("mealdis").innerHTML = meal + " is morgonmål, lunch, middag or kvällsmål";
        }else{
            document.getElementById("mealdis").innerHTML = meal;
        }
    }else{
        document.getElementById("mealdis").innerHTML = "no input";
    }
}

function calc() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let op = document.getElementById("op").value;
    let calculate;

    if (op == "+") {
        calculate = (num1 + num2).toFixed(2);
    } else if (op == "-") {
        calculate = (num1 - num2).toFixed(2);
    } else if (op == "/") {
        calculate = (num1 / num2).toFixed(2);
    } else if (op == "*") {
        calculate = (num1 * num2).toFixed(2);
    }

    document.getElementById("calcdis").innerHTML = calculate;
}

function diff(){
const oneDay = 24*60*60*1000 // timmar*minuter*sekunder*millisekunder
let year1 = parseInt(document.getElementById("year1").value);
let month1 = parseInt(document.getElementById("month1").value);
let day1 = parseInt(document.getElementById("day1").value);
let year2 = parseInt(document.getElementById("year2").value);
let month2 = parseInt(document.getElementById("month2").value);
let day2 = parseInt(document.getElementById("day2").value);
let firstDate = new Date(year1,month1,day1);
let secondDate = new Date(year2,month2,day2);
let diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
document.getElementById("diffdis").innerHTML = diffDays;
}

function bdiff(){
let byear = parseInt(document.getElementById("year").value);
let bmonth = parseInt(document.getElementById("month").value);
let bday = parseInt(document.getElementById("day").value);
let year = new Date().getFullYear();
let month = new Date().getMonth();
let day = new Date().getDate();
let today = new Date(year,month,day);
let birthday = new Date(byear,bmonth,bday);
const oneDay = 24*60*60*1000;
let diffDays = Math.round(Math.abs((today.getTime() - birthday.getTime())/(oneDay)));
document.getElementById("bdiffdis").innerHTML = diffDays;
}

let age = prompt("enter age");
if(age > 17){
    document.getElementById("age").innerHTML = "du är myndig";
}else{
    document.getElementById("age").innerHTML = "baby mode activated";
}