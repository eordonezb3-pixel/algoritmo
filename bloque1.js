function contarYSumar(arr) {
    let cantidad = 0;
    let suma = 0;   
    arr.forEach(num => {
        if (num > 3 && num % 5 === 0) {
            cantidad++;
            suma += num;
        }       
    });
    console.log("Cantidad =", cantidad);
    console.log("Suma =", suma);
}
let numeros = [2, 5, 10, 3, 15, 1, 20];
contarYSumar(numeros);




function validarCedulas(cedulas) {
    cedulas.forEach(cedula => {
        let suma = 0;
        for (let i = 0; i < 9; i++) {
            let digito = parseInt(cedula.charAt(i));    
            if (i % 2 === 0) { // índice par
                digito *= 2;
                if (digito > 9) {
                    digito -= 9;
                }   
            } // índice impar no necesita cambio
            suma += digito;
        }   
        let residuo = suma % 10;
        let verificador = (residuo === 0) ? 0 : 10 - residuo;    
        let ultimoDigito = parseInt(cedula.charAt(9));
        if (verificador === ultimoDigito) {
            console.log(`${cedula} → válido`);
        }   else {
            console.log(`${cedula} → inválido`);
        }
    });
}
let cedulas = ["1104680135", "0926687855", "1234567890"];
validarCedulas(cedulas);    


