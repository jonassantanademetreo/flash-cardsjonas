function criaCartao(categoria, pergunta, resposta){
    let container = document.getElementById('container');
    let Cartao = createlElement('article');
    Cartao.classname='cartao';

    Cartao.innerHTML=`
    <div class="cartao__conteudo">
                    <h3>${categoria}</h3>
                    <div class="cartao__conteudo__pergunta">
                        <p>${pergunta}</p>
                    </div>
                    <div class="cartao__conteudo__resposta">
                        <p>O JavaScript é uma linguagem de programação</p>
                    </div>
                </div>
    `
    container.appendChild(cartao)
}