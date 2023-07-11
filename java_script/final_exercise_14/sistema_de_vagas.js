let lista = {};

lista.vagas = [];

function criarVaga(
  objeto,
  nome_da_vaga,
  quantidade_disponivel,
  descricao,
  data
) {
  let vaga = {
    nome: nome_da_vaga,
    quantidade: quantidade_disponivel,
    descricao: descricao,
    data: data,
    cadidatos: [],
  };

  objeto.vagas.push(vaga);
}

function listarVagas(lista) {
  lista.vagas.forEach((vaga, index) => {
    alert(`Vaga ${index + 1}: ${vaga.nome}, Quantidade: ${vaga.quantidade}`);
  });
}

function listarVagas(lista) {
  lista.vagas.forEach((vaga, index) => {
    alert(`Vaga ${index + 1}: ${vaga.nome}, Quantidade: ${vaga.quantidade}`);
  });
}

function visualizarVaga(lista, indice) {
  console.log(indice);
  let vaga = lista.vagas[indice];
  if (vaga) {
    alert(
      `\n1) Nome da vaga: ${vaga.nome} \n2) Quantidade disponível: ${vaga.quantidade}, 
       \n3) Descrição: ${vaga.descrição} \n4) Data limite: ${vaga.data}`
    );
  } else {
    console.log(`Não existe vaga com o índice ${indice}.`);
  }
}

function inscreverCandidato(lista, indiceVaga, nomeCandidato) {
  let vaga = lista.vagas[indiceVaga];
  if (vaga) {
    let candidato = {
      nome: nomeCandidato,
    };
    vaga.candidatos.push(candidato);
    alert(`Candidato ${nomeCandidato} inscrito na vaga ${vaga.nome}.`);
  } else {
    alert(`Não existe vaga com o índice ${indiceVaga}.`);
  }
}

function removerVaga(lista, indiceVaga) {
  if (lista.vagas[indiceVaga]) {
    let confirma = confirm("Deseja realmente deletar esta vaga?");
    if (confirma) {
      // Se a vaga existir
      let vaga = lista.vagas[indiceVaga];
      let mensagem = `A seguinte vaga foi removida:\n\nNome da vaga: ${vaga.nome}\nQuantidade disponível: ${vaga.quantidade}\nDescrição: ${vaga.descrição}\nData limite: ${vaga.data}`;

      lista.vagas.splice(indiceVaga, 1); // Remove a vaga

      alert(mensagem); // Mostra um alert com os dados da vaga
    } else {
      let vaga = lista.vagas[indiceVaga];
      alert(
        `A seguinte vaga não foi removida:\n\nNome da vaga: ${vaga.nome}\nQuantidade disponível: ${vaga.quantidade}\nDescrição: ${vaga.descrição}\nData limite: ${vaga.data}`
      );
    }
  } else {
    alert(`Não existe vaga com o índice ${indiceVaga}.`);
  }
}

do {
  option = prompt(
    "\nEscolha a opção que desejar: \n1 - Listar vagas disponiveis \n2 - Criar uma nova vaga" +
      "\n3 - Visualizar uma vaga \n4 - Inscrever um candidato em uma vaga" +
      "\n5 - Excluir uma vaga \n6 - Sair"
  );
  switch (option) {
    case "1":
      listarVagas(lista);
      break;

    case "2":
      nomeDaVaga = prompt("\n1) Digite o nome da vaga:");
      quantidade = prompt("\n2) Digite a quantidade de vagas disponiveis:");
      descrição = prompt("\n3) Digite uma descrição básica sobre a vaga: ");
      data = prompt("\n4) Digite a data limite para esta vaga: ");

      let confirma = confirm("Deseja realmente criar esta vaga?");

      if (confirma) {
        criarVaga(lista, nomeDaVaga, quantidade, descrição, data);
        alert(
          `Vaga de ${nomeDaVaga} com a quandidade de ${quantidade} criada!;`
        );
      } else {
        alert("Criação de vaga cancelada.");
      }

      break;

    case "3":
      numero = Number(
        prompt("\n1) Digite o numero da vaga que deseja visualizar: ")
      );
      visualizarVaga(lista, numero);
      break;

    case "4":
      numero = Number(
        prompt(
          "\n1) Digite o numero da vaga que vc deseja adicionar o candidato: "
        )
      );
      nomeCandidato = Number(
        prompt(
          "\n1) Digite o nome do candidato que vc deseja adicionar na vaga: "
        )
      );
      inscreverCandidato(lista, numero, nomeCandidato);
      break;

    case "5":
      numero = Number(
        prompt("\n1) Digite o numero da vaga que deseja remover: ")
      );
      removerVaga(lista, numero);
      break;

    case "6":
      alert("O sistema esta finalizando.");
      break;

    default:
      alert("Por favor escolha uma opção válida");
      break;
  }
} while (option !== "6");
