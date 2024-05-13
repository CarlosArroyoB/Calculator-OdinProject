const botonesNumericos = document.querySelectorAll('.botonNum');
const botonSum = document.querySelector("#botonMas");
const display = document.querySelector(".display");

let numero1 = '';
let numero2 = '';
// Iterar sobre cada botón numérico y agregar un evento click

botonesNumericos.forEach(boton => {
  boton.addEventListener('click', () => {
    let digito = boton.textContent;
    numero1 += digito;
    console.log(numero1);
    console.log(`suma mas 1: ${parseInt(numero1)+1}`)
    display.innerHTML = `${numero1}`
  });
});

let acum = 0;