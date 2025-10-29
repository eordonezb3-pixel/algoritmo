Bloque 4: Versión con Arreglos (versión con arreglos del bloque 3)

//1. Promedio de calificaciones mayores a 70

/*
  Función para calcular el promedio solo de calificaciones
  mayores o iguales a 70, pidiendo los datos.
  (Versión con variables en español)
*/
function calcularPromedioAprobados() {
  
  // 1. Ingresar la cantidad de calificaciones
  let cantidadCalificaciones = parseInt(prompt("Ingrese el número de calificaciones:"));
  
  // 2. Validar esa cantidad
  if (isNaN(cantidadCalificaciones) || cantidadCalificaciones <= 0) {
    alert("Debe ingresar un número válido y mayor que cero.");
    return; // Termina la función
  }
  
  // 3. Variables para el cálculo (Acumuladores)
  let sumaDeAprobados = 0;
  let contadorDeAprobados = 0;
  
  // Arreglo para mostrar el resumen de notas ingresadas al final
  let arregloDeCalificaciones = []; 

  // 4. Leer 'n' notas dentro de un ciclo for
  for (let i = 0; i < cantidadCalificaciones; i++) {
    
    // Pedimos la nota (como texto)
    let notaTexto = prompt("Ingrese la calificación " + (i + 1) + ":");
    
    // Guardamos el texto (ej: "65") para mostrarlo al final
    arregloDeCalificaciones.push(notaTexto); 
    
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
  let resumenDeNotas = "Calificaciones: " + arregloDeCalificaciones.join(', ');

  // 7. Calcular el promedio correspondiente
  if (contadorDeAprobados === 0) {
    // Si no hubo ninguna nota >= 70, evitamos dividir por cero
    alert(resumenDeNotas + "\nNo se ingresaron calificaciones mayores o iguales a 70.");
  } else {
    // Calcular el promedio
    let promedio = sumaDeAprobados / contadorDeAprobados;
    
    // 8. Mostrar resultado (formateado a 2 decimales)
    alert(resumenDeNotas + "\nPromedio de calificaciones ≥ 70: " + promedio.toFixed(2));
  }
}

// 9. Llamar a la función para que inicie
calcularPromedioAprobados();
//2. Contar números negativos en una lista

/*
  Función para contar cuántos números negativos se ingresan,
  pidiendo los datos al usuario.
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
  
  // 3. Variable para el proceso (contador)
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
  mayores (>= 18) y menores (< 18) de edad, pidiendo datos.
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

  // 4. Leer las edades una por una con un ciclo 'for'
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

//4. Mostrar tablas de multiplicar de varios números

/*
  Función para mostrar las tablas de multiplicar de varios números,
  ingresando los datos separados por comas.
  (Versión con variables en español)
*/
function mostrarVariasTablas() {
  
  // 1. Pedir la lista de números en un solo prompt
  let entradaDelUsuario = prompt("Ingrese los números separados por comas (ej: 3,5,8):");
  
  // 2. Validar si el usuario canceló o no escribió nada
  if (entradaDelUsuario === null || entradaDelUsuario.trim() === "") {
    alert("No se ingresaron datos.");
    return; // Termina la función
  }
  
  // 3. Convertir el texto en un arreglo (array) de números
  const arregloDeTextos = entradaDelUsuario.split(',');
  const arregloDeNumeros = arregloDeTextos.map(texto => parseInt(texto.trim()));

  // 4. CICLO EXTERNO: Recorrer cada número del arreglo
  for (const numeroBase of arregloDeNumeros) {
    
    // Si el usuario escribió algo que no es un número (ej: "3,hola,5")
    if (isNaN(numeroBase)) {
        continue; // Saltamos esta vuelta y vamos al siguiente número
    }

    // 5. Preparamos el título y un arreglo para los resultados
    let tituloDeLaTabla = "Tabla del " + numeroBase + ":";
    let arregloDeResultados = [];

    // 6. CICLO INTERNO: Multiplicar del 1 al 10
    for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
      let resultado = numeroBase * multiplicador;
      
      // Guardamos el resultado en el arreglo temporal
      arregloDeResultados.push(resultado);
    }
    
    // 7. Unimos los resultados con una coma y un espacio
    // (Ej: [3, 6, 9] -> "3, 6, 9")
    let resultadosFormateados = arregloDeResultados.join(', ');

    // 8. Mostrar el 'alert' para este número (antes de pasar al siguiente)
    alert(tituloDeLaTabla + "\n" + resultadosFormateados);
  }
}

// 9. Llamar a la función para que inicie
mostrarVariasTablas();

//5. Promedio de números pares e impares

/*
  Función para calcular el promedio de números pares e impares
  por separado, pidiendo los datos.
  (Versión con variables en español)
*/
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
calcularPromediosParesImpares();
