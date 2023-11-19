
// var vardas = "Gytis"
// if(vardas.length < 5){
// console.log("Short Name");
// }
// else{
// console.log("Long Name");
// }

var vardas = "Gytis"
vardas.length < 5 ? console.log("Short Name") : console.log ("Long Name")

var clientAge = 22
var legalAge = 18
clientAge >=  legalAge ? console.log("Can Drive") : console.log ("Can't Drive")
if(clientAge <= 0 || clientAge >= 120){ console.log("Invalid Age");}
else {console.log("");
}


 var phone = prompt("Phone model", "iphone");

 if (phone.toLocaleLowerCase() == "iphone"){
    var iphone = true;
    console.log("Iphone User")
 } else {
    var iphone = false;
    console.log("Other")
 }