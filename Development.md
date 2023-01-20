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
* Os containers não devem ser subidos via <i>doker compose up</i>, utilize:
<b>npm run compose:up</b>
<b>npm run compose:up dev -- --build</b> <i>(Para desenvolvimento e testes)</i>

<b>Sequelize:</b>

* Sequelize será usado pro banco, é preciso criar as migrations e models.
* Não exclua a migration já criado e siga o modelo para futura migartions.
* Não utilize <b>Sequelize-cli init</b>(para criar as migrations), elas já estão criadas só precisam ser alteradas.

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