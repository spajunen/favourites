const express = require('express')
const app = express()
const cors = require('cors')
const {favouritesRouter} = require('./controllers/favourites')
const middleware = require('./utils/middleware')

app.use(cors())
app.use(express.json())
app.use('/api/favourites', favouritesRouter)
app.use(middleware.unknownEndpoint)

module.exports = app
