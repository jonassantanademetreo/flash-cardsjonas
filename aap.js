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
                        <p>${resposta}</p>
                    </div>
                </div>


let respostaEstaVisivel =false

function viraCartao(){
respostaEstaVisivel = !respostaEstaVisivel
cartao.classList.toggle('active, respostaEstaVisivel');
}

cartao.addEventListener('cliock', viraCartao);

    container.appendChild(cartao)
}