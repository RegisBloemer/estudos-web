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
  const jogadoresSection = document.getElementById("jogadores-list");

  const titles = document.getElementsByTagName("h3");
  const jogador = document.getElementsByTagName("ul");

  const ultimoJogador = jogador[jogador.length - 1];
  const lis = ultimoJogador.getElementsByTagName("li");

  const confirma = confirm(
    `Tem certeza que deseja cancelar escalação deste jogador?: \n 
    ${lis.item(0).textContent} 
    ${lis.item(1).textContent} 
    ${lis.item(2).textContent}`
  );

  if (confirma) {
    jogadoresSection.removeChild(titles[titles.length - 1]);
    jogadoresSection.removeChild(ultimoJogador);
  } else {
    alert(`A escalação deste jogador não foi cancelada: \n 
    ${lis.item(0).textContent} 
    ${lis.item(1).textContent} 
    ${lis.item(2).textContent}`);
  }
}
