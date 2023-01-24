<!-- Este arquivo conterá informações auxiliares ao desenvolvimento -->

<h3>Entrega e Requsitos:</h3>

Entrega Regular: 03/02/23
Entrega em Recuperação: ??/02/23

Requisitos Obrigatórios: 1-21 e 23-35
Requisitos Bonus: 22

Aprovação: 28 Requsitos
Aprovação em recuperação: 32 Requisitos

<h3>Testando a aplicação:</h3>

* Testes na raíz do projeto são referentes ao avaliador da trybe.
* Testes no diretório de backend devem ser desenvolvidos.
* O número do requisito não corresponde ao teste.
* Para testar a aplicação execute os testes no diretório raiz com:
<b>npm test</b> ou <b>npm test nome-do-arquivo</b>

* O teste 0 avalia a migration: requer os dockerfiles e a migration, mesmo sem rota nenhuma, indicando se as configurações básicas estão adequadas.

<h3>Especificações:</h3>

* docker V20+
* docker compose V1.29+
* Node V16

<h3>Anotações</h3>

<b>Docker:</b>

* Dokerfiles estão prontos, só devem ser preenchidos.
* É uma boa prática limpar imagens antigas do docker para evitar conflitos.
* Devido ao Node V16 é necessário descomentar algumas linhas do docker
* Para a execução é subir três containers - back(port: 3001),front(port: 3000) e DB(port: 3003)
* Requisições do thunderClient serão na porta 3001.
* Tem que criar os dockerfiles pra back e front obrigatóriamente!
* Os containers <b>não devem ser subidos via <i>docker compose up</i></b>, utilize:
<b>npm run compose:up</b>
<b>npm run compose:up dev -- --build</b> <i>(Para desenvolvimento e testes)</i>

<b>Sequelize:</b>

* Sequelize será usado pro banco, é preciso criar as migrations e models.
* Não exclua a migration já criado e siga o modelo para futura migrations.
* Não utilize <b>Sequelize-cli init</b>(para criar as migrations), elas já estão criadas só precisam ser alteradas.
* Assim que criar uma migration você deve <b>renomear a seeder correspondente retirando o underline (_)</b> ao fim dela, assim o script db:reset vai usá-la nos testes e você se certificará se sua migration funcionou como o esperado.
* Quaisquer execução referente ao sequelize-cli deve ser realizada dentro do diretório app/backend.

<b>NPM:</b>

* package.json está travado para avaliação(não adicione dependências nele), as dependencias devem estar listadas em <b>package.npm</b>!
* Seeders já estão presentes e não precisam ser criados, só devem ser renomeados.
* Algumas bibliotecas já estão no package.json, numa versão já delimitada.
* heathCheck: O backend subirá primeiro, seguido pelo frontend.

<b>Criptografia:</b>

* A criptografia das senhas é realizada pelo <b>bcryptjs</b>.
* No requisitos de login a senha deve ser cryptografada.
* Criptografia na criação de conta:
Preenchimento de criação → requisição → identificação da senha obtida → criptografia da senha obtida → registro senha criptografada no DB associada ao usuário.

* Processo de criptografa no Login:
Preenchimento login → requisição → identificação da senha e usuários obtidos → Descriptografia da senha associada ao usuário → comparação dos dados → Resposta.

<b>Outros dados relevantes:</b>

* As variáveis de ambiente devem seguir o modelo de .env.exemple;
* O front só fica visivel <b>depois da criação /matches e /leaderboard</b>.
* Todos os commits devem ser realizados no diretório raíz.
* <b>npm run db:reset</b> retorna o Banco de dados ao estado inicial.

<b> NPM packages - Backend </b>

* "@testing-library/jest-dom": "5.15.0",
* "@testing-library/react": "11.2.7",
* "@testing-library/user-event": "12.8.3",
* "axios": "0.24.0",
* "eslint-config-trybe-frontend": "1.2.1",
* "react": "17.0.2",
* "react-dom": "17.0.2",
* "react-router-dom": "6.0.2",
* "react-scripts": "4.0.3",
* "uuid": "8.3.2",
* "web-vitals": "1.1.2"

<b>Comandos importantes </b>

<h2>Códigos de status de respostas HTTP:</h2>

* 200 OK
* 201 Created
* 204
* 400 Bad Request
* 401 Unauthorized
* 402 Payment Required 
* 403 Forbidden
* 404 Not Found
* 500 Internal Server Error

<h2>Sequelizer</h2>

* Gerar de Migration:
$ npx sequelize migration:generate --name migrationName

* Gerar Migration e model:
$ npx sequelize model:generate --name NomeDoModel --attributes nomeDoAtributo:string

Nota: Os arquivos gerados através desse comando são de dificil leitura, é recomendável criar o Model a parte e então gerar a migration.

* Executar Migrations:
$ npx sequelize db:migrate

* Desfazer Mirations(down):
$ npx sequelize db:migrate:undo

* Criar Seeds:
npx sequelize seed:generate --name users

* Executar seeds
$ npx sequelize db:seed:all

* Desfazer seeds
$ npx sequelize db:seed:undo:all

<h2>Comandos locais:</h2>

npm run prestart - Cria o banco de dados e sobe as migrations.
npm run start:test - Cria uma outra instancia do App na porta 3030.
npm run drop - Deleta o Banco de Dados.
npm run seed - Injeta os dados contidos nos seeders.
npm run debug - Executa o servidor com nodemon.

npx sequelize-cli db:drop - Deleta o Banco de Dados
npx sequelize-cli db:create && npx sequelize-cli db:migrate - Gera DB e cria tabelas
npx sequelize-cli db:seed:all - Insere dados e popula a tabela

<b> Sobre o Banco de Dados:</b>

* tabelas:
1. Users:
Colunas: id, username, role, email e password.

2. Matches:
Colunas: home_team_id(adiquirido da tabela de times), home_team_goals, away_team_id(adiquirido da tabela de times), away_team_goals e in_progress

3. Teams - Contém os times de futebol
Colunas: Id e Team