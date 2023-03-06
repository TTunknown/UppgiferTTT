function math(){
    i = 1;
    a = 0;
    for(i=1; i <= 100; i++){
        if(i <= 100){
            a = a + i;
        }
    }
    document.getElementById("answer").innerHTML = "<br>" + a;
}