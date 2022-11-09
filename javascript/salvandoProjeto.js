// fazer uma função que pegue os textos adicionados nos dois inputs e o codigo inserido no editor (ok-)
//  a cor que está a caixa de texto (ok)
// a linguagem e associe essa ação ao botão salvar projeto (ok)
// ao ser salvo, tudo isso deve ser adicionado a página de comunidade 
// lá deve aparecer o card com a cor, o nome do projeto e a descrição 
const textoescrito = document.getElementsByTagName('code')[0]
console.log(textoescrito) 

// verificar quem está com o conteúdo socorro e definir um inner html para esse elemento de forma que ele receba o que foi escrito na caixa de texto 
// function salvacao(){
//     $(document).ready(function () {
//         $("#b2").click(function () {
//             var nomeando = $("#text1").val();
//             var descrevendo = $("#text2").val();
//             var pegaLinguagem = $(".linguagem").val();
//             var pegaCor = $("#b1").val();
//             textoescrito.innerHTML = `<code class="preview-hljs ${linguagem.value}" contenteditable="true" aria-label="Editor de código" ></code>`
//             var pegaConteudo = $("code").val()
//             alert(nomeando + descrevendo + pegaLinguagem + pegaCor  + pegaConteudo);
//         });
//     });
// }

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

    const codiguinho = document.querySelector('.hljs-name')
    console.log(codiguinho)

    const cola  = document.querySelector('.hljs-comment')
    console.log(cola)

})










// var titulando = document.getElementById('nomeProj')
// console.log(titulando)

// var desc = document.getElementById('descProj')
// console.log(desc)

// function colocaConteudo() {
    
// }

