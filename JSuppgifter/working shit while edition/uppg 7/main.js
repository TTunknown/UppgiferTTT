function math(){
    let i = 1;
    let a = 0;
    let flip = 1;
    let numb1 = prompt("enter two numbers");
    let part1 = numb1.substring(0,1);
    let part2 = numb1.substring(1,2);
    //and delen av koden gör så att koden fungerar fast du skulle ha ett större värde först, men det är ändå visat som positivt
    //koden tar bara första två siffrorna från prompten, den ignorerar resten
    while (numb1 >= i){
        if((i >= part1 && i <= part2) || (i <= part1 && i >= part2)){
            a = a + (i * flip);
            flip = flip * -1;
        }
        i++;
    }
    document.getElementById("sum").innerHTML = "svaret är " + a;
}
