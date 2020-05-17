var pontuacao = [0, 0];
var pontuacaoRodada = 0;
var jogadorAtual = 0;

// var dado = Math.floor(Math.random()*6)+1;

//document.querySelector("#pontuacao-rodada-0").textContent = dado;

var botaoLancarDado = document.querySelector("#botao-lancar-dado");
var botaoPassarVez = document.querySelector("#botao-passar-vez");
var botaoNovoJogo = document.querySelector("#botao-novo-jogo");

var pontuacaoRodada0 = document.querySelector('#pontuacao-rodada-0');
var pontuacaoRodada1 = document.querySelector('#pontuacao-rodada-1');

var pontuacaoGlobal0 = document.querySelector('#pontuacao-global-0');
var pontuacaoGlobal1 = document.querySelector('#pontuacao-global-1');
var pontuacoesGlobais = [pontuacaoGlobal0, pontuacaoGlobal1];

var pontuacoesRodadas = [pontuacaoRodada0, pontuacaoRodada1];



botaoLancarDado.addEventListener("click", function () {
    var dado = Math.floor(Math.random() * 6) + 1;
    if (dado == 1) {
        pontuacao[jogadorAtual] = 0;
        pontuacoesRodadas[jogadorAtual].textContent = 0;
        //pontuacoesGlobais[jogadorAtual].textContent = pontuacao[jogadorAtual]
        if (jogadorAtual == 0) {
            jogadorAtual = 1;
        } else {
            jogadorAtual = 0;
        }

    } else {
        pontuacao[jogadorAtual] += dado;
        pontuacoesGlobais[jogadorAtual].textContent = pontuacao[jogadorAtual];
        pontuacoesRodadas[jogadorAtual].textContent = dado;
    }
    if (pontuacoesGlobais[jogadorAtual].textContent >= 10) {

        alert("O jogador " + (jogadorAtual + 1) + " venceu! Placar final: " + (pontuacoesGlobais[1].textContent) + " x " + (pontuacoesGlobais[0].textContent));
        newGame();
    }
})

botaoPassarVez.addEventListener("click", function () {
    if (jogadorAtual == 0) {
        jogadorAtual = 1;
    } else {
        jogadorAtual = 0;
    }
})

botaoNovoJogo.addEventListener("click",  function(){
    newGame();
})

function newGame() {
    for(i = 0; i< 2; i++) {
        pontuacao[i]=0
        pontuacoesGlobais[i].textContent = 0;
        pontuacoesRodadas[i].textContent = 0;
    }
    jogadorAtual = Math.floor(Math.random() * 2);
}
