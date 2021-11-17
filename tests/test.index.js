const test = require('tape')
const supertest = require('supertest')
const app = require('../index')

const casaOK = {
    "nome": "Casa Teste",
    "regiao": "Sul",
    "anoDeFundacao": 2000,
    "lord": {
        "nome": "Lord Testador",
        "temporadas": [1, 2, 3]
    }
}

let casaId = 0;

test('POST /api/v1/casa - Adicionar casa', (t) => {
    supertest(app)
      .post('/api/v1/casa')
      .send(casaOK)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) =>{
        t.error(err, err?.message?? 'Sem erros')
        t.assert(res.body.id > 0 && res.body.LordId > 0, "Casa cadastrada corretamente")
        if (res.body.id > 0) {
            casaId = res.body.id
        }
        t.end()  
      })
})

test('GET /api/v1/casa - Listar casas', (t) => {
    supertest(app)
      .get('/api/v1/casa')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) =>{
        t.error(err, err?.message?? 'Sem erros')
        t.ok(true, "Listar casas OK")
        t.end()  
      })
})

test('GET /api/v1/casa/nome/:nome - Buscar por nome', (t) => {
    supertest(app)
      .get('/api/v1/casa/nome/' + casaOK.nome)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) =>{
        t.error(err, err?.message?? 'Sem erros')
        t.ok(true, "Buscar casa por nome OK")
        t.end()  
      })
})

test('GET /api/v1/casa/:id - Buscar por ID', (t) => {
    supertest(app)
      .get('/api/v1/casa/' + casaId)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) =>{
        t.error(err, err?.message?? 'Sem erros')
        t.ok(true, "Buscar casa por ID OK")
        t.end()  
      })
})

test('DELETE /api/v1/casa/:id - Remover casa', (t) => {
    supertest(app)
      .delete('/api/v1/casa/' + casaId)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) =>{
        t.error(err, err?.message?? 'Sem erros')
        t.ok(true, "Remover casa OK")
        t.end()  
      })
})