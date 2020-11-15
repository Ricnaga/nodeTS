#### <div align="right">- Projeto Finalizado <div>
# <div align="center">Exercício com NodeJS e Typescript <div>
## <div align="center">Exercício utlizando a tecnologias nodejs e typescript<div>
### <div align="center">Sumário <div>
### <div align="center">================= <div>
<!--ts-->
   - [Requisitos](#Requisitos)
   - [Tecnologias utilizadas](#tecnologias-utilizadas)
   - [Autor](#autor)
   - [Licença](#Licença)
<!--te-->
## <div align="center">Requisitos<div>
Antes de começar é necessário instalar algumas ferramentas, tais como um editor de códigos para realizar compilação dos mesmos. Os códigos desse repositório foi utilizado o [Visual Studio Code](https://code.visualstudio.com/), [NodeJS](https://nodejs.org/en/), [Docker](https://www.docker.com/), [Insomnia](https://insomnia.rest/download/) e [Git Bash](https://gitforwindows.org/). Após instalados, será necessário instalar o também o [Yarn](https://yarnpkg.com/) para que seja possível automatizar as instalações de todas as dependências que foram usadas nessa aplicação.

No terminal, realize a clonagem do repositório.\
$ git clone <https://github.com/Ricnaga/nodeTS> \
Acesse o projeto.\
$ cd nodeTS \
Execute o comando yarn para reaver todos as dependências instaladas dessa aplicação.\
$ yarn\

Necessário também instalar o Docker para iniciar um container com banco de dados.\
$ docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres\

Feito a instalação das dependências é hora de iniciar a aplicação.\
$ yarn dev:server\

Para testar as rotas é necessário configurar o Insomnia com as seguintes rotas:\
- POST/GET - localhost:3333/appointments
- POST/PATCH - localhost:3333/users
- POST - localhost:3333/sessions

## <div align="center">Tecnologias utilizadas<div>
- [NodeJS](https://nodejs.org/en/) 
- [Git Bash](https://gitforwindows.org/)
- [Yarn](https://yarnpkg.com/getting-started/install)
- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [ECMAscript](https://www.ecma-international.org/publications/standards/Standard.htm)
- [Typescript](https://www.typescriptlang.org/)
- [Docker](https://www.docker.com/)
- [Insomnia](https://insomnia.rest/download/)
- [Typeorm](https://typeorm.io/#/)

## <div align="center">Autor<div>
Exercícios extraídos da [Rocketseat](https://rocketseat.com.br/), realizados e respondidos por minha pessoa :) \
Gostou? tem alguma sugestão de melhoria? por favor, entre em contato e ja aproveita e me adiciona \
<a href="https://www.linkedin.com/in/ricardo-nagatomy-56553254"><img src="https://img.shields.io/badge/-RicardoNaga-blue?style=flat-square&logo=Linkedin&logoColor=white"></a>
<a href="https://app.rocketseat.com.br/me/ricardo-nagatomy-08130"><img src="https://img.shields.io/badge/-Rocketseat-000?style=flat-square&logo=&logoColor=white"></a>

## <div align="center">Licença<div>

![GitHub](https://img.shields.io/github/license/Ricnaga/nodeTS)