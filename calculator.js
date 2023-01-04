let num1;
let num2;
let result;

function getElement () {
   let num1 = Number(document.getElementById("num1").value);
   let num2 = Number(document.getElementById("num2").value);
}

function plus() {
getElement ();
}

result = plus(num1 + num2);

document.getElementById("result").innerHTML = result;