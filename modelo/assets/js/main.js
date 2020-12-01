function escopo() {
    const form = document.querySelector('.form')

    form.addEventListener('submit', function (e) {
        e.preventDefault()  // previne o evento de envio
        const pesoHTML = e.target.querySelector('.peso')
        const alturaHTML = e.target.querySelector('.altura')

        const peso = Number(pesoHTML.value)
        const altura = Number(alturaHTML.value)

        if (!peso) {
            setResultado('Peso inválido', false)
            return
        }
        if (!altura) {
            setResultado('Altura inválido', false)
            return
        }
        const imc = calcIMC(peso, altura)
        const nivelImc = calcNivelIMC(imc)
        const msg = `O seu IMC é igual a ${imc} e você está ${nivelImc}.`
        setResultado(msg, true)
    })


    function calcNivelIMC(imc) {
        const nivel = ['abaixo do peso!', 'peso ideal!', 'sobre peso!',
            'obesidade grau 1!', 'obesidade grau 2!', 'obesidade grau 3!']
        if (imc >= 39.9) return nivel[5]
        if (imc >= 34.9) return nivel[4]
        if (imc >= 29.9) return nivel[3]
        if (imc >= 24.9) return nivel[2]
        if (imc >= 18.5) return nivel[1]
        if (imc < 18.5) return nivel[0]
    }


    function calcIMC(peso, altura) {
        const imc = peso / altura ** 2
        return imc.toFixed(2)
    }

    function criaP() {
        const p = document.createElement('p')
        return p
    }


    function setResultado(msg, isValid) {
        const divResultado = document.querySelector('.resultado')
        divResultado.innerHTML = ''
        const p = criaP()
        if (isValid) {
            p.classList.add('paragrafo-res')
        } else {
            p.classList.add('bad')
        }
        p.innerHTML = msg
        divResultado.appendChild(p)
    }
}
escopo()