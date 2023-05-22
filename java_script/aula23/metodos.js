let pessoa = {
  nome: "José",
  idae: 34,
  metodoPessoa() {
    console.log("Olá, rapaz! Meu nome é " + this.nome);
  },
};

console.log(pessoa);

pessoa.metodoPessoa();
