let dato = document.getElementById("dato");
let btnNum = document.getElementById("btnNum");

btnNum.addEventListener("click" , () => {
let numIngresado : number = Number(dato.value) ;

if(numIngresado % 2 == 0 && numIngresado != 0) {
  console.log("El numero ingresado es par");
} else {
  if(numIngresado == 0) {
    console.log("El numero ingresado es cero");
  }
  else {
  if(numIngresado % 2 != 0 ) {
    console.log("El numero ingresado es impar");
  }
}






})