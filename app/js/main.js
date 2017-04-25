(function() {
    console.log("I was called...");
    $("#content").append("Test");


  })();


var sum1 = 52;
var sum2 = 12;
var erg;
erg=sum1 % sum2;      //%=mod
document.write(erg);

/*var bool=Boolean(12 == 12);  //Vergleiche mit Boolean
window.alert(bool);*/


var a=15;
var b=15;
if (a<b){
window.alert("kleiner");}
else if (a==b) {window.alert("gleich");}
else if (a>b) {window.alert("größer");}
