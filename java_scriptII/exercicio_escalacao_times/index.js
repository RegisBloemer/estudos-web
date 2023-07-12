function escalarJogador() {
  const posicaoJogador = document.getElementById("posicao").value;
  const nomeJogador = document.getElementById("nome").value;
  const numeroJogador = document.getElementById("numero").value;

  const confirma = confirm(
    `Tem certeza que deseja escalar este jogador?: \n 
    Posição do jogador: ${posicaoJogador} 
    Nome do jogador: ${nomeJogador} 
    Numero da camisa do jogador: ${numeroJogador}`
  );

  if (confirma) {
    const jogadoresSection = document.getElementById("jogadores-list");

    const h3 = document.createElement("h3");
    h3.innerText = `Informações do Jogador ${numeroJogador}`;

    const ul = document.createElement("ul");
    ul.id = "jogador-" + numeroJogador;

    const posicaoJogadorLi = document.createElement("li");
    posicaoJogadorLi.innerText = `Posição do jogador: ${posicaoJogador}`;
    ul.appendChild(posicaoJogadorLi);
    ul.appendChild(document.createElement("br"));

    const nomeJogadorLi = document.createElement("li");
    nomeJogadorLi.innerText = `Nome do jogador: ${nomeJogador}`;
    ul.appendChild(nomeJogadorLi);
    ul.appendChild(document.createElement("br"));

    const numeroJogadorLi = document.createElement("li");
    numeroJogadorLi.innerText = `Numero da camisa do jogador: ${numeroJogador}`;
    numeroJogadorLi.id = "jogador-" + numeroJogador;
    ul.appendChild(numeroJogadorLi);
    ul.appendChild(document.createElement("br"));

    jogadoresSection.append(h3, ul);
  } else {
    alert(
      `O jogador:\n
      ${posicaoJogador}
      ${nomeJogador} 
      ${numeroJogador} 
      \n Não foi escalado!`
    );
  }
}

function removerJogadorEscalado() {
  const number = document.getElementById("remocao").value;
  const jogadorParaRemover = document.getElementById("jogador-" + number);

  const confirma = confirm(
    `Tem certeza que deseja cancelar escalação deste jogador?:
    ${jogadorParaRemover.innerText}`
  );

  if (confirma) {
    document.getElementById("jogadores-list").removeChild(jogadorParaRemover);
    document.getElementById("remocao").value = "";
  } else {
    alert(`A escalação deste jogador não foi cancelada: \n 
    ${jogadorParaRemover.innerText}`);
  }
}
