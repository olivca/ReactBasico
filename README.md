O React.js é uma biblioteca JavaScript  lançada em 2013 pelo Facebook. **Sua função é criar interfaces.** Sendo parte da camada View da arquitetura MVC focando apenas na criação de componentes visuais. O React facilita o reaproveitamento de códigos devido a sua componentização.

## Na branch reactCDN há o primeiro app com react CDN
Utilizei 2 links react CDN e o CDN do site do Babel.
https://pt-br.reactjs.org/docs/cdn-links.html
https://cdnjs.com/libraries/babel-standalone
https://unpkg.com/babel-standalone@6/babel.min.js

*Para produção deve-se usar outro link CDN, pois ele é mais seguro. Ou a ferramente minify que "bagunça" o código*

No index.html há os primeiros scripts jsx de criação de componentes com elementos html.
Também há o conceito de P.O.O (herança com a palavra reservada _extends_)


## Já na branch principal há o primeiro componente com react + node + bootstrap

1- Instalar o node.js: https://nodejs.org/pt-br/
(Utilizei a versão 14.15.1 LTS)

2- Após instalar e desabilitar antivírus(porquê deu erro). Criei o projeto e no terminal do vscode executei o comando:
npx create-react-app meu-app

3- Executar os comandos cd meu-app e depois: npm start

4-criei uma estilização pro body no arquivo: src/App.css
5-No public/index.html adcionei o cdn bootstrap
6- dentro de src criei o diretório Components/Menu/Menu.js
7- Em menu.js importei React from react e criei a class menu extends react.component{} e a função render. No final coloquei o export default.
8- Fui em srs/App.js e: import Menu from './Components/Menu/Menu' e coloquei <Menu /> dentro do header.
9- Colei um menu do bootstrap dentro do render do menu.js mas modifiquei class para className que é a substituição em jsx.
  


Desenvolvi esse repositório para consultas futuras e divulgação do aprendizado que venho tendo a partir do curso da Recode-pro e Digital Innovation One.



















