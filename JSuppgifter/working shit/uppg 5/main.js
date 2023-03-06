function math(){
    let i = 1;
    let a = 0;
    let numb1 = prompt("enter a number");
    for(i = 1; numb1 >= i; i++){
        if(i <= numb1){
            a = a + i;
        }
    }
    document.getElementById("sum").innerHTML = "svaret är " + a;
}