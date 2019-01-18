# Página API Star Wars

---

## Dependências do projeto
Baixe as dependências listadas abaixo:

* Node v6.x +
* Gulp

Baixe o Node no site oficial: https://nodejs.org/en/ - De preferência a "Stable Version". Feito o download, execute o instalador e espere o pacote ser instalado.
Após a instalação, abra seu Bash (Terminal) e execute o seguinte comando:

```
npm install -g gulp
```

Esse comando será responsável por instalar o CLI (Command Line) do Gulp.

---

## Estrutura do Projeto
O projeto acompanha os seguintes critérios/tecnologias:

* Jade (para HTML) + Component Based Pattern
* SCSS (para CSS) + Component Based Pattern
* Vanilla JavaScript (opc: jQuery) + Module Pattern (Dojo)

Todos os arquivos a serem editados, devem ser feitos na pasta única e exclusivamente ***source***.

Opcional: Não impede se não instalar, mas seria uma boa pra trabalhar com os companheiros de equipe. Baixe o pacote ***EditorConfig*** na sua IDE.

---

## Iniciando o projeto

Opção 1: NPM (Node Package Management):

```
# Executa o NPM para instalação das dependências do projeto
npm install

# Executa o Gulp para compilação e execução do browser-sync
npm start
```

Opção 2: YARN:

```
# Executa o YARN para instalação das dependências do projeto
yarn install

# Executa o Gulp para compilação e execução do browser-sync
yarn start

# Mude para a Branch de Develop para desenvolver, e depois faça um merge na master para fazer o pacote
```

Feito tudo isso, pode começar a editar o projeto na pasta SOURCE (***nunca edite a Public ou Dist***).