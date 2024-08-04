
// Obtenemos los valores de entrada
function calcularDerivadas() {
    const x = parseFloat(document.getElementById('x').value); // x=1
    const h = parseFloat(document.getElementById('h').value); // h=0.02
    const equation = document.getElementById('equation').value; // tan(x)

    // Definir la función usando la ecuación ingresada
    function funcion(x) {
        return eval(equation); // evalua tan(1) aprox 1.55740772465
    }

    // Calcular la primera derivada usando diferencias finitas centradas
    function derivada(x, h) {
        const deri = (funcion(x + h) - funcion(x - h)) / (2 * h);
        // Math.tan(1 + 0.02) - Math.tan(1 - 0.02) / (2* 0.02) = 3.4293036
        return deri;
    }

    // Calcular la primera derivada usando el método de orden(h^4)
    function derivadao4(x, h) {
        const deri = (-funcion(x + 2 * h) + 8 * funcion(x + h) - 8 * funcion(x - h) + funcion(x - 2 * h)) / (12 * h);
        // -Math.tan(1 + 2* 0.02) + 8 * Math.tan (1 + 0.02) - 8 * Math.tan(1 - 0.02) + Math.tan(1 - 2*0.02) / (12* 0.02) = 3.4255001
        return deri;
    }

    // Calcular la derivada exacta usando un h muy pequeño
    function derivadaExacta(x) {
        const dx = 1e-10;
        const exacta = (funcion(x + dx) - funcion(x - dx)) / (2 * dx);
        // Math.tan(1+ 1e-10) - Math.tan(1- 1e-10) / (2*1e-10) = 3.42555
        return exacta;
    }

    // Obtener los resultados
    const primeraDerivada = derivada(x, h);
    const primeraDerivadaO4 = derivadao4(x, h);
    const exacta = derivadaExacta(x);

    // Calcular el porcentaje de error
    function porcentajeError(aproximada, exacta) {
        return Math.abs((aproximada - exacta) / exacta) * 100;
        // (3.4293036-3.42555) / 3.42555 = 0.11% -> error primera derivada
        // (3.425501 - 3.42555) / 3.42555 = 0.00% -> error derivada orden 4

    }

    const errorPrimeraDerivada = porcentajeError(primeraDerivada, exacta);
    const errorPrimeraDerivadaO4 = porcentajeError(primeraDerivadaO4, exacta);

    // Mostrar los resultados en la interfaz
    document.getElementById('resultadoPrimeraDerivada').textContent = primeraDerivada.toFixed(6); // 3.429304
    document.getElementById('resultadoPrimeraDerivadaO4').textContent = primeraDerivadaO4.toFixed(6); // 3.425500
    document.getElementById('errorPrimeraDerivada').textContent = errorPrimeraDerivada.toFixed(2); // 0.11%
    document.getElementById('errorPrimeraDerivadaO4').textContent = errorPrimeraDerivadaO4.toFixed(2); // 0.00%
}

