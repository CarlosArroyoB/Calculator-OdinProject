const botonesNumericos = document.querySelectorAll('.botonNum');

let numero = '';
// Iterar sobre cada botón numérico y agregar un evento click
botonesNumericos.forEach(boton => {
  boton.addEventListener('click', () => {
    let digito = boton.textContent;
    numero += digito;
    console.log(numero);
    console.log(`suma mas 1: ${parseInt(numero)+1}`)
  });
});

let acum = 0;