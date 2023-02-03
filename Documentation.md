<!-- Este arquivo conterá a documentação referente ao projeto -->

<h3>Funcionalidades:</h3>
...

A aplicação utiliza um banco de dados SQL com identificadores unicos impedindo redundancias e duplicidades.

São utilizadas 3 portas para a aplicação:

Frontend:
Backend:
Banco de dados:

A aplicação possui 4 rotas:

* '/login' - Para criação e login de usuários (.post e .get)
* '/teams' - Para requisição da lista de times, ou da busca de um time por ID( '/teams/:id')
* '/matches', matchesRouter); - Para requisição, adicção ou atualização das partidas realizadas.
* '/leaderboard', leaderboardRouter); - Para requisição da tabela de pontuação das partidas

<h3>Como utilizar:</h3>

<h4>Como instalar:</h4>

Os arquivos desta aplicação podem ser obtidos através da clonagem deste repositório via:

git clone -INSERIR REPOSITÓRIO-

Esta aplicação utiliza:

* NodeJS - v16 ou superior
* Docker - v? ou superior
* Docker-compose v? ou superior

Para verificar a presença ou versão destes softwares, podem ser utilizados os seguintes comandos:

<b>nvm -v
docker --version
docker-compose --version</b>

<h4>Como executar:</h4>
A aplicação pode ser utilizada através do comando: <b>npm run compose:up</b>

Com os containers rodando e a aplicação roando saudavelmente, o frontend pode ser acessado no navegador através da rota:

localhost/????

<h3> Informações detalhadas:</h3>

<h4>Sobre o sistema de Login</h4>

O sistema de login possui mecânismos de validação para impedir a criação ou login de usuários com emails ou senhas inválidas, 
estes mecânismos validam emails através de regex, impedindo o uso de emails vazios, com endereços incompletos ou erros de escrita.
Já o mecânismo de validação de senhas realiza a criptografia via bycript, garantindo a gravação e recuperação segura de senhas, impedindo também o cadastro de senhas vazias e o login com a senha errada.

<h4>Sobre o sistema de times</h4>

Este utiliza cadastros unicos para times por id, impedindo redundancias e garantindo a distinção entre diferentes times.

<h4>Sobre o sistema de partidas</h4>

Este sistema realiza validações para as partidas, impedindo o registro de partidas inválidas, como partidas entre dois times iguais, identificando partidas em progresso separando-as das partidas já finalizadas, fazendo a gestão dos resultados individuais de cada.

<h4>Sobre o sistema de placar</h4>

Este calcula as posições do times com diferentes dados estatisticos referentes aos resultados das partidas.

<h4> Sobre os testes: </h4>

Todos os testes de funcionalizades se encontram nas pastas test dentro dos respectivos diretórios de frontend e backend, estes podem ser executados dentro de seus devidos diretórios através do comando <b> inserir comando </b> com os containers da aplicação já devidamente subidos.

Estes testes foram realizados utilizando Sinnon, Chai e Mocha, possuindo a função de garantir o devido funcionamento em qualquer caso de alteração ou melhoria do código.

<h3>Sorbre o desenvolvimento:</h3>

* Desenvolvedor:
* Linkedin
* Github
* Trybe