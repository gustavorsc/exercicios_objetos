let principal = () =>{
    let vetFarmacias = []
    let vetRemedios = []
    let opcao 
    do{
        opcao = Number(prompt(`Digite a opção: \n 
        1 - Cadastrar uma farmácia\n
        2- Cadastrar um remédio\n
        3- Fazer uma compra de um remédio\n
        4- Sair`))
        switch(opcao){
            case 1: cadastraFarmacias(vetFarmacias)
                    break
            case 2: cadastraRemedios(vetRemedios, vetFarmacias)
                    break
            case 3: vendeRemedios(vetRemedios)
                    break
            case 4: alert(`O programa será finalizado`)
                    break
            default:alert(`Opção inválida`)
        }
    }
    while(opcao!=4)
}

let cadastraFarmacias = (vetFarmacias) =>{
        let objFarmacia = {
            codigo: Number(prompt(`Digite o código da  farmácia `)),
            nome: prompt(`Digite o nome da  farmácia `),
            endereco: prompt(`Digite o endereço da  farmácia `)
        }
        while(vetFarmacias.some((farm) => farm.codigo == objFarmacia.codigo)){
            alert(`código existente`)
            objFarmacia.codigo = Number(prompt(`Informe novo código da farmácia`))
        }
        vetFarmacias.push(objFarmacia)
        alert('farmacia cadastrada com sucesso')
}
let cadastraRemedios = (vetRemedios, vetFarmacias) => {
    if(vetFarmacias.length === 0){
        alert(`Não há farmácias cadastradas`)
    }else{
        let objRemedio = {
            codigoFarm: Number(prompt(`Digite o código da  farmácia `)),
            nome: prompt(`Digite o nome do  remédio `),
            qnt: Number(prompt(`Digite a quantidade de estoque do  remédio `)),
            preco: Number(prompt(`Digite o preço do  remédio `))
        } 
        while(!vetFarmacias.some( (percorre) => percorre.codigo === objRemedio.codigoFarm)){
            alert(`Farmácia inexistente`)
            objRemedio.codigoFarm = Number(prompt(`Informe novo código da farmácia`))
        }
    
        vetRemedios.push(objRemedio)
        alert('remedio cadastrado com sucesso')
    }
   

}
let vendeRemedios = (vetRemedios) => {
    if(vetRemedios === 0){
        alert(`Não há remédios cadastrados`)
    }else{
            let codFarmacia = Number(prompt(`informe o código da farmacia do remedio`))
            let nomeRemedio = prompt(`informe o nome do remedio`)
            let qntVendida = Number(prompt(`informe a quantidade de remédios para a compra`))
            let achou = false//assume que n encontrou
            // vamos procurar o remedio na lisra
            for(let i = 0;i<vetRemedios.length;i++){
                if(vetRemedios[i].codigoFarm == codFarmacia && vetRemedios[i].nome == nomeRemedio){
                    achou = true
                    if(vetRemedios[i].qnt> qntVendida){
                        vetRemedios[i].qnt = vetRemedios[i].qnt - qntVendida
                        alert(`Venda efetuada com sucesso`)
                    }
                    else {
                        alert('Estoque insuficiente')
                    }
                }
            }
            //nesse caso o achou n entrou no for, por isso pergunta se ele é false e assim declarar que n achou remedio 
            if (!achou){
                alert(`Remédio/farmácia não existe ou vc está digitando o código errado da farmácia que o remédio está incluso`)
            }
            alert(`Compra efetuada`)
        }
}