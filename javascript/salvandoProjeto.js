// fazer uma função que pegue os textos adicionados nos dois inputs e o codigo inserido no editor (ok-)
//  a cor que está a caixa de texto (ok)
// a linguagem e associe essa ação ao botão salvar projeto (ok)
// ao ser salvo, tudo isso deve ser adicionado a página de comunidade 
// lá deve aparecer o card com a cor, o nome do projeto e a descrição 
const desczinha = document.querySelector('#descProj')
console.log(desczinha)

const textoescrito = document.getElementsByTagName('code')[0]
console.log(textoescrito) 

b2.addEventListener("click", function(e) {
    const nomeando = document.querySelector("#text1")
    const valueNome = nomeando.value; 
    console.log(valueNome)

    const descrevendo =  document.querySelector("#text2")
    const valueDesc = descrevendo.value; 
    console.log(valueDesc)

    const pegaLinguagem = document.querySelector('.linguagem')
    const valueLing = pegaLinguagem.value; 
    console.log(valueLing)

    const pegaCor = document.querySelector('#b1')
    const valueCor = pegaCor.value; 
    console.log(valueCor)

    const codigoDaCaixa = document.querySelectorAll('.preview-hljs')
    console.log(codigoDaCaixa)


})

function escreveTitulo() {
    const sla = document.querySelector("#text1").value
    document.getElementById("nomeProj").innerHTML = sla
    console.log(sla)
}

// function confereClick(e) {
//     if(this === true) {
//         console.log("clicou")
//     } else {
//         console.log("a")
//     }
// }
// confereClick()










