var a = 0;
var b = 1;
console.log(a + " ");
console.log(b + " ");
for(var i=3;i<=10;i++){
    var c = a+b;
    console.log(c + " ");
    a = b;
    b = c;
}