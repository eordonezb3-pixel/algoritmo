//1. Promedio de calificaciones mayores a 70

/*
  Función para calcular el promedio solo de calificaciones
  mayores o iguales a 70.
  (Versión con variables en español)
*/
function calcularPromedioAprobados() {
  
  // 1. Ingresar la cantidad de calificaciones
  let cantidadTotal = parseInt(prompt("Ingrese el número de calificaciones:"));
  
  // 2. Validar esa cantidad
  if (isNaN(cantidadTotal) || cantidadTotal <= 0) {
    alert("Debe ingresar un número válido y mayor que cero.");
    return; // Termina la función
  }
  
  // 3. Variables para el cálculo
  let sumaDeAprobados = 0;
  let contadorDeAprobados = 0;
  
  // Arreglo solo para mostrar el resumen de notas ingresadas al final
  let arregloDeTodasLasNotas = []; 

  // 4. Leer 'n' notas dentro de un ciclo for
  for (let i = 0; i < cantidadTotal; i++) {
    
    // Pedimos la nota (como texto)
    let notaTexto = prompt("Ingrese la nota " + (i + 1) + ":");
    
    // Guardamos el texto (ej: "65") para mostrarlo al final
    arregloDeTodasLasNotas.push(notaTexto); 
    
    // Convertimos a número para poder comparar
    let notaNumero = parseFloat(notaTexto);

    // Si no es un número válido (ej: "hola"), lo saltamos
    if (isNaN(notaNumero)) {
        continue; // Salta al siguiente paso del bucle
    }

    // 5. Acumular y contar solo las notas >= 70
    if (notaNumero >= 70) {
      sumaDeAprobados = sumaDeAprobados + notaNumero;
      contadorDeAprobados = contadorDeAprobados + 1;
    }
  }

  // 6. Preparar la salida
  // Mostramos todas las notas que ingresó el usuario
  let resumenDeNotas = "Notas: " + arregloDeTodasLasNotas.join(', ');

  // 7. Calcular el promedio correspondiente
  if (contadorDeAprobados === 0) {
    // Si no hubo ninguna nota >= 70, evitamos dividir por cero
    alert(resumenDeNotas + "\nNo se ingresaron notas mayores o iguales a 70.");
  } else {
    // Calcular el promedio
    let promedio = sumaDeAprobados / contadorDeAprobados;
    
    // Mostrar resultado formateado a 2 decimales (como 81.67)
    alert(resumenDeNotas + "\nPromedio de notas ≥ 70: " + promedio.toFixed(2));
  }
}

// 8. Llamar a la función para que inicie
calcularPromedioAprobados();
//2. Contar cuántos números negativos se ingresan

/*
  Función para contar cuántos números negativos se ingresan.
  (Versión con variables en español)
*/
function contarNumerosNegativos() {
  
  // 1. Leer 'n' (la cantidad de números a ingresar)
  let cantidadTotal = parseInt(prompt("Ingrese cuántos números desea ingresar:"));
  
  // 2. Validar esa cantidad
  if (isNaN(cantidadTotal) || cantidadTotal <= 0) {
    alert("Debe ingresar un número válido y mayor que cero.");
    return; // Termina la función
  }
  
  // 3. Variables para el proceso
  let contadorDeNegativos = 0;
  
  // Arreglo solo para mostrar el resumen de números ingresados
  let arregloDeTodosLosNumeros = []; 

  // 4. Usar un ciclo 'for' para pedir los números
  for (let i = 0; i < cantidadTotal; i++) {
    
    // Pedimos el número (como texto)
    let numeroTexto = prompt("Ingrese el valor " + (i + 1) + ":");
    
    // Guardamos el texto (ej: "-5") para mostrarlo al final
    arregloDeTodosLosNumeros.push(numeroTexto); 
    
    // Convertimos a número para poder comparar
    let numeroActual = parseFloat(numeroTexto);

    // Si no es un número válido (ej: "hola"), lo saltamos
    if (isNaN(numeroActual)) {
        continue; // Salta al siguiente paso del bucle
    }

    // 5. Contar los valores menores a 0
    if (numeroActual < 0) {
      contadorDeNegativos = contadorDeNegativos + 1;
    }
  }

  // 6. Preparar la salida
  // Mostramos todos los valores que ingresó el usuario
  let resumenDeValores = "Valores: " + arregloDeTodosLosNumeros.join(', ');

  // 7. Mostrar el resultado final
  alert(resumenDeValores + "\nCantidad de negativos: " + contadorDeNegativos);
}

// 8. Llamar a la función para que inicie
contarNumerosNegativos();

//3. Promedio de edades: mayores vs menores de edad

/*
  Función para calcular el promedio de edades de
  mayores (>= 18) y menores (< 18) de edad.
  (Versión con variables en español)
*/
function calcularPromediosDeEdad() {
  
  // 1. Ingresar el número de personas (n)
  let cantidadPersonas = parseInt(prompt("Ingrese número de personas:"));
  
  // 2. Validar esa cantidad
  if (isNaN(cantidadPersonas) || cantidadPersonas <= 0) {
    alert("Debe ingresar un número válido y mayor que cero.");
    return; // Termina la función
  }
  
  // 3. Mantener contadores y acumuladores separados
  let sumaMayores = 0;
  let contadorMayores = 0;
  
  let sumaMenores = 0;
  let contadorMenores = 0;
  
  // Arreglo solo para mostrar el resumen de edades al final
  let arregloDeEdades = []; 

  // 4. Leer las edades una por una con un ciclo
  for (let i = 0; i < cantidadPersonas; i++) {
    
    // Pedimos la edad (como texto)
    let edadTexto = prompt("Ingrese la edad " + (i + 1) + ":");
    
    // Guardamos el texto (ej: "17") para mostrarlo al final
    arregloDeEdades.push(edadTexto); 
    
    // Convertimos a número para poder comparar
    let edadNumero = parseInt(edadTexto);

    // Si no es un número válido (ej: "hola") o es negativo, lo saltamos
    if (isNaN(edadNumero) || edadNumero < 0) {
        continue; // Salta al siguiente paso del bucle
    }

    // 5. Clasificamos y acumulamos la edad
    if (edadNumero >= 18) {
      // Es mayor de edad
      sumaMayores = sumaMayores + edadNumero;
      contadorMayores = contadorMayores + 1;
    } else {
      // Es menor de edad
      sumaMenores = sumaMenores + edadNumero;
      contadorMenores = contadorMenores + 1;
    }
  }

  // 6. Preparar la salida
  let resumenDeEdades = "Edades: " + arregloDeEdades.join(', ');
  let salidaMayores = "";
  let salidaMenores = "";

  // 7. Calcular promedio de MAYORES (evitando división por cero)
  if (contadorMayores > 0) {
    let promedioMayores = sumaMayores / contadorMayores;
    salidaMayores = "Promedio de mayores de edad: " + promedioMayores.toFixed(2);
  } else {
    salidaMayores = "Promedio de mayores de edad: N/A (No se ingresaron)";
  }

  // 8. Calcular promedio de MENORES (evitando división por cero)
  if (contadorMenores > 0) {
    let promedioMenores = sumaMenores / contadorMenores;
    salidaMenores = "Promedio de menores de edad: " + promedioMenores.toFixed(2);
  } else {
    salidaMenores = "Promedio de menores de edad: N/A (No se ingresaron)";
  }

  // 9. Mostrar el resultado final
  alert(resumenDeEdades + "\n" + salidaMayores + "\n" + salidaMenores);
}

// 10. Llamar a la función para que inicie
calcularPromediosDeEdad();

//4. Mostrar la tabla de multiplicar de un número


function mostrarTablaDeMultiplicar() {
  let numeroBase = parseInt(prompt("Ingrese un número para ver su tabla:"));
  
  if (isNaN(numeroBase)) {
    alert("Debe ingresar un número válido.");
    return; 
  }
  let textoDeSalida = "Tabla del " + numeroBase + ":\n"; 

  for (let i = 1; i <= 10; i++) {
    
    // 5. Calcular el producto en cada iteración
    let resultado = numeroBase * i;

    // 6. Agregar esta línea al texto de salida
    // Ej: "4 × 1 = 4" y un salto de línea '\n'
    textoDeSalida = textoDeSalida + numeroBase + " × " + i + " = " + resultado + "\n";
  }

  // 7. Mostrar el resultado final (toda la tabla junta)
  alert(textoDeSalida);
}

// 8. Llamar a la función para que inicie
mostrarTablaDeMultiplicar();

//5. Promedio de números pares e impares

function calcularPromediosParesImpares() {
  
  // 1. Ingresar 'n' (la cantidad de números)
  let cantidadNumeros = parseInt(prompt("Ingrese cantidad de números:"));
  
  // 2. Validar esa cantidad
  if (isNaN(cantidadNumeros) || cantidadNumeros <= 0) {
    alert("Debe ingresar un número válido y mayor que cero.");
    return; // Termina la función
  }
  
  // 3. Acumuladores y contadores separados
  let sumaPares = 0;
  let contadorPares = 0;
  
  let sumaImpares = 0;
  let contadorImpares = 0;
  
  // Arreglo solo para mostrar el resumen de valores al final
  let arregloDeValores = []; 

  // 4. Leer cada número dentro de un ciclo 'for'
  for (let i = 0; i < cantidadNumeros; i++) {
    
    // Pedimos el número (como texto)
    let numeroTexto = prompt("Ingrese el valor " + (i + 1) + ":");
    
    // Guardamos el texto (ej: "2") para mostrarlo al final
    arregloDeValores.push(numeroTexto); 
    
    // Convertimos a número para poder comparar
    let numeroActual = parseFloat(numeroTexto);

    // Si no es un número válido (ej: "hola"), lo saltamos
    if (isNaN(numeroActual)) {
        continue; // Salta al siguiente paso del bucle
    }

    // 5. Clasificamos, acumulamos y contamos
    // (n % 2 == 0) -> El residuo de dividir para 2 es cero
    if (numeroActual % 2 === 0) {
      // Es PAR
      sumaPares = sumaPares + numeroActual;
      contadorPares = contadorPares + 1;
    } else {
      // Es IMPAR
      sumaImpares = sumaImpares + numeroActual;
      contadorImpares = contadorImpares + 1;
    }
  }

  // 6. Preparar la salida
  let resumenDeValores = "Valores: " + arregloDeValores.join(', ');
  let salidaPares = "";
  let salidaImpares = "";

  // 7. Calcular promedio de PARES (evitando división por cero)
  if (contadorPares > 0) {
    let promedioPares = sumaPares / contadorPares;
    salidaPares = "Promedio de pares: " + promedioPares.toFixed(2);
  } else {
    salidaPares = "Promedio de pares: N/A (No se ingresaron)";
  }

  // 8. Calcular promedio de IMPARES (evitando división por cero)
  if (contadorImpares > 0) {
    let promedioImpares = sumaImpares / contadorImpares;
    salidaImpares = "Promedio de impares: " + promedioImpares.toFixed(2);
  } else {
    salidaImpares = "Promedio de impares: N/A (No se ingresaron)";
  }

  // 9. Mostrar el resultado final
  alert(resumenDeValores + "\n" + salidaPares + "\n" + salidaImpares);
}

// 10. Llamar a la función para que inicie
calcularPromediosParesImpares();