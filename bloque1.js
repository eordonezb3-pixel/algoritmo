//1 Contar caracteres de una frase publicitaria

function contarCaracteres() {
  let frase = prompt("Escribe una frase publicitaria:");
  let cantidad = frase.length;
  alert("La frase tiene " + cantidad + " caracteres.");
}
contarCaracteres();

//2 Contar apariciones de una vocal en un título

function contarVocal() {
  let titulo = prompt("Escribe un título:");
  let vocal = prompt("¿Qué vocal quieres contar? (a, e, i, o, u)");
  // Convertimos ambos a minúsculas para que la búsqueda no falle por mayúsculas
  titulo = titulo.toLowerCase();
  vocal = vocal.toLowerCase();
  let contador = 0;
  for (let i = 0; i < titulo.length; i++) {
    if (titulo[i] === vocal) {
      contador++;
    }
  }
  alert("La vocal '" + vocal + "' aparece " + contador + " veces.");
}
contarVocal();

//3 Invertir un nombre de producto

function invertirNombre() {
  let producto = prompt("Escribe el nombre de un producto:");
  let invertido = "";
  for (let i = producto.length - 1; i >= 0; i--) {
    invertido += producto[i];
  }
  alert("El nombre invertido es: " + invertido);
}
invertirNombre();

//4 Comparar nombres de ciudades por longitud

function compararCiudades() {
  let ciudad1 = prompt("Escribe el nombre de la primera ciudad:");
  let ciudad2 = prompt("Escribe el nombre de la segunda ciudad:");
  let longitud1 = ciudad1.length;
  let longitud2 = ciudad2.length;
  if (longitud1 > longitud2) {
    alert("La palabra '" + ciudad1 + "' tiene más letras.");
  } else if (longitud2 > longitud1) {
    alert("La palabra '" + ciudad2 + "' tiene más letras.");
  } else {
    alert("Ambas ciudades tienen la misma cantidad de letras.");
  }
}
compararCiudades();

//5 Obtener iniciales de un cargo profesional

function obtenerIniciales() {
  let cargo = prompt("Escribe un cargo profesional:");
  // Separamos el cargo por espacios
  let palabras = cargo.split(" ");
  let iniciales = "";
  for (let i = 0; i < palabras.length; i++) {
    // Tomamos la primera letra de cada palabra y la pasamos a mayúscula
    iniciales += palabras[i][0].toUpperCase() + ".";
  }
  alert("Las iniciales son: " + iniciales);
}
obtenerIniciales();
