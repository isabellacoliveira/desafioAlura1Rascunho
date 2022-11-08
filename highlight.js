const linguagem = document.querySelector('.linguagem')
const areaDoCodigo = document.querySelector('#caixa')
const codiguinho = document.getElementsByTagName('code')
const selecionaBotao = document.querySelector('#botao')


function aplicaHighlight() {
    const codigo = areaDoCodigo.innerText;
    areaDoCodigo.innerHTML = `<code class="preview-hljs ${linguagem.value}" contenteditable="true" aria-label="Editor de código"></code>`
    areaDoCodigo.querySelector("code").textContent = codigo 
    hljs.highlightElement(areaDoCodigo.querySelector("code"))
}

selecionaBotao.addEventListener("click", () => aplicaHighlight())



