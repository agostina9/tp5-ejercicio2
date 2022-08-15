let formulario = document.querySelector('#formulario');
console.log(formulario);
formulario.addEventListener('submit', crearPersona);

function crearPersona(e){
     e.preventDefault();
    console.log('desde funcion persona');
    let nombreIngresado = document.querySelector('#inputNombre').value;
    console.log(nombreIngresado)
    let edadIngresado = document.querySelector('#inputEdad').value;
    console.log(edadIngresado)
    let generoIngresado = document.querySelector('#inputGenero').value;
    console.log(generoIngresado)
    let pesoIngresado = document.querySelector('#inputPeso').value;
    console.log(pesoIngresado);
    let alturaIngresado = document.querySelector('#inputAltura').value;
    console.log(alturaIngresado);
    let nacimientoIngresado = document.querySelector('#inputNacimiento').value;
    console.log(nacimientoIngresado);}


class Persona {
    constructor(nombre, edad, sexo, peso, altura, fechaNacimiento) {
      this.nombre = nombreIngresado;
      this.edad = edadIngresado;
      this.dni = this.generaDNI();
      this.sexo = generoIngresado;
      this.peso = pesoIngresado;
      this.altura = alturaIngresado;
      this.fechaNacimiento = nacimientoIngresado;
    }
    
  
  
    mostrarDetalleGeneracion(generacion, marcoTemporal, historia, rasgo) {
      return `<ul>
      <li> Generación: ${generacion}</li>
      <li> Marco temporal:  ${marcoTemporal} </li>
      <li> Circunstancia histórica:  ${historia}</li>
      <li> Rasgo característico: ${rasgo} </li>
    </ul>
    `;
    }
    mostrarGeneracion() {
      if (this.fechaNacimiento >= 1930 && this.fechaNacimiento <= 1948) {
        return this.mostrarDetalleGeneracion(
          "Silent Generation",
          "1930-1948",
          "Conflictos bélicos",
          "Austeridad 😐"
        );
      } else if (this.fechaNacimiento >= 1949 && this.fechaNacimiento <= 1968) {
        return this.mostrarDetalleGeneracion(
          "baby Boom",
          "1949-1968",
          "Paz y explosión demográfica",
          "Ambicion 🤑"
        );
      } else if (this.fechaNacimiento >= 1969 && this.fechaNacimiento < 1980) {
        return this.mostrarDetalleGeneracion(
          "Generación X",
          "1969 - 1980",
          "Crisis del 73 y transición española",
          "Obsesión por el exito 😎"
        );
      } else if (this.fechaNacimiento >= 1981 && this.fechaNacimiento < 1993) {
        return this.mostrarDetalleGeneracion(
          "Generación Y (Millenials)",
          "1981 - 1993",
          "Inicio de la digitalización",
          "Frustración 😕"
        );
      } else if (this.fechaNacimiento >= 1994 && this.fechaNacimiento < 2010) {
        return this.mostrarDetalleGeneracion(
          "Generación Z (Centennials)",
          "1994 - 2010",
          "Expansión masiva de internet",
          "Irreverencia 😋"
        );
      } else if (this.fechaNacimiento >= 2011) {
        return this.mostrarDetalleGeneracion(
          "Generación Alfa",
          "2011 - Actualidad",
          "Nativos Digitales al 100%",
          "Son predilectos 😜"
        );
      } else {
        return '<p>No se posee datos para la fecha seleccionada</p>';
      }
    }
  
    esMayorDeEdad() {
      if (this.edad >= 21) {
        return true;
      } else {
        return false;
      }
    }
  
    mostrarDatos() {
      return `<ul>
        <li>Persona</li>
        <li>Nombre: ${this.nombre}</li>
        <li>Edad: ${this.edad}</li>
        <li>DNI: ${this.dni}</li>
        <li>Genero: ${this.sexo}</li>
        <li>Peso: ${this.peso} Kg</li>
        <li>Altura: ${this.altura} Cm</li>
        <li>Año de nacimiento: ${this.fechaNacimiento}</li>
        </ul>
        `;
    }
  
    generaDNI() {
      return parseInt(Math.random() * 99999999);
    }
  }
  
//   document.write(personaNueva.mostrarDatos());
//   document.write(
//     `<p>La persona es mayor de edad: ${
//       personaNueva.esMayorDeEdad ? "Si" : "No"
//     }</p>`
//   );
//   document.write(personaNueva.mostrarGeneracion());


