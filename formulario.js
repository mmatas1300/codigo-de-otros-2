const formulario = document.querySelector(".formulario")//se cambió la declaración por const | se cambio el nombre de la clase a .formulario
const nombreRef=formulario.elements[0];//Las referencias se hicieron globales
const edadRef = formulario.elements[1];
const nacionalidadRef = formulario.elements[2];


formulario.onsubmit = function(e) { 
 
  e.preventDefault();//Se completo el metodo preventDefault
  const nombre = nombreRef.value;//Se cambiaron a constantes y se añadió un nombre con mpas contexto
  const edad = edadRef.value;
  const nacionalidad = nacionalidadRef.options[nacionalidadRef.selectedIndex].value;

 if (validarDatos(nombre,edad,nacionalidad))//La validadción se realiza en una función
    agregarInvitado(nombre, edad, nacionalidad);//Agregar Invitado se subio de nivel
}

function agregarInvitado(nombre, edad, nacionalidad) {
//el valor de la nacionalidad se obtiene directamenet de HTML

const listaInvitadosRef = document.getElementById("lista-de-invitados") // Se cambia a const y en html se crea el ID

const elementoLista = document.createElement("div")
elementoLista.classList.added("elemento-lista")
lista.appendChild(elementoLista)

const spanNombre = document.createElement("span")
const inputNombre = document.createElement("input")
const espacio = document.createElement("br")
spanNombre.textContent = "Nombre: "
inputNombre.value = nombre 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)

function crearElemento(descripcion, valor) {
var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
}


const validarDatos = (nombre,edad,nacionalidad) =>{
  let isValid = true;
  if (nombre.length === 0) {
    nombreRef.classList.add("error")
    isValid = false; 
  }
  else if (edad < 18 || edad > 120 || edad == null) {//Las validaciones se cambiaron por else if | se añadió el caso en el que no ingresa un numero
    edadRef.classList.add("error")
    isValid = false;
  }//El ultimo caso es redundante, se cambio por el retorno de la función
  return isValid;
};



var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);

