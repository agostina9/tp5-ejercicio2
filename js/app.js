import {Persona} from './classPersona.js'
let formulario = document.querySelector('#formulario');
let nombreIngresado = document.querySelector('#inputNombre');
let edadIngresado = document.querySelector('#inputEdad');
let dniIngresado = document.querySelector('#inputDni');
let generoIngresado = document.querySelector('#inputGenero');
let pesoIngresado = document.querySelector('#inputPeso');
let alturaIngresado = document.querySelector('#inputAltura');
let nacimientoIngresado = document.querySelector('#inputNacimiento');
let btnmostrarGeneracion= document.getElementById('mostrarGeneracion')

formulario.addEventListener('submit', crearPersona);

function crearPersona(e){
     e.preventDefault();
    console.log('desde funcion persona');
    const nuevaPersona = new Persona(
      nombreIngresado.value,
      edadIngresado.value,
      dniIngresado.value,
      generoIngresado.value,
      pesoIngresado.value,
      alturaIngresado.value,
      nacimientoIngresado.value
    );
    console.log(nuevaPersona)
    formulario.reset();

    btnmostrarGeneracion.addEventListener("click", () => {
      let panelDatos = document.querySelector("#detalle");
      panelDatos.innerHTML = nuevaPersona.mostrarGeneracion();
    });
  ;}



