const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'available endpoints /api/favourites (GET & POST)' })
}

module.exports = {
  unknownEndpoint
}
