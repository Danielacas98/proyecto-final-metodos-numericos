function calcularRomberg() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const n = parseInt(document.getElementById('n').value);
    const equation = document.getElementById('equation').value;

    // Definir la función usando la ecuación ingresada
    function funcion(x) {
        return eval(equation);
    }

    // Método de Romberg
    function romberg(a, b, n) {
        const R = [];
        for (let i = 0; i <= n; i++) {
            R[i] = [];
        }
        
        // R[0][0]
        R[0][0] = (b - a) * (funcion(a) + funcion(b)) / 2;

        for (let i = 1; i <= n; i++) {
            const h = (b - a) / Math.pow(2, i);
            let sum = 0;
            for (let k = 1; k <= Math.pow(2, i - 1); k++) {
                sum += funcion(a + (2 * k - 1) * h);
            }
            R[i][0] = 0.5 * R[i - 1][0] + sum * h;

            for (let j = 1; j <= i; j++) {
                R[i][j] = (Math.pow(4, j) * R[i][j - 1] - R[i - 1][j - 1]) / (Math.pow(4, j) - 1);
            }
        }
        return R[n][n];
    }

    // Obtener el resultado de la integral
    const resultado = romberg(a, b, n);

    // Mostrar el resultado en la interfaz
    document.getElementById('resultadoIntegral').textContent = resultado.toFixed(6);
}
