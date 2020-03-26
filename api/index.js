const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 80

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/clients', db.getUsers)
app.get('/clients/:id', db.getUserById)
app.post('/clients', db.createUser)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
