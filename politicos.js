
let cadastraPP = (vetPP) =>{
    let objPP = {
        cod: Number(prompt('Informe o cogido do partido')),
        nome: prompt('Informe o nome do partido'),
        sigla:prompt('Informe a sigla do Partido').toUpperCase(),
        pres: prompt('Informe o nome do presidente do partido'),
        numCand: Number(prompt('Informe a quantidade de candidados no partido'))
    }
    while(vetPP.some( (pp) => pp.cod == objPP.cod)){
        alert('Codigo não registrado')
        objPP.cod = Number(prompt('Informe novamente um código diferente do já registrado'))
    }
    //adicionar no vetor
    vetPP.push(objPP)
    alert('Partido adicionado')
}

let cadastroPolitico = (vetPP, vetPo) =>{
    let objPo = {
        codPartido: Number(prompt('Informe o codigo do partido do politico.')),
        nomePo: prompt('Informe o nome do politico.').toUpperCase(),
        qtdeVotos: 0,
        cargo: prompt('Informe o cargo do politico')
    }
    while(!vetPP.some( (pp) => pp.cod == objPo.codPartido)){
        alert('Codigo ja registrado')
        objPo.codPartido = Number(prompt('Informe novamente o código para executar o registro do politico.'))
    }
    vetPo.push(objPo)
    alert('Politico adicionado.')
}

let votar = (vetPo) =>{
    let codInteresse = Number(prompt('Informe o codigo do partido.'))
    let nomePolitico = prompt('Informe o nome do politico').toUpperCase()
    let achou = false
    for(let i=0; i<vetPo.length; i++){
        if(codInteresse == vetPo[i].codPartido && nomePolitico == vetPo[i].nomePo){
            vetPo[i].qtdeVotos++
            alert('Voto registrado')
            achou = true
        }
    }
    if(!achou){
        alert('Partido não encontrado')
    }
}

//função principal
let votacao = () =>{
    let vetPP = []
    let vetPo = []
    let opcao 
    do {
        opcao = Number(prompt('Informe: \n1) Cadastrar partido \n2) Cadastrar politico \n3) Sair'))
        switch(opcao){
            case 1: cadastraPP(vetPP)
                break;
            
            case 2: cadastroPolitico(vetPP, vetPo) 
                break;

            case 3: votar(vetPo);
                break

            case 4: break
            default: alert('Opção inválida');
        }
    }
    while(opcao!=4)
}