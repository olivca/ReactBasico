## Primeiros Componentes react + node + bootstrap:

1- Instalar o node.js: https://nodejs.org/pt-br/
(Utilizei a versão 14.15.1 LTS)

2- Após instalar e desabilitar antivírus(porquê deu erro). Criei o projeto e no terminal do vscode executei o comando:
npx create-react-app meu-app

3- Executar os comandos cd meu-app e depois: npm start

4- criei uma estilização pro body no arquivo: src/App.css

5- No public/index.html adcionei o cdn bootstrap

6- dentro de src criei o diretório Components/Menu/Menu.js

7- Em menu.js importei React from react e criei a class menu extends react.component{} e a função render. No final coloquei o export default.

8- Fui em srs/App.js e: import Menu from './Components/Menu/Menu' e coloquei a tag jsx(para abertura e fechamento da tag menu) dentro do header.

9- Colei um menu do bootstrap dentro do render do menu.js mas modifiquei class para className que é a substituição em jsx.
  


Desenvolvi esse repositório para consultas futuras e divulgação do aprendizado que venho tendo a partir do curso da Recode-pro e Digital Innovation One.
<center>Notes:</center> 
Sempre que criamos uma classe precisamos importar react da classe React para herdar as funcionalidades de um Component.


