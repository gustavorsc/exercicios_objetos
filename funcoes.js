function exemplo1(){
    soma(2, 5)
    subtracao(2, 5)
    multiplicacao(2, 5)
    divisao(2, 5)
}

function soma(a, b){
    console.log(a + b)
}
function subtracao(a, b){
    console.log(a - b)
}
function multiplicacao(a, b){
    console.log(a * b)
}
function divisao(a, b){
    console.log(a / b)
}

function exemplo2(){
    console.log(soma2(2,5))
    console.log(subtracao2(2,5))
    console.log(multiplicacao2(2,5))
    console.log(divisao2(2,5))
}

function soma2(a, b){
    return a + b
}
function subtracao2(a, b){
    return a - b
}
function multiplicacao2(a, b){
    return a * b
}
function divisao2(a, b){
    return a / b
}

function exemplo3(){
    let a = Number(prompt("Digite o número A")) // passagem de paremetro por valor
    let b = Number(prompt("Digite o número b"))
    soma3(a, b)
    subtracao3(a, b)
    multiplicacao3(a, b)
    divisao3(a, b)
}

function soma3(a, b){
    console.log(a + b)
}
function subtracao3(a, b){
    console.log(a - b)
}
function multiplicacao3(a, b){
    console.log(a * b)
}
function divisao3(a, b){
    console.log(a / b)
}

function exemplo4(){
    let a = 10
    soma10(a)
    console.log(a)
}

function soma10(a){
    x = x + 10
}

function exemplo5(){
    let a = 10
    soma10_2(a)
    console.log(a)
}

function soma10_2(a){
    a = a + 10
}

function exemplo6(){
    let vetor = [10, 20, 30, 40, 50]
    soma3vetor(vetor)
    console.log(vetor)
}

function soma3vetor(vet){
    for(let i = 0; i < vet.length; i++){
        vet[i] = vet[i] + 3
    }
}