function farmacia(){
    let farmacias = []; let codigos = []; remedios = [];
    registroFar(farmacias, codigos)
    registroRem(farmacias, remedios)
    compraRem(remedios, estoque)
}

function registroFar(farmacias, codigos){
    for(let i=0; i<3; i++){
        let farmacia = {
            nome: prompt(`Informe o nome da farmácia ${i+1}`),
            endereco: prompt(`Informe o endereço da farmácia ${i+1}`),
            codigos: Number(prompt(`Informe o código da farmácia ${i+1}`))
        }
        while(codigos.includes(farmacia.codigos)){
            farmacia.codigos = prompt(`Código ja registrado, registre novamente: `)
        }
        codigos.push(farmacia.codigos)
        farmacias.push(farmacia)                 
    }
    return remedios
    //console.log(farmacias)
}

function registroRem(farmacias, remedios){
    let codigo; let estoque = []; 

    for(let i=0; i<3; i++){
        
        codigo = Number(prompt(`Informe o código da farmácia para registro do remédio `))
        let aux = farmacias.filter((farmacias) => farmacias.codigos == codigo)
        if(aux.length == 0){
            codigo = Number(prompt(`Codigo inexistente, informe novamente `))
            aux = farmacias.filter((farmacias) => farmacias.codigos == codigo)
        }

        let remedio = {
            nome: prompt(`Informe o nome do remédio ${i+1}`).toUpperCase(),
            estoque: Number(prompt(`Informe a quantidade de estoque do remédio ${i+1}`)),
            codigos: codigo,
            preco: Number(prompt(`Informe o preço do remédio ${i+1}`))
        }
        remedios.push(remedio)
    }
    return remedios
}

function compraRem(remedios, estoque){
    let item, nomesRemedios = [], quantidadeComprada, auxRemedio, indexDoRemedio
    console.log(remedios)

    for (let i = 0; i < 3; i++) {
        item = prompt("Digite o nome do remedio a ser comprado").toUpperCase()
        auxRemedio = remedios.filter((obj => obj.nome == item))
        while(auxRemedio.length == 0) {
            alert("Remedio não encontrado, Digite novamente")
            item = prompt("Digite novamente o nome do remedio a ser comprado").toUpperCase()
            auxRemedio = remedios.filter((obj => obj.nome == item))
        }
        quantidadeComprada = prompt("Digite a quantidade de remédios a serem comprados")
        indexDoRemedio = remedios.indexOf(auxRemedio[0])
        
        remedios[indexDoRemedio].estoque -= quantidadeComprada
    }
    console.log(remedios)
}