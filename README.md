# NewTail: Teste para desenvolvedor Backend

## Sobre o teste:
Para darmos continuidade ao nosso processo, temos um desafio para você!!!
Os newtailers são aficionados por Game Of Thrones e com isso, queremos criar um jogo
com algumas informações da série.
Para possibilitar a equipe de frontend criar esse joguinho, precisamos desenvolver uma API
que contenham as informações sobre as casas.

## Requisitos:
- A API deve ser REST
- Para cada casa, os seguintes dados devem ser obtidos do banco de dados da aplicação,
sendo inseridos individualmente:

Nome
Região
Ano de fundação
Atual Lord
● Obs: Nas Informações do lord da casa, devemos armazenar em que temporadas
esse personagem apareceu.

Todas as informações podem ser obtidas pela API pública "An API of Ice And Fire":
https://anapioficeandfire.com/

## Funcionalidades desejadas:
- Adicionar uma casa (com nome, região, ano de fundação e atual lord)
- Listar casas
- Buscar por nome
- Buscar por ID
- Remover casa

## Linguagens que usamos: Node.js
## Bancos que usamos: MongoDB, Cassandra, DynamoDB, MySQL, PostgreSQL

E não se esqueça dos testes!! Esperamos um software bem testado.

# Configuração do projeto

### Clone este projeto em sua estação
```
git clone <url-deste-repositorio>
```

### Acesse a pasta e instale as dependências
```
cd newtail
npm i
```

### Configuire um arquivo .env na raiz do projeto (veja .env.example)

O banco de dados utilizado é o mysql

```
# Database Connection
DB_HOST=hostname
DB_PORT=port
DB_DIALECT=database-dialect
DB_DATABASE=database-name
DB_USER=username
DB_PASS=password
NODE_ENV=environment

# Server
PORT=porta
```

### Crie o banco de dados e execute as migrations
```
npm install -g sequelize-cli
npx sequelize-cli db:create
npx sequelize-cli db:migrate
```

O banco de dados é inicializado vazio

### Inicie o servidor
```
npm start
```

### Faça requisições

Funcionalidade: Adicionar uma casa
Rota: POST /api/v1/casa
Modelo JSON:
```
{
    "nome": "Nome da casa",
    "regiao": "Região",
    "anoDeFundacao": 2021,
    "lord": {
        "nome": "Nome do Lord",
        "temporadas": [n, n, n, n]  // Array com inteiros representando as temporadas
    }
}
```

Funcionalidade: Listar todas casas
Rota: GET /api/v1/casa

Funcionalidade: Listar todas casas
Rota: GET /api/v1/casa/nome/<nome>

Funcionalidade: Listar todas casas
Rota: GET /api/v1/casa/<id>

Funcionalidade: Listar todas casas
Rota: DELETE /api/v1/casa/<id>

