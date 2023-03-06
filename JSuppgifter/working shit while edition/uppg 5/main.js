function math(){
    let i = 1;
    let a = 0;
    let numb1 = prompt("enter a number");
    while (numb1 >= i){
        if(i <= numb1){
            a = a + i;
        }
        i++;
    }
    document.getElementById("sum").innerHTML = "svaret är " + a;
}
