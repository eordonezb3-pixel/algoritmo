//Bloque 2 (versión con Arreglos del bloque1)

//1. Contar caracteres de varias frases publicitarias

function contarFrases() {
  let cantidadFrases = parseInt(prompt("¿Cuántas frases quieres ingresar?"));
  if (isNaN(cantidadFrases) || cantidadFrases <= 0) {
    alert("Debes ingresar un número válido.");
    return;
  }
  let frases = [];
  for (let i = 0; i < cantidadFrases; i++) {
    let texto = prompt("Ingresa la frase " + (i + 1) + ":");
    frases.push(texto);
  }
  for (let i = 0; i < frases.length; i++) {
    let frase = frases[i];
    let fraseSinEspacios = frase.replace(/\s+/g, ""); // quitar espacios
    let cantidad = fraseSinEspacios.length;
    alert('"' + frase + '" → ' + cantidad + ' caracteres.');
  }
}
contarFrases();

//2. Contar apariciones de una vocal en cada título

function contarVocalesEnTitulos() {
  let cantidadTitulos = parseInt(prompt("¿Cuántos títulos quieres ingresar?"));
  if (isNaN(cantidadTitulos) || cantidadTitulos <= 0) {
    alert("Debes ingresar un número válido.");
    return;
  }
  let titulos = [];
  // Ingresar títulos
  for (let i = 0; i < cantidadTitulos; i++) {
    let texto = prompt("Ingresa el título " + (i + 1) + ":");
    titulos.push(texto);
  }
  // Elegir vocal a contar
  let vocal = prompt("¿Qué vocal quieres contar? (a, e, i, o, u)");
  vocal = vocal.toLowerCase();
  // Contar apariciones en cada título
  for (let i = 0; i < titulos.length; i++) {
    let titulo = titulos[i].toLowerCase();
    let contador = 0;
    for (let j = 0; j < titulo.length; j++) {
      if (titulo[j] === vocal) {
        contador++;
      }
    }
    alert('"' + titulos[i] + '" → ' + contador + " veces la '" + vocal + "'.");
  }
}
contarVocalesEnTitulos();

//3. Invertir los nombres de varios productos

function invertirNombresProductos() {
  
    let cantidadProductos = parseInt(prompt("¿Cuántos productos quieres ingresar?"));
  
  if (isNaN(cantidadProductos) || cantidadProductos <= 0) {
    alert("Debes ingresar un número válido y mayor que cero.");
    return; 
  }
  let productos = [];
  
  for (let i = 0; i < cantidadProductos; i++) {
    let nombre = prompt("Ingresa el producto " + (i + 1) + ":");
    
    if (nombre === null) {
        alert("Ingreso cancelado.");
        return; 
    }

    productos.push(nombre);
  }
  for (let i = 0; i < productos.length; i++) {
    let productoOriginal = productos[i];
    let invertido = productoOriginal.split('').reverse().join('');
    alert('"' + productoOriginal + '" → "' + invertido + '"');
  }
}
invertirNombresProductos();

//4. Comparar longitudes de nombres de ciudades

/*
  Función para encontrar la ciudad con el nombre más largo,
  ingresando los datos separados por comas.
  Todas las variables están en español.
*/
function encontrarCiudadMasLargaPorComas() {
  
  // 1. Pedir la lista completa de ciudades en un solo prompt
  let entradaDelUsuario = prompt("Ingresa las ciudades separadas por comas (ej: Milagro,Guayaquil,Quito):");
  
  // 2. Validar si el usuario canceló o no escribió nada
  // .trim() quita espacios en blanco al inicio y al final
  if (entradaDelUsuario === null || entradaDelUsuario.trim() === "") {
    alert("No se ingresaron datos.");
    return; // Termina la función
  }
  
  // 3. Convertir el texto en un arreglo (array)
  // .split(',') divide el texto en cada coma
  // .map(nombre => nombre.trim()) limpia espacios de cada nombre
  const arregloDeCiudades = entradaDelUsuario.split(',').map(nombre => nombre.trim());

  // 4. Variables para guardar el resultado
  let nombreMasLargo = ""; 
  let conteoMaximoDeLetras = 0;  

  // 5. Recorremos el arreglo de ciudades que acabamos de crear
  for (const ciudadActual of arregloDeCiudades) {
    
    // Comparamos la longitud de la ciudad actual con la máxima
    if (ciudadActual.length > conteoMaximoDeLetras) {
        // Si es más larga, la guardamos como la nueva ganadora
        conteoMaximoDeLetras = ciudadActual.length;
        nombreMasLargo = ciudadActual;
    }
  }
  
  // 6. Mostramos el resultado final
  if (nombreMasLargo === "") {
    // Esto pasaría si el usuario solo ingresa comas o espacios
    alert("No se pudo identificar una ciudad válida.");
  } else {
    // Usamos el '+' para concatenar, como en tu ejemplo
    alert("La ciudad con más letras es '" + nombreMasLargo + "' (" + conteoMaximoDeLetras + " letras).");
  }
}

// Llamamos a la función para que inicie
encontrarCiudadMasLargaPorComas();

//5. Obtener iniciales de varios cargos profesionales

/*
  Función para obtener iniciales de cargos profesionales,
  ingresando los datos separados por comas.
  (Versión con variables en español)
*/
function obtenerInicialesPorComas() {
  
  // 1. Pedir la lista completa de cargos en un solo prompt
  let entradaDelUsuario = prompt("Ingresa los cargos separados por comas (ej: Director General,Jefe de Laboratorio):");
  
  // 2. Validar si el usuario canceló o no escribió nada
  if (entradaDelUsuario === null || entradaDelUsuario.trim() === "") {
    alert("No se ingresaron datos.");
    return; // Termina la la función
  }
  
  // 3. Convertir el texto en un arreglo de cargos
  // .split(',') divide por comas
  // .map(cargo => cargo.trim()) limpia espacios al inicio/final de cada cargo
  const arregloDeCargos = entradaDelUsuario.split(',').map(cargo => cargo.trim());

  // 4. Recorrer el arreglo de cargos que acabamos de crear
  for (const cargoActual of arregloDeCargos) {
    
    // 5. Omitir si la entrada está vacía (ej: si el usuario pone "Cargo1,,Cargo2")
    if (cargoActual === "") {
        continue; // Salta a la siguiente iteración del bucle
    }

    // 6. --- Lógica principal para obtener iniciales ---
    
    // a. Separar el cargo en palabras usando el espacio
    // "Jefe de Laboratorio" -> ["Jefe", "de", "Laboratorio"]
    const arregloDePalabras = cargoActual.split(' ');
    
    // b. Obtener la primera letra de cada palabra y ponerla en mayúscula
    // .map() crea un nuevo arreglo con los resultados
    const arregloDeIniciales = arregloDePalabras.map(palabra => {
         // [0] toma la primera letra
         // .toUpperCase() asegura que "de" se convierta en "D", como en tu ejemplo
         return palabra[0].toUpperCase(); 
    });
    
    // c. Unir las iniciales con un punto y agregar el punto final
    // ["J", "D", "L"] -> "J.D.L."
    const inicialesFormateadas = arregloDeIniciales.join('.') + '.';
    // --- Fin de la lógica ---
    
    // 7. Mostrar el resultado para este cargo usando 'alert'
    alert('"' + cargoActual + '" → ' + inicialesFormateadas);
  }
}

// 8. Llamar a la función para que inicie
obtenerInicialesPorComas();
 