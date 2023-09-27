function calcular(){

    let form = document.querySelector('.form')
    let resultado = document.querySelector('.resultado')

    let nome = document.querySelector('.nome').value
    let sobrenome = document.querySelector('.sobrenome').value
    let altura = document.querySelector('.altura')
    let peso = document.querySelector('.peso')

    let pessoas = []

    let inAltura = Number(altura.value)
    let inPeso = Number(peso.value)

    let imc = calcIMC(inAltura,inPeso)
    let nivel = nivelIMC(imc)

    pessoas.push({
        nome:nome,
        sobrenome:sobrenome,
        altura:inAltura,
        peso:inPeso,
        imc:imc,
        nivel:nivel
    })
    resultado.inneText =nome+ "" +sobrenome + ", Seu IMC é: "+ imc + "e o Nível" + nivel

    function calcIMC(altura,peso){
        let imc = inPeso / (inAltura*inAltura)
        return imc
    } 
    function nivelIMC(imc){
        let nivel = ['Abaixo do peso','Peso normal','sobrepeso','obesidade grau 1','obesidade grau 2', 'obesidade grau 4']
    
        if(imc >= 39.9) return nivel[5]
        if(imc >= 34.4) return nivel[4]
        if(imc >= 29.9) return nivel[3]
        if(imc >= 24.9) return nivel[2]
        if(imc >= 18.5) return nivel[1]
        if(imc < 18.5) return nivel[0]
    }
}