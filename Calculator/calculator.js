let calcstring ="";

document.getElementById("buttons").addEventListener("click", update);
document.getElementById("1").addEventListener("click", e => calcstring = calcstring.concat(1));
document.getElementById("2").addEventListener("click", e => calcstring = calcstring.concat(2));
document.getElementById("3").addEventListener("click", e => calcstring = calcstring.concat(3));
document.getElementById("4").addEventListener("click", e => calcstring = calcstring.concat(4));
document.getElementById("5").addEventListener("click", e => calcstring = calcstring.concat(5));
document.getElementById("6").addEventListener("click", e => calcstring = calcstring.concat(6));
document.getElementById("7").addEventListener("click", e => calcstring = calcstring.concat(7));
document.getElementById("8").addEventListener("click", e => calcstring = calcstring.concat(8));
document.getElementById("9").addEventListener("click", e => calcstring = calcstring.concat(9));
document.getElementById("0").addEventListener("click", e => calcstring = calcstring.concat(0));
document.getElementById("x").addEventListener("click", e => calcstring = calcstring.concat("x"));
document.getElementById("-").addEventListener("click", e => calcstring = calcstring.concat("-"));
document.getElementById("/").addEventListener("click", e => calcstring = calcstring.concat("/"));
document.getElementById("+").addEventListener("click", e => calcstring = calcstring.concat("+"));

document.getElementById("enter").addEventListener("click", function(){
    document.getElementById("calc").innerText = eval(calcstring);
});

function update(){
    console.log("update")
    document.getElementById("calc").innerText = calcstring;
}
