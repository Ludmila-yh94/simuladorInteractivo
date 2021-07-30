var notas = [];
var i;
for (i = 0; i < 10; i++) {
    notas.push(Number(prompt("Ingresa tu nota:" + (i + 1), "1-7")));
}
var suma = notas.reduce(function(total, cantidad) {
    return total + cantidad
});

var promedio = (suma / (notas.length)).toFixed(1);
var estado;
if (promedio >= 4.0) {
    estado = ("Aprobado");
} else {
    estado = ("Reprobado");
}
document.write("Alumno 1 tus notas son: " + notas + "<br>" + "Tu Promedio es: " + promedio + "<br>" + "Estado: " + estado + "<br>");

alert(estado);
var notas = [];
var i;
for (i = 0; i < 10; i++) {
    notas.push(Number(prompt("Ingresa tu nota:" + (i + 1), "1-7")));
}
var suma = notas.reduce(function(total, cantidad) {
    return total + cantidad
});

var promedio = (suma / (notas.length)).toFixed(1);
var estado;
if (promedio >= 4.0) {
    estado = ("Aprobado");
} else {
    estado = ("Reprobado");
}
document.write("Alumno 2 tus notas son: " + notas + "<br>" + "Tu Promedio es: " + promedio + "<br>" + "Estado: " + estado + "<br>");

alert(estado);

let persona;

function Persona(nombre,apellido,edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

function ingresarDatos(){
    let nombre1 = prompt("ingrese su nombre");
    let apellido1 = prompt("ingrese su apellido");
    let edad1 = parseInt(prompt("ingrese su edad"));

    let nombre2 = prompt("ingrese su nombre");
    let apellido2 = prompt("ingrese su apellido");
    let edad2 = parseInt(prompt("ingrese su edad"));

    persona1 = new Persona(nombre1,apellido1,edad1);
    persona2 = new Persona(nombre2,apellido2,edad2);
}
ingresarDatos();
alert("El Alumno 1 se llama "  + persona1.nombre +  " y su estado es " +  estado);
alert("El Alumno 2 se llama "  + persona2.nombre +  " y su estado es " +  estado);
