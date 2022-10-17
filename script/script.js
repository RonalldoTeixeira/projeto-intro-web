//SEMANA 1
const ex1 = "string"
const ex2 ="number"
const ex3 = "boolean"

const filme01 = { 
    filme : "Doutor Estranho: no Multiverso da Loucura",
    ano : 2022,
    verificacao : true,
    genero :["Mistério, ficção, Horror"],
    imagem :"img-main/Estranho.jpg" ,
    sinopse : "A porta do multiverso, cheia de mistério e loucura, se abre. Agora que o Homem de Ferro e o Capitão América partiram após uma batalha feroz contra Thanos, o ex-cirurgião genial, e mago mais forte de todos, Doutor Estranho." ,
    link : "https://ondebaixo.com/doutor-estranho-no-multiverso-da-loucura-4k-torrent-dublado-dual-audio-legendado-download/ "
    
}
//console.log(filme01)

const filme02 = {
    filme : "Thor: Ragnarok",
    ano : 2017,
    verificacao : true,
    genero : ["Ação, Aventura, comédia"],
    imagem : "img-main/Thor Ragnarok.jpg" ,
    sinopse : "Thor está aprisionado do outro lado do universo, sem seu martelo, e se vê em uma corrida para voltar até Asgard e impedir o Ragnarok – a destruição de seu lar e o fim da civilização asgardiana – que está nas mãos de uma nova e poderosa ameaça, a terrível Hela." ,
    link : "https://ondebaixo.com/thor-ragnarok-imax-torrent-dublado-dual-audio-legendado-download/"
}
//console.log(filme02)

const filme03 = {
    filme : "Harry Potter and the Deathly Hallows – Part 2",
    ano : 2016,
    verificacao : true,
    genero : ["Aventura, Mistério, Fantasia"],
    imagem : "img-main/Harry Potter and the Deathly Hallows – Part 2.jpg" ,
    sinopse : "O confronto entre o bem e o mal espera pelo jovem Harry, que se prepara ao lado de Rony e Hermione para a batalha final contra Lord Voldemort. Harry e seus amigos devem procurar pelas últimas horcruxes que mantêm o covarde feiticeiro imortal." ,
    link : "https://ondebaixo.com/harry-potter-and-the-deathly-hallows-part-2-4k-torrent-dublado-dual-audio-legendado-download/"  
}
//console.log(filme03) 

const filme04 = {
    filme : "Vingadores: Era de Ultron",
    ano : 2015,
    verificacao : true,
    genero : ["ação, Drama"],
    imagem : "img-main/Vingadores Era de Ultron.jpg",
    sinopse : "Quando Tony Stark tenta reiniciar um programa de manutenção de paz, as coisas não dão certo e os super-heróis mais poderosos da Terra, terão que passar no teste definitivo para salvar o planeta.",
    link : "https://ondebaixo.com/vingadores-era-de-ultron-60-fps-torrent-dublado-dual-audio-legendado-download/"      
}
//console.log(filme04)

const filme05 = {
    filme : "Pegando Fogo",
    ano : 2015,
    verificacao : true,
    genero : ["Biografia, Drama"],
    imagem : "img-main/download.jpg",
    sinopse : "Adam Jones (Bradley Cooper), é um chefe de cozinha que, devido a drogas e bebidas, perde seu restaurante duas estrelas (no guia Michelin) em Paris e, inconformado, decide reunir seu time de cozinha para tentar abrir um restaurante três estrelas em Londres.",
    link : "https://ondebaixo.com/pegando-fogo-torrent-dublado-download/" 
}



//console.log(filme05)

//SEMANA 2.2 /5.1 REESCREVENDO RELATÓRIO
/* console.log(`${filme01.filme.toLocaleUpperCase()}\n ${filme01.ano}, ${filme01.verifica},\n ${filme01.genero}`)
console.log(`${filme02.filme.toLocaleUpperCase()}\n ${filme02.ano}, ${filme02.verifica},\n ${filme02.genero}`)
console.log(`${filme03.filme.toLocaleUpperCase()}\n ${filme03.ano}, ${filme03.verifica},\n ${filme03.genero}`) 
console.log(`${filme04.filme.toLocaleUpperCase()}\n ${filme04.ano}, ${filme04.verifica},\n ${filme04.genero}`)
console.log(`${filme05.filme.toLocaleUpperCase()}\n ${filme05.ano}, ${filme05.verifica},\n ${filme05.genero}`) */
 

/* const valoresTotal = (filme01.ano + filme02.ano + filme03.ano + filme04.ano + filme05.ano) / 5;// operação matemática
console.log(valoresTotal)*/

/* const valoresBooleans = verificacao && verificacao && verificacao && verificacao && verificacao 
console.log(valoresBooleans);*/ //VERIFICAÇÃO BOOLEANA

//SEMANA 3
//OBJETOS DENTRO DA ARRAY
/*  const filmes = []
filmes.push(filme01, filme02, filme03, filme04, filme05)
console.log(filmes); 
 
const filmes = filme01 && filme02 && filme03 && filme04 && filme05; 
console.log(filmes); */


//SEMANA 4 ALTERAÇÃO PARA VERIFICAÇÃO BOOLEANA
/*    const filmes = []
if(filme01.verificacao === true){
   filmes.push(filme01)       
}else{
    alert ("O item não foi adicionado, e não faça o push")
}
if(filme02.verificacao === true){
    filmes.push(filme02)    
 }else{
     alert ("O item não foi adicionado, e não faça o push")
 }
 
 if(filme03.verificacao === true){
    filmes.push(filme03)      
 }else{
     alert ("O item não foi adicionado, e não faça o push")
 }
 
 if(filme04.verificacao === true){
    filmes.push(filme04)   
 }else{
     alert ("O item não foi adicionado, e não faça o push")
 }
 
 if(filme05.verificacao === true){
    filmes.push(filme05)       
 }else{
     alert ("O item não foi adicionado, e não faça o push")
 }
console.log(filmes); */

//SEMANA 5.1
/*  for (let index = 0; index < filmes.length; index++) {
    console.log(`${filmes[index].filme} \n ${filmes[index].ano} \n ${filmes[index].verificacao} \n ${filmes[index].genero}`)
}
console.log(filmes);  */

//5.2
/* for(let i in filmes){
    console.log(filmes[i]);
} */

//SEMANA 6.1

/* function chamandoObjetos(filmes) {
    let stringObj = ``
    stringObj = filmes
    console.log(stringObj);    
}
    chamandoObjetos(filme01) 

//6.2
 function chamandoObjetos(arrayObj,string) {
    let chamandoObjetos = {}
    for (let i in arrayObj) {
        for(let x in arrayObj[i]){
            if (arrayObj[i][x]==string) {
                chamandoObjetos = arrayObj[i]
                
            }  
        }
    }
    console.log(chamandoObjetos)
}
chamandoObjetos(filmes, "Mistério, ficção, Horror") */



//EXTRA - COLUNA LATERAL
const img1 = {
    filme :"Moon Knight" ,
    imagem : "img-coluns/moon K.jpg",
    avaliacao: true
}
const img2 = {
    filme : "Dahmer" ,
    imagem : "img-coluns/DahmerNetflix.webp",
    avaliacao: true
}
const img3 = {
    filme :"House Of Dragon" ,
    imagem : "img-coluns/house of dragon.webp",
    avaliacao: true
}
const img4 = {
    filme : "The Rings oF Power" ,
    imagem : "img-coluns/galeria-lotr-10.webp", 
    avaliacao : true 
}

/* let aside = []
aside.push(img1, img2, img3, img4)
console.log(aside); */
 
const aside = []
if(img1.avaliacao === true){
   aside.push(img1)       
}else{
    alert ("O item não foi adicionado, e não faça o push")
}
if(img2.avaliacao === true){
    aside.push(img2)    
 }else{
     alert ("O item não foi adicionado, e não faça o push")
 }
 
 if(img3.avaliacao === true){
    aside.push(img3)    
 }else{
     alert ("O item não foi adicionado, e não faça o push")
 }
 
 if(img4.avaliacao === true){
    aside.push(img4)   
 }else{
     alert ("O item não foi adicionado, e não faça o push")
 }
console.log(aside);
 
const funcaoBusca = (array, input) => {
    for (i in array) {
      for (x in array[i]) {
        if (array[i][x] === input) {
            console.log(array[i])
        }
      }
    }
  };

funcaoBusca(aside, "The Rings oF Power")
//SEMANA 11
/* for (i in aside) {
    let div = document.getElementById('aside')
    let coluna = document.createElement("coluna")   
    let imagem = document.createElement("img")
    let titulo = document.createElement("h1")
    let nomes = document.createElement("h2")
    let link = document.createElement("a")
 
    coluna.setAttribute("id", "coluna")                 // NAO CONSEGUI CRIAR ELEMENTOS COM DOM
    imagem.src = aside[i].imagem

    div.appendChild(coluna)
    coluna.appendChild(imagem)
    coluna.appendChild(a)
    div.appendChild(h1)
} */

