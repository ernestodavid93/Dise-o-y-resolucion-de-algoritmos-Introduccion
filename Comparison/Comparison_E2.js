let num = parseInt(prompt("Numero"));
let residuo = num % 4;
let residuo2 = num % 9;
if (residuo == 0 || residuo2 == 0) {
  console.log("true");
} else {
  console.log("false");
}
