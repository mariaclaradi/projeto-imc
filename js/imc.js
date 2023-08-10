function calcular() {
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(peso) || isNaN(altura)) {
        document.getElementById('resultado').innerHTML = "Por favor, digite um valor válido para peso e altura.";
        return;
    }

    var imc = peso / (altura * altura);
    var resultado = "";

    if (imc < 18.5) {
        resultado = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        resultado = "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        resultado = "Sobrepeso";
    } else if (imc >= 30 && imc < 35) {
        resultado = "Obesidade grau 1";
    } else if (imc >= 35 && imc < 40) {
        resultado = "Obesidade grau 2";
    } else {
        resultado = "Obesidade grau 3";
    }

    document.getElementById('resultado').innerHTML = "Seu IMC é " + imc.toFixed(2) + ". " + resultado;
    console.log(imc);
}