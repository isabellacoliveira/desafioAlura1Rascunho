// fazer uma função que pegue os textos adicionados nos dois inputs e o codigo inserido no editor (ok-)
//  a cor que está a caixa de texto (ok)
// a linguagem e associe essa ação ao botão salvar projeto (ok)
// ao ser salvo, tudo isso deve ser adicionado a página de comunidade 
// lá deve aparecer o card com a cor, o nome do projeto e a descrição 
// let nomeProj = document.getElementById('text1')
// let descProj = document.getElementById('text2')
const textoescrito = document.getElementsByTagName('code')[0]
console.log(textoescrito) 

// verificar quem está com o conteúdo socorro e definir um inner html para esse elemento de forma que ele receba o que foi escrito na caixa de texto 

function salvacao(){
    $(document).ready(function () {
        $("#b2").click(function () {
            var nomeando = $("#text1").val();
            var descrevendo = $("#text2").val();
            var pegaLinguagem = $(".linguagem").val();
            var pegaCor = $("#b1").val();
            textoescrito.innerHTML = `<code class="preview-hljs ${linguagem.value}" contenteditable="true" aria-label="Editor de código" ></code>`
            var pegaConteudo = $("code").val()
            alert(nomeando + descrevendo + pegaLinguagem + pegaCor  + pegaConteudo);
        });
    });
}

