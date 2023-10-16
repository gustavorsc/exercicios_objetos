function ex1(){
let obj = {
    a: Number(prompt('Digite o Valor de A')),
    b: Number(prompt('Digite o Valor de B')),
    c: Number(prompt('Digite o Valor de C')),
    delta: (obj.b ** 2) - (4 * obj.a * obj.c)
}

console.log(`O seu delta é: ${obj.delta}`)
}

function ex2(){
let alunos = []

for(let i=0; i<10; i++){
    alunos[i] = {
        cod: Number(prompt("Informe o codigo do aluno:")),
        nome: prompt("Informe o nome do aluno:"),
        p1: Number(prompt("Informe a nota da primeira prova:")),
        p2: Number(prompt("Informe a nota da segunda prova:")),
    }
}

let mediaTurma = 0
for(element of alunos){
    let = media = (element[i].p1 + element[i].p2)/2
    console.log(media)
    mediaTurma += media
}
mediaTurma = mediaTurma / 10
console.log(`A média da turma é ${mediaTurma}`)
}

function vetObjEx1(){
    let filmes = [];
    let mediaAvaliacoes_filmes = 0
    
    for (let i = 0; i < 4; i++) {
        let filme = {
            tituloFilme: prompt(`Informe o titulo do filme:`),
            duracaoFilme: Number(prompt(`Informe a duração do filme em minutos:`)),
            classificacaoFilme:  Number(prompt(`Informe a classificação do filme:`)),
            avaliacaoFilme: Number(prompt(`Informe a avaliação do filme:`))
        }
        filmes.push(filme);
    }

    for(let i = 0; i < filmes.length; i++){
        mediaAvaliacoes_filmes += filmes[i].avaliacaoFilme;
    }
    mediaAvaliacoes_filmes = mediaAvaliacoes_filmes/filmes.length;

    console.log(`A média das avaliações dos filmes é de: ${mediaAvaliacoes_filmes}`);
    
    let filmeMaior_duracao = 0; let aux = 0;
    
    for(let i = 0; i < filmes.length; i++){
        if(filmes[i].duracaoFilme > filmeMaior_duracao){
            filmeMaior_duracao = filmes[i].duracaoFilme;
            aux = i;
        }    
    }

    let filmeMenor_duracao = filmeMaior_duracao; let aux2 = 0;
    
    for(let i = 0; i < filmes.length; i++){
        if(filmes[i].duracaoFilme < filmeMenor_duracao){
            filmeMenor_duracao = filmes[i].duracaoFilme ;
            aux2 = i;
        }  
    }

    console.log(`O filme com a maior duração é o filme ${filmes[aux].tituloFilme} com a duração de ${filmes[aux].duracaoFilme} minutos.`);
    console.log(`O filme com a menor duração é o filme ${filmes[aux2].tituloFilme} com a duração de ${filmes[aux2].duracaoFilme} minutos.`);

    let filmeMelhor_Avaliacao = 0; let aux3 = 0
    for(let i = 0; i < filmes.length; i++){
        if(filmes[i].avaliacaoFilme > filmeMelhor_Avaliacao){
            filmeMelhor_Avaliacao = filmes[i].avaliacaoFilme
            aux3 = i
        }
    }

    console.log(`O filme com a melhor avaliação é o filme ${filmes[aux3].tituloFilme} com a avaliação de ${filmes[aux3].avaliacaoFilme}.`);

}

function vetObjEx2(){
    let candidatos = []
    let partidos = ["PT", "PL", "PSDB", "PDT"]
    let candidatoMaisVotos = 0; let index = 0

    for(let i = 0; i < 10; i++){

        let candidato = {
            candidato_Cod: Number(prompt(`Informe o código do candidato.`)),
            candidato_Nome: prompt(`Informe o nome do candidato.`),
            candidato_Part: prompt(`Informe o partido do candidato`).toUpperCase(),
            candidato_QtdeVotos: Number(prompt(`Informe a quantidade de votos recebidos do candidato.`))
        }
        while(!partidos.includes(candidato.candidato_Part)){
            candidato.candidato_Part = prompt(`Informe novamente o partido do candidato`).toUpperCase()
        }
        candidatos.push(candidato)
    }
    
    for (let i = 0; i < candidatos.length; i++) {
        console.log(candidatos[i].candidato_QtdeVotos)
        console.log(candidatos[i].candidato_Part)
    }
    
    for(let i = 0; i < candidatos.length; i++){
        if(candidatos[i].candidato_QtdeVotos > candidatoMaisVotos){
            candidatoMaisVotos = candidatos[i].candidato_QtdeVotos
            index = i
        }
    }
    console.log(`O candidato com a maior quantidade de votos é o ${candidatos[index].candidato_Nome} 
    do partido: ${candidatos[index].candidato_Part} com a quantidade de: ${candidatos[index].candidato_QtdeVotos} de votos.`)

    let candidatoMaisVotos2 = 0
    let partidoVeri = prompt(`Informe o partido que deseja descobrir qual o candidato com mais votos nele.`).toUpperCase()
    for(let i = 0; i < candidatos.length; i++){
        if(candidatos[i].candidato_Part === partidoVeri){
            if(candidatos[i].candidato_QtdeVotos > candidatoMaisVotos2){
                candidatoMaisVotos2 = candidatos[i].candidato_QtdeVotos
                index = i
            }
        }
    }
    console.log(`O candidato com mais votos do ${partidoVeri} é o ${candidatos[index].candidato_Nome} com 
    ${candidatos[index].candidato_QtdeVotos} votos.`)
}

function bikes(){
    let bikes = [];   

    entrada(bikes, 3)
    mediaPreco(bikes)
    bikesAntiga(bikes)
    bikesCaloi(bikes)
    bikeAro29(bikes)
    bikeMaiorQuadro(bikes)
      
}

function entrada(bikes, n){
    for(let i = 0; i < n; i++){
        let bike = {
            bikeMarca: prompt(`Informe a marca da bike ${i+1}.`).toUpperCase(),
            bikeModelo: prompt(`Informe o modelo da bike ${i+1}.`),
            bikeQuadro: Number(prompt(`Informe o tamanho do quadro da bike ${i+1}.`)),
            bikeAro: Number(prompt(`Informe o aro da bike ${i+1}.`)),
            bikeAno: Number(prompt(`Informe o ano da bike ${i+1}.`)),
            bikePreco: Number(prompt(`Informe o preço da bike ${i+1}.`))
        }
        bikes.push(bike)
    }
}

function mediaPreco(bikes, n){
    let mediaPreco = 0; let mediaPrecoFinal = 0;
    for(let i = 0; i < bikes.length; i++){
        mediaPreco = mediaPreco + bikes[i].bikePreco
    }
    mediaPrecoFinal = mediaPreco / n
    console.log(`A média de preço das bikes é de ${mediaPrecoFinal}.`)
}

function bikesAntiga(bikes){
    let empate = []; let antiga = 0; let modeloAntiga; let nomeAntiga = [] 
    antiga = bikes[0].bikeAno
    modeloAntiga = bikes[0].bikeModelo
    for(let i = 0; i < bikes.length; i++){
        if(bikes[i].bikeAno < antiga){
            antiga = bikes[i].bikeAno
            modeloAntiga = bikes[i].bikeModelo
        }
    }

    for(let i = 0; i < bikes.length; i++){
        if(antiga == bikes[i].bikeAno){
            antiga = bikes[i].bikeAno
            modeloAntiga = bikes[i].bikeModelo
            empate.push(antiga)
            nomeAntiga.push(modeloAntiga)
        }
    }
    console.log(`A(s) bicicleta mais antiga(s) é(são) a(s): ${nomeAntiga}`)
}

function bikesCaloi(bikes){
    let bikesCaloi = [];
    for(let i = 0; i < bikes.length; i++){
        mediaPreco = bikes[i].bikePreco
        if(bikes[i].bikeMarca == "CALOI"){
            bikesCaloi.push(bikes[i].bikeModelo)
        }
    }
    console.log(`As modelos de bicicleta da marca caloi são ${bikesCaloi}.`)
}

function bikeAro29(bikes){
    let aro29 = 0;
    for(let i = 0; i < bikes.length; i++){
        if(bikes[i].bikeAro == 29){
            aro29++
        }
    }
    console.log(`A quantidade de bicicletas com aro 29 são ${aro29}`)
}

function bikeMaiorQuadro(bikes){
    let maiorQuadro = bikes[0].bikeQuadro; let index = 0; 

    for(let i = 0; i < bikes.length; i++){
        if(bikes[i].bikeQuadro > maiorQuadro){
            maiorQuadro = bikes.bikeQuadro
            index = i
        }
    }
    console.log(`A bicicleta com o maior quadro é o modelo ${bikes[index].bikeModelo} com ${maiorQuadro}cm de quadro`)
}

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