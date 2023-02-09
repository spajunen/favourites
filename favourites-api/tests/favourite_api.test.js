const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)

const newFavourite = {favourite: {id: 2000, name: "testi", weight: "500"}}

beforeEach(async () => {
  await api.post("/api/favourites").send(newFavourite)
})
afterEach(async () => {
  await api.delete(`/api/favourites/${newFavourite.id}`)
})

test('favourites are returned as json', async () => {
   await api
  .get('/api/favourites')
  .expect(200)
  .expect('Content-Type', /application\/json/)
})

test('GET /favourites', async () => {
  const response = await api.get('/api/favourites')
  expect(response.statusCode).toBe(200);
  expect(response.body.length >= 1).toBe(true)
})

test('POST /favourites', async () => {
  //test that favourite which is added in test initialization is saved
  const response = await api.get('/api/favourites')
  const contents = response.body.map(r => r.name)
  expect(contents).toContain(
      'testi'
  )
})

test('favourite without name is not added', async () => {
  const newNote = {favourite: {
    weight: "300"
  }}

  await api
  .post('/api/favourites')
  .send(newNote)
  .expect(400)
})
