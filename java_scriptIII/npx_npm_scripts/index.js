/*1. Comece inicializando um novo projeto npm em um pasta:
    
    ```jsx
    npm init -y
    ```
    
2. Depois, instale o módulo “hello-world-npm”:
    
    ```jsx
    npm install --save hello-world-npm
    ```
    
3. Com um módulo instalado podemos executá-lo pela linha de comando utilizando o npx:
    
    Obs.: Repare na pasta node_modules/.bin/hello-world-npm que o arquivo que nós estamos executando é o principal do módulo.
    
    ```jsx
    npx hello-world-npm
    ```
    
4. Além de executar um módulo com o npx, podemos criar scripts de atalho para qualquer comando npx, 
ou mesmo outros tipos de comando. Para fazer isso só precisamos incluir o script no arquivo “package.json”. 
Inclua um script que roda o módulo hello-world-npm com um comando abreviado:
    
    Obs.: Repare que não precisamos incluir o comando npx nos scripts, ele funciona automaticamente.
    
    ```jsx
    // package.json
    
    // ...
    	"scripts": {
        "hello": "hello-world-npm"
    	},
    // ...
    ```
    
5. E então execute o script com o comando “npm run“:
    
    ```jsx
    npm run hello
    ```
    
6. Agora vamos criar um script para executar nossos próprios arquivos. 
Isso é um procedimento muito comum para criarmos atalhos que rodam as nossas aplicações ou partes dela. 
Exemplos comuns de scripts: executar o app, executar em modo de desenvolvimento, executar testes automatizados, 
servir de atalho para comandos grandes e/ou que são usados com frequência, etc. Crie um script para rodar o arquivo 
principal do projeto: 
// package.json

// ...
	"scripts": {
    "hello": "hello-world-npm",
    "start": "node index.js"
  },
// ...
7. E antes de executar o comando vamos criar o arquivo principal “index.js”:
    
    ```jsx
    // index.js
    
    const hello = require('hello-world-npm')
    
    console.log(hello())
    ```
    
8. E para concluir podemos rodar o comando “npm run start” para executar nossa aplicação. 
No entanto, o comando start é um comando especial do Node, e também podemos executar ele apenas com:

npm start
*/
