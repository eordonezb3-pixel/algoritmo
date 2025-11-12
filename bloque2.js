//Bloque 2 (versión con Arreglos del bloque1)//PSEINT
//1.-SERIE DE FIBONACCI PARA VARIOS TERMINOS
Proceso Fibonacci_Arreglo
	Definir n, i, j, k, cantidad Como Entero
	Escribir "Cuantos valores tendra el arreglo?"
	Leer cantidad
	
	Dimension n_valores[cantidad]
	
	// Llenar arreglo
	Para i = 1 Hasta cantidad Con Paso 1
		Escribir "Ingresa el valor ", i, ": "
		Leer n_valores[i]
	FinPara
	
	// Procesar cada valor
	Para i = 1 Hasta cantidad Con Paso 1
		n = n_valores[i]
		Escribir "Fibonacci(", n, "): " Sin Saltar
		
		a = 0
		b = 1
		
		Para j = 1 Hasta n Con Paso 1
			Escribir a, " " Sin Saltar
			c = a + b
			a = b
			b = c
		FinPara
		
		Escribir "" // salto de línea
	FinPara
FinProceso

//JAVASCRIPT
//1.-SERIE DE FIBONACCI PARA VARIOS TERMINOS
function fibonacci() {
    let cantidad = parseInt(prompt("ingrese la cantidad de valores en el arreglo:"));
    let n_valores = [];
    for (let i = 1; i <= cantidad; i++) {
        n_valores[i] = parseInt(prompt("ingrese el valor " +i+ ":"));
    }
    for (let i = 1;i <= cantidad; i++) {
        let n = n_valores[i];
        let a = 0;
        let b = 1;
        let resultado = "fibonacci(" + n + "): ";
        for (let j = 1; j <= n; j++) {
            resultado += a + " ";
            let c = a + b;
            a = b
            b = c
        }
        console.log(resultado);
    } 
      

}
fibonacci();


//PSEINT
//2.-DIVISORES DE VARIOS NUMEROS
Proceso Divisores_Arreglo
	Definir cantidad, i, j, num Como Entero
	
	Escribir "Cuantos numeros tendra el arreglo?"
	Leer cantidad
	
	Dimension numeros[cantidad]
	
	// Llenar el arreglo
	Para i = 1 Hasta cantidad Con Paso 1
		Escribir "Ingresa el numero ", i, ": "
		Leer numeros[i]
	FinPara
	
	// Procesar cada numero
	Para i = 1 Hasta cantidad Con Paso 1
		num = numeros[i]
		Escribir num, " ? " Sin Saltar
		
		Para j = 1 Hasta num Con Paso 1
			Si num % j = 0 Entonces
				Escribir j, " " Sin Saltar
			FinSi
		FinPara
		
		Escribir "" // Salto de línea
	FinPara
	
FinProceso

//JAVASCRIPT
//2.-DIVISORES DE VARIOS NUMEROS
function divisores() {
    let cantidad = parseInt(prompt("ingrese la cantidad de numeros que estaran en el arreglo: "));
    let n_valores = [];
     for (let i = 1; i <= cantidad; i++) {
        n_valores[i] = parseInt(prompt("ingrese el valor" + i + ":"));
    }
    for (let i = 1; i <= cantidad; i++) {
        let n = n_valores[i];
        let texto = "divisores de " + n + ": ";
        for (let j = 1; j <= n; j++) {
            if (n % j === 0) {
                texto += j + " ";
               n_valores.push(j);
            }

        }
        console.log(texto);
    }
   
}
divisores();

//PSEINT
//3.-SUMA DE LOS DIVISORES DE VARIOS NUMEROS
Proceso Suma_Divisores_Arreglo
	Definir cantidad, i, j, num, suma Como Entero

	Escribir "¿Cuántos números tendrá el arreglo?"
	Leer cantidad
	
	Dimension numeros[cantidad]

	// Llenar arreglo
	Para i = 1 Hasta cantidad Con Paso 1
		Escribir "Ingresa el número ", i, ": "
		Leer numeros[i]
	FinPara

	// Procesar cada número
	Para i = 1 Hasta cantidad Con Paso 1
		num = numeros[i]
		suma = 0
		
		Para j = 1 Hasta num Con Paso 1
			Si num % j = 0 Entonces
				suma = suma + j
			FinSi
		FinPara

		Escribir num, " → ", suma
	FinPara

FinProceso

//JAVASCRIPT
//3.-SUMA DE LOS DIVISORES DE VARIOS NUMEROS
function sumaDivisoresArreglo() {
    let cantidad = parseInt(prompt("ingrese la cantidad de numeros que estaran en el arreglo: "));
    let n_valores = [];
    for (let i = 1; i <= cantidad; i++) {
        n_valores[i] = parseInt(prompt("ingrese el valor" + i + ":"));
    }
    for (let i = 1 ; i <= cantidad; i++) {
        let n = n_valores[i];
        let suma = 0;
        for (let j = 1; j <= n; j++) {
            if (n % j === 0) {
                suma+= j;
                n_valores.push(j);
            }
        }
        console.log(" la suma de los divisores de " + n + " es: " + suma);
    }
   
}
sumaDivisoresArreglo();

//PSEINT
//4.-NUMEROS PERFECTOS EN UNA LISTA
Algoritmo NumerosPerfectosInteractivo
    Definir n, numero, i, j, suma Como Entero
    Dimension numeros[100]   // Se crea el arreglo

    Escribir "¿Cuántos números desea ingresar?"
    Leer n

    // Ingreso de valores
    Para i <- 1 Hasta n Hacer
        Escribir "Ingrese el número ", i, ":"
        Leer numeros[i]
    FinPara

    // Verificar números perfectos
    Para i <- 1 Hasta n Hacer
        numero <- numeros[i]
        suma <- 0

        Para j <- 1 Hasta numero - 1 Hacer
            Si numero MOD j = 0 Entonces
                suma <- suma + j
            FinSi
        FinPara

        Si suma = numero Entonces
            Escribir numero, " ES un número perfecto."
        Sino
            Escribir numero, " NO es un número perfecto."
        FinSi
    FinPara

FinAlgoritmo

//JAVASCRIPT
//4.-NUMEROS PERFECTOS EN UNA LISTA
function numerosPerfectos() {
    let cantidad = parseInt(prompt("ingrese la cantidad de numeros que estaran en el arreglo: "));
    let n_valores = [];
    
    for (let i = 0; i < cantidad; i++) {
        n_valores[i] = parseInt(prompt("ingrese el valor" + (i + 1) + ":"));
    }
    
    for (let i = 0; i < cantidad; i++) {
        let n = n_valores[i];
        let suma = 0;
        
        for (let j = 1; j < n; j++) {
            if (n % j === 0) {
                suma += j;
            }
        }
        
        if ( suma === n) {
            console.log(n + " es un numero perfecto.");
        } else {
            console.log(n + " no es un numero perfecto.");
        }
        
    }

}
numerosPerfectos();


//PSEINT
//5.-NUMEROS PRIMOS EN UNA LISTA
Algoritmo NumerosPrimosEnLista
    Definir n, i, j, numero, contador Como Entero
    Dimension numeros[100]

    Escribir "¿Cuántos números desea ingresar?"
    Leer n

    // Ingreso de valores
    Para i <- 1 Hasta n Hacer
        Escribir "Ingrese el número ", i, ":"
        Leer numeros[i]
    FinPara

    Escribir ""
    Escribir "Resultados:"
    Para i <- 1 Hasta n Hacer
        numero <- numeros[i]
        contador <- 0

        // Contamos los divisores del número
        Para j <- 1 Hasta numero Hacer
            Si numero MOD j = 0 Entonces
                contador <- contador + 1
            FinSi
        FinPara

        // Verificamos si es primo (solo 2 divisores)
        Si contador = 2 Entonces
            Escribir numero, " es un número primo."
        Sino
            Escribir numero, " no es un número primo."
        FinSi
    FinPara

FinAlgoritmo

//JAVASCRIPT
//5.-NUMEROS PRIMOS EN UNA LISTA
function numeroPrimos() {
    let cantidad = parseInt(prompt("ingrese la cantidad de numeros que estaran en el arreglo: "));
    let n_valores = [];

    for (let i = 0; i < cantidad; i++){
        n_valores[i] = parseInt(prompt("ingrese el valor" + (i +1 ) + ":"));
    }
    
    for (let i = 0; i < cantidad; i++){
        let n = n_valores[i];
        let contador = 0;

        for ( let j = 1; j <= n; j++) {
            if (n % j === 0 ){
                contador++;
            }
        } 

        if (contador === 2){
            console.log(n + " es un numero primo.");
        } else {
            console.log(n + " no es un numero primo.");
        }
    }
}

//JAVASCRIPT
//5.-RESPUESTA EN ARREGLO
numeroPrimos()
function numerosPrimos() {
    let cantidad = parseInt(prompt("Ingrese la cantidad de números que estarán en el arreglo:"));
    let numeros = [];
    let primos = [];         // Aquí guardaremos solo los primos
    let noPrimos = [];       // Aquí guardaremos los que no son primos

    // Ingreso de valores
    for (let i = 0; i < cantidad; i++) {
        numeros[i] = parseInt(prompt("Ingrese el número " + (i + 1) + ":"));
    }

    // Verificar primos
    for (let i = 0; i < cantidad; i++) {
        let n = numeros[i];
        let contador = 0;

        for (let j = 1; j <= n; j++) {
            if (n % j === 0) {
                contador++;
            }
        }

        if (contador === 2) {
            primos.push(n);      // Guardamos en arreglo de primos
        } else {
            noPrimos.push(n);    // Guardamos en arreglo de no primos
        }
    }

    // Mostrar resultados
    console.log("Números ingresados: " + numeros.join(", "));
    console.log("Primos: " + primos.join(", "));
    console.log("No son primos: " + noPrimos.join(", "));
}

numerosPrimos();


//PSEINT
//6.-INVERTIR VARIOS NUMEROS
Algoritmo InvertirNumeros
    Definir cantidad, i, numero, invertido, residuo Como Entero
    Dimension numeros[100], invertidos[100]
	
    Escribir "Ingrese la cantidad de numeros:"
    Leer cantidad
	
    Para i <- 1 Hasta cantidad Hacer
        Escribir "Ingrese el numero ", i, ":"
        Leer numeros[i]
    FinPara
	
    Para i <- 1 Hasta cantidad Hacer
        numero <- numeros[i]
        invertido <- 0
		
        Mientras numero > 0 Hacer
            residuo <- numero MOD 10
            invertido <- invertido * 10 + residuo
            numero <- TRUNC(numero / 10)   // ? ESTA ES LA LÍNEA CORRECTA
        FinMientras
		
        invertidos[i] <- invertido
    FinPara
	
    Escribir "Arreglo invertido:"
    Para i <- 1 Hasta cantidad Hacer
        Escribir invertidos[i]
    FinPara
	
FinAlgoritmo

//JAVASCRIPT
//6.-INVERTIR VARIOS NUMEROS
function invertirNumeros() {
    let cantidad = parseInt(prompt("ingrese la cantidad de numeros que estaran en el arreglo: "));
    let n_valores = [];
   
    for (let i = 0; i < cantidad; i++) {
        n_valores[i] = parseInt(prompt("ingrese el valor" + (i + 1) + ":"));
    }

    for (let i = 0; i < cantidad; i++) {
        let n = n_valores[i];
        let invertido = 0;
        
        while (n > 0) {
            let digito = n % 10;
            invertido = invertido * 10 + digito;
            n = (n - (n % 10)) / 10;
        }
        console.log("el numero invertido es: " + invertido);
    }

}
invertirNumeros();
//JAVASCRIPT
//6.-RESPUESTA EN ARREGLO
function invertirNumeros() {
    let cantidad = parseInt(prompt("Ingrese la cantidad de números:"));
    let numeros = [];
    let invertidos = [];

    // Ingreso de valores
    for (let i = 0; i < cantidad; i++) {
        numeros[i] = parseInt(prompt("Ingrese el número " + (i + 1) + ":"));
    }

    // Invertir cada número
    for (let i = 0; i < cantidad; i++) {
        let n = numeros[i];
        let invertido = 0;

        while (n > 0) {
            let residuo = n % 10;
            invertido = invertido * 10 + residuo;
            n = parseInt(n / 10);
        }

        invertidos.push(invertido);
        console.log(numeros[i] + " → " + invertido);
    }

    // Mostrar arreglo completo
    console.log("Arreglo original: " + numeros.join(", "));
    console.log("Arreglo invertido: " + invertidos.join(", "));
}
 invertirNumeros();

 //PSEINT
 //7.-CONTAR DIGITOS DE VARIOS NUMEROS
Algoritmo ContarDigitos
    Definir cantidad, i, numero, contador Como Entero
    Dimension numeros[100], digitos[100]

    Escribir "Ingrese la cantidad de numeros:"
    Leer cantidad

    Para i <- 1 Hasta cantidad Hacer
        Escribir "Ingrese el numero ", i, ":"
        Leer numeros[i]
    FinPara

    Para i <- 1 Hasta cantidad Hacer
        numero <- numeros[i]
        contador <- 0

        Mientras numero > 0 Hacer
            numero <- TRUNC(numero / 10)
            contador <- contador + 1
        FinMientras

        digitos[i] <- contador
    FinPara

    Escribir "Cantidad de digitos por numero:"
    Para i <- 1 Hasta cantidad Hacer
        Escribir digitos[i]
    FinPara

FinAlgoritmo

 //JAVASCRIPT
 //7.-CONTAR DIGITOS DE VARIOS NUMEROS
 function contarDigito(){
    let cantidad = parseInt(prompt("ingrese la cantidad de numeros que estaran en el arreglo: "));
    let n_valores = [];

    for (let i = 0; i < cantidad; i++) {
        n_valores[i] = parseInt(prompt("ingrese el valor" + (i + 1) + ":"));
    }

    for (let i = 0; i < cantidad; i++) {
        let n = n_valores[i];
        let contador = 0;

        while (n > 0) {
            n = (n - (n % 10)) / 10;
            contador++;
        }
        console.log("la cantidad de digitos de " + n_valores[i] + " es: " + contador);
    }
 }
contarDigito();
//JAVASCRIPT
//7.-RESPUESTA EN ARREGLO
function contarDigitos() {
    let cantidad = parseInt(prompt("Ingrese la cantidad de números:"));
    let numeros = [];
    let digitos = [];

    for (let i = 0; i < cantidad; i++) {
        numeros[i] = parseInt(prompt("Ingrese el número " + (i + 1) + ":"));
    }

    for (let i = 0; i < cantidad; i++) {
        let n = numeros[i];
        let contador = 0;

        while (n > 0) {
            n = parseInt(n / 10);
            contador++;
        }

        digitos[i] = contador;
        console.log(numeros[i] + " → " + contador + " dígitos");
    }

    console.log("Arreglo de dígitos:", digitos);
}

contarDigitos();


//PSEINT
//8.-FACTORIAL DE VARIOS NUMEROS
Algoritmo FactorialNumeros
    Definir cantidad, i, n, f Como Entero
    Dimension numeros[100], factoriales[100]

    Escribir "Ingrese la cantidad de numeros:"
    Leer cantidad

    Para i <- 1 Hasta cantidad Hacer
        Escribir "Ingrese el numero ", i, ":"
        Leer numeros[i]
    FinPara

    Para i <- 1 Hasta cantidad Hacer
        n <- numeros[i]
        f <- 1

        Mientras n > 1 Hacer
            f <- f * n
            n <- n - 1
        FinMientras

        factoriales[i] <- f
    FinPara

    Escribir "Resultados:"
    Para i <- 1 Hasta cantidad Hacer
        Escribir numeros[i], "! = ", factoriales[i]
    FinPara

FinAlgoritmo

//JAVASCRIPT
//8.-FACTORIAL DE VARIOS NUMEROS
function factorial(){
    let cantidad = parseInt(prompt("ingrese la cantidad de numeros que estaran en el arreglo: "));
    let n_valores = [];

    for (let i = 0; i < cantidad; i++) {
        n_valores[i] = parseInt(prompt("ingrese el valor" + (i + 1) + ":"));
    }

    for (let i = 0; i < cantidad; i++) {
        let n = n_valores[i];
        let fact = 1;

        for (let j = 1 ; j <= n; j++) {
            fact = fact * j;
        }
        console.log( n + "! = " + fact);
    }
}
factorial();
//JAVASCRIPT
//RESPUESTA EN ARREGLO
function factorialNumeros() {
    let cantidad = parseInt(prompt("Ingrese la cantidad de números:"));
    let numeros = [];
    let factoriales = [];

    for (let i = 0; i < cantidad; i++) {
        numeros[i] = parseInt(prompt("Ingrese el número " + (i + 1) + ":"));
    }

    for (let i = 0; i < cantidad; i++) {
        let n = numeros[i];
        let f = 1;

        while (n > 1) {
            f = f * n;
            n = n - 1;
        }

        factoriales[i] = f;
        console.log(numeros[i] + "! = " + f);
    }

    console.log("Arreglo original:", numeros);
    console.log("Arreglo factorial:", factoriales);
}

factorialNumeros();


//PSEINT
//9.-SUMAS SUCESIVAS EN UNA LISTA
Algoritmo SumasSucesivas
    Definir cantidad, i, j, veces, suma Como Entero
    Dimension numeros[100], resultados[100]

    Escribir "Ingrese la cantidad de numeros:"
    Leer cantidad

    Para i <- 1 Hasta cantidad Hacer
        Escribir "Ingrese el numero ", i, ":"
        Leer numeros[i]
    FinPara

    Escribir "Ingrese cuantas veces se sumara cada numero:"
    Leer veces

    Para i <- 1 Hasta cantidad Hacer
        suma <- 0

        Para j <- 1 Hasta veces Hacer
            suma <- suma + numeros[i]
        FinPara

        resultados[i] <- suma
    FinPara

    Escribir "Resultados:"
    Para i <- 1 Hasta cantidad Hacer
        Escribir numeros[i], " x ", veces, " = ", resultados[i]
    FinPara

FinAlgoritmo

//JAVASCRIPT
//9.-SUMAS SUCESIVAS EN UNA LISTA
function sumaSucesiva(){
    let cantidad = parseInt(prompt("ingrese la cantidad de numeros que estaran en el arreglo: "));
    let n_valores = [];
    let veces;
    for (let i = 0; i < cantidad; i++) {
        n_valores[i] = parseInt(prompt("ingrese el valor" + (i + 1) + ":"));
    }

    veces = parseInt(prompt("ingrese cuantas veces se sumara cada numero: "));

    for (let i = 0; i < cantidad; i++) {
        let n = n_valores[i];
        let suma = 0;

        for (let j = 1; j <= veces; j++) {
            suma = suma + n;
        }
        console.log("la suma sucesiva de " + n + " es:" + suma);
        
    }
}
sumaSucesiva();
//JAVASCRIPT
//9.-RESPUESTA EN ARREGLO
function sumasSucesivas() {
    let cantidad = parseInt(prompt("Ingrese la cantidad de números:"));
    let numeros = [];
    let resultados = [];

    for (let i = 0; i < cantidad; i++) {
        numeros[i] = parseInt(prompt("Ingrese el número " + (i + 1) + ":"));
    }

    let veces = parseInt(prompt("Ingrese cuántas veces se sumará cada número:"));

    for (let i = 0; i < cantidad; i++) {
        let suma = 0;

        // ←← SOLO ESTO CAMBIÓ
        for (let j = 1; j <= veces; j++) {
            suma = suma + numeros[i];
        }

        resultados[i] = suma;
        console.log(numeros[i] + " × " + veces + " = " + suma);
    }

    console.log("Arreglo original:", numeros);
    console.log("Arreglo resultado:", resultados);
}

sumasSucesivas();

//PSEINT
//10.-RESTAS SUCESIVAS EN UNA LISTA
Proceso RestasSucesivas
    Definir cantidad, valor_resta, i, contador, temporal Como Entero

    Escribir "Ingrese la cantidad de números:"
    Leer cantidad

    Dimension numeros[cantidad]
    Dimension resultados[cantidad]

    Para i <- 1 Hasta cantidad Con Paso 1
        Escribir "Ingrese el número ", i, ":"
        Leer numeros[i]
    FinPara

    Escribir "Ingrese el valor a restar:"
    Leer valor_resta

    Para i <- 1 Hasta cantidad Con Paso 1
        temporal <- numeros[i]
        contador <- 0

        Mientras temporal >= valor_resta
            temporal <- temporal - valor_resta
            contador <- contador + 1
        FinMientras

        resultados[i] <- contador
        Escribir numeros[i], " → ", contador
    FinPara

    Escribir "Arreglo original:"
    Para i <- 1 Hasta cantidad Con Paso 1
        Escribir numeros[i]
    FinPara

    Escribir "Arreglo resultado:"
    Para i <- 1 Hasta cantidad Con Paso 1
        Escribir resultados[i]
    FinPara

FinProceso

//JAVASCRIPT
//10.-RESTAS SUCESIVAS EN UNA LISTA
function restaSucesiva() {
    let cantidad = parseInt(prompt("ingrese la cantidad de numeros que estaran en el arreglo: "));
    let n_valores = [];

    for (let i = 0; i < cantidad; i++) {
        n_valores[i] = parseInt(prompt("ingrese el valor" + (i + 1) + ":"));
    }

    let valor = parseInt(prompt("ingrese el valor a restar: "));

    for (let i = 0; i < cantidad; i++) {
        let n = n_valores[i];
        let contador = 0;

        while (n >= valor){
            n = n - valor;
            contador++;
        }

        console.log("resultado final de " + n_valores[i] + " es: " + n);
        console.log("numero de restas realizadas: " + contador);
    }
}
restaSucesiva();
//JAVASCRIPT
//10.-RESPUESTA EN ARREGLO
function restasSucesivas() {
    let cantidad = parseInt(prompt("Ingrese la cantidad de números:"));
    let numeros = [];
    let resultados = [];

    for (let i = 0; i < cantidad; i++) {
        numeros[i] = parseInt(prompt("Ingrese el número " + (i + 1) + ":"));
    }

    let valor_resta = parseInt(prompt("Ingrese el valor a restar:"));

    for (let i = 0; i < cantidad; i++) {
        let contador = 0;
        let temporal = numeros[i];

        while (temporal >= valor_resta) {
            temporal = temporal - valor_resta;
            contador = contador + 1;
        }

        resultados[i] = contador;
        console.log(numeros[i] + " → " + contador);
    }

    console.log("Arreglo original:", numeros);
    console.log("Arreglo resultado:", resultados);
}

restasSucesivas();
 
