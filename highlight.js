
const linguagem = document.querySelector('.linguagem')
console.log(linguagem)

// chamar a div 
const areaDoCodigo = document.querySelector('.preservar')
console.log(areaDoCodigo) 

// const codiguinho = document.getElementsByTagName('code')
// console.log(codiguinho) 

const selecionaBotao = document.querySelector('#botao')
console.log(selecionaBotao) 

// não funciona
// const barra = document.getElementsByClassName('.barraSuperior')
// console.log(barra)

function aplicaHighlight() {
    const codigo = areaDoCodigo.innerText;
    areaDoCodigo.innerHTML = `<code class="preview-hljs ${linguagem.value}" contenteditable="true" aria-label="Editor de código" ></code>`
    areaDoCodigo.querySelector("code").textContent = codigo;
    hljs.highlightElement(areaDoCodigo.querySelector("code"))
}

selecionaBotao.addEventListener("click", () => aplicaHighlight())



