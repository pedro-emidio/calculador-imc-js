function escopo() {
    const form = document.querySelector('.form')
    const divResultado = document.querySelector('.resultado')
    function recebeEvento(evento) {
        evento.preventDefault()

        let peso = form.querySelector('.peso')
        let altura = form.querySelector('.altura')
        if (isNaN(peso) || isNaN(altura)) {
            divResultado.innerHTML = 'Peso ou altura invalidos'
        }

        let imc = parseFloat(peso.value) / parseFloat(altura.value) ** 2

        if (imc < 18.5) {
            divResultado.innerHTML = `O seu IMC é igual a ${imc.toFixed(1)} e você está abaixo do peso!`
        } else if (imc >= 18.5 && imc <= 24.9) {
            divResultado.innerHTML = `O seu IMC é igual a ${imc.toFixed(1)} e você está no peso ideal!`
        } else if (imc >= 25 && imc <= 29.9) {
            divResultado.innerHTML = `O seu IMC é igual a ${imc.toFixed(1)} e você está com sobre peso!`
        } else if (imc >= 30 && imc <= 34.9) {
            divResultado.innerHTML = `O seu IMC é igual a ${imc.toFixed(1)} e você está com obesidade grau 1!`
        } else if (imc >= 35 && imc <= 39.9) {
            divResultado.innerHTML = `O seu IMC é igual a ${imc.toFixed(1)} e você está com obesidade grau 2!`
        } else if (imc >= 40) {
            divResultado.innerHTML = `O seu IMC é igual a ${imc.toFixed(1)} e você está com obesidade grau 3!`
        }
    }

    form.addEventListener('submit', recebeEvento)
}
escopo()