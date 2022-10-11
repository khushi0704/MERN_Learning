var n1 = prompt("Enter your name : ");
var n2 = prompt("Enter other name : ");
var rand = Math.random();
rand = rand * 100;
alert("Your love score is : " + rand + "%");
if(rand>70){
    alert("wow");
}
else{
    alert("no");
}