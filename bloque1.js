//PSEINT
//1.-SETRIE DE FIBONACCI
Algoritmo Fibonacci
    Escribir "Ingresa cuántos términos quieres:"
    Leer n
	
    anterior <- 0
    actual <- 1
	
    Escribir "Serie: ", anterior, ", ", actual
	
    Para i <- 3 Hasta n Hacer
        nuevo <- anterior + actual
        Escribir ", ", nuevo
        anterior <- actual
        actual <- nuevo
    FinPara
FinAlgoritmo

//JAVASCRIPT
//1.-SETRIE DE FIBONACCI
let n = parseInt(prompt("¿Cuántos términos quieres?"));

let anterior = 0;
let actual = 1;

console.log("Serie: " + anterior + ", " + actual);

for (let i = 3; i <= n; i++) {
  let nuevo = anterior + actual;
  console.log(nuevo);
  anterior = actual;
  actual = nuevo;
}


//PSEINT
//2.-DIVISORES DE UN NÚMERO
Algoritmo Divisores
    Escribir "Ingresa un número:"
    Leer n

    Escribir "Divisores: "

    Para i <- 1 Hasta n Hacer
        Si n % i = 0 Entonces
            Escribir i, " "
        FinSi
    FinPara
FinAlgoritmo

//JAVASCRIPT
//2.-DIVISORES DE UN NÚMERO
 function mostrarDivisores() {
 let n = parceINT(prompt("ingrese un numero:"));
 let texto = "divisores: ";

 for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
       texto += i + " ";
       }
    }   
    console.log(texto);
}


//PSEINT
//3.-SUMA DE LOS DIVISORES DE UN NUMERO
Proceso SumaDivisores
	Escribir "Ingresa un número:"
	Leer n
	
	suma <- 0

	Para i <- 1 Hasta n Con Paso 1 Hacer
		Si n % i = 0 Entonces
			suma <- suma + i
		FinSi
	FinPara

	Escribir "La suma de los divisores es: ", suma
FinProceso

//JAVASCRIPT
//3.-SUMA DE LOS DIVISORES DE UN NUMERO
function sumaDivisores() {
    let n = parseInt(prompt("ingrese un numero:"));
    let suma = 0;
    
    for (let i = 1; i <= n; i++) {
      if (n % i === 0){
            suma += i;
      }    
    }
     console.log("la suma de los divisores es: " + suma);
}     
sumaDivisores();


//PSEINT
//4.-VERIFICAR SI UN NUMERO ES PERFECTO
Proceso NumeroPerfecto
	Escribir "Ingresa un número:"
	Leer n

	suma <- 0

	Para i <- 1 Hasta n - 1 Con Paso 1 Hacer
		Si n % i = 0 Entonces
			suma <- suma + i
		FinSi
	FinPara

	Si suma = n Entonces
		Escribir n, " es un número perfecto."
	SiNo
		Escribir n, " NO es un número perfecto."
	FinSi
FinProceso

//JAVASCRIPT
//4.-VERIFICAR SI UN NUMERO ES PERFECTO
function numeroPerfecto() {
    let n = parseInt(prompt("ingrese un numero: "));
    let suma = 0;
     for(i = 1; i < n; i++){
        if(n % i === 0) {
            suma += i;
        }
    }
    if(suma === n){
        console.log(n +" es un numero perfecto.");
    } else {
            console.log(n +"no es un numero perfecto.");
        }
}    
numeroPerfecto();


//PSEINT
//5.-VERIFICAR SI UN NUMERO ES PRIMO
Proceso NumeroPrimo
    Escribir "Ingresa un número:"
    Leer n
    
    esPrimo <- Verdadero

    Para i <- 2 Hasta n - 1 Con Paso 1 Hacer
        Si n % i = 0 Entonces
            esPrimo <- Falso
        FinSi
    FinPara

    Si esPrimo Entonces
        Escribir n, " es un número primo."
    Sino
        Escribir n, " NO es un número primo."
    FinSi
FinProceso

//JAVASCRIPT
//5.-VERIFICAR SI UN NUMERO ES PRIMO
function numeroPrimo() {
  let n = parseInt(prompt("ingrese un numero:"));
  let esPrimo= true;
   for (let = 2; i < n; i++) {
        if (n % i === 0) {
            esPrimo = falso
        }
   }
    if (esPrimo){
    console.log( n +"es numero primo" );
    } else {
     console.log(n +"no es un numero primo");
    }
}
numeroPrimo();


//PSEINT
//6.-INVERTIR LOS DIGITOS DE UN NUMERO
Proceso InvertirNumero
	Escribir "Ingresa un número:"
	Leer n

	invertido <- 0

	Mientras n > 0 Hacer
		digito <- n % 10
		invertido <- invertido * 10 + digito
		n <- trunc(n / 10)
	FinMientras

	Escribir "Número invertido: ", invertido
FinProceso

//JAVASCRIPT
//6.-INVERTIR LOS DIGITOS DE UN NUMERO
function invertirNumero () {
    let n = parseInt(prompt("ingrese un numero:"));
    let invertido = 0;
    while (n > 0) {
        let digito = n % 10;
        invertido = invertido * 10 + digito;
        n = (n - (n % 10)) / 10;
    }
    console.log("el numero invertido es: " + invertido);
}
invertirNumero();

//PSEINT
//7.-CONTAR DIGITOS DE UN NUMERO
Proceso Contar_Digitos
	Definir n, contador Como Entero
	
	Escribir "Ingresa un número:"
	Leer n
	
	contador <- 0
	
	Mientras n > 0 Hacer
		n <- (n - (n % 10)) / 10   // Quita el último dígito 
		contador <- contador + 1
	FinMientras
	
	Escribir "Cantidad de dígitos: ", contador
FinProceso

//JAVASCRIPT
//7.-CONTAR DIGITOS DE UN NUMERO
function contadorDigitos() {
    let n = parseInt(prompt("ingrese un numero:"));
    let contador = 0;
      while (n > 0) {
        n = (n-(n % 10)) / 10;
        contador++;
      }
      console.log("la cantidad de digitos de este numero es:" + contador);
}
contadorDigitos();


//PSEINT
//8.-FACTORIAL DE UN NUMERO
Proceso Factorial
	Definir n, fact, i Como Entero
	
	Escribir "Ingresa un número:"
	Leer n
	
	fact <- 1
	
	Para i <- 1 Hasta n Con Paso 1 Hacer
		fact <- fact * i   // Se multiplica por el siguiente número
	FinPara
	
	Escribir n, "! = ", fact
FinProceso

//JAVASCRIPT
//8.-FACTORIAL DE UN NUMERO
function factorial() {
    let n = parseInt(prompt("ingrese un numero:"));
    let fact = 1;
    for(i = 1; i <= n; i++){
        fact = fact * i;
    }
    console.log(n + "! = " + fact);
}
factorial();

//PSEINT
//9.-SUMAS SUCESIVAS
Proceso Sumas_Sucesivas
	Definir numero, veces, resultado, i Como Entero
	
	Escribir "Ingresa un número:"
	Leer numero
	
	Escribir "¿Cuántas veces deseas sumarlo?"
	Leer veces
	
	resultado <- 0
	
	Para i <- 1 Hasta veces Con Paso 1 Hacer
		resultado <- resultado + numero   // Se suma el número cada vez
	FinPara
	
	Escribir "Resultado = ", resultado
FinProceso

//JAVASCRIPT
//9.-SUMAS SUCESIVAS
function sumasSucesivas() {
 let numero = parseInt(prompt("ingrese un numero:"));
 let veces = parseInt(prompt("¿cuantas veces deseas sumarlos?"));
 let resultado = 0;
    
    for(let i = 1; i <= veces; i++) {
      resultado = resultado + numero;
    }
    
    console.log("Resultado = " + resultado);
}
sumasSucesivas();


//PSEINT
//10.-RESTAS SUCESIVAS
Proceso Restas_Sucesivas
	Definir numero, valor, contador Como Entero

	Escribir "Ingresa un número inicial:"
	Leer numero

	Escribir "Ingresa el valor a restar:"
	Leer valor

	contador <- 0

	Mientras (numero - valor) >= 0 Hacer
		numero <- numero - valor
		contador <- contador + 1
	FinMientras

	Escribir "Resultado final: ", numero
	Escribir "Número de restas realizadas: ", contador
FinProceso

//JAVASCRIPT
//10.-RESTAS SUCESIVAS
function restaSucesivas() {
 let numero = parseInt(prompt("ingrese un numero inicial: "));
 let valor = parseInt(prompt("ingrese el valor a restar: "));
 let contador = 0;
   while ((numero - valor) >= 0) {
    numero = numero - valor;
    contador++;
   }
   console.log("resltado final: " + numero);
   console.log("numero de restas realizadas: " + contador);
}
restaSucesivas()
