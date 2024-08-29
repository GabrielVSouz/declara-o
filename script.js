// Função para mudar a posição do botão "Não"
function mudarPosicao() {
    var botaoNao = document.querySelector('.botao-nao');

    if (botaoNao.style.transform === 'translateX(100px)') {
        botaoNao.style.transform = 'translateX(0)';
    } else {
        botaoNao.style.transform = 'translateX(100px)'; // Muda a posição do botão
    }
}

// Função a ser executada quando o botão "Sim" é clicado
function acaoBotaoSim() {
    var mensagem = document.getElementById('mensagem-confirmacao');
    if (mensagem) {
        mensagem.textContent = 'Te amo amorzinho!!! 💖';
        mensagem.style.display = 'block'; // Mostra a mensagem
    } else {
        console.error('Elemento com id "mensagem-confirmacao" não encontrado.');
    }
}

// Adiciona um ouvinte de evento para o botão "Sim"
document.getElementById('botao-sim').addEventListener('click', acaoBotaoSim);