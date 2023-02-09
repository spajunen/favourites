const favouritesRouter = require('express').Router()

let favourites = [
    {id: 1, beverage: "coffee", name: "Löfbergs Kharisma", weight: "500", price: "6.59", roast: "4"},
    {id: 2, beverage: "tea", name: "Lipton Yellow", weight: "300", price: "3.19"}
]

favouritesRouter.get('/', (request, response) => {
  if (favourites) {
    response.json(favourites)
  } else {
    response.status(404).end()
  }
})

const generateId = () => {
  const maxId = favourites.length > 0
      ? Math.max(...favourites.map(n => n.id))
      : 0
  return maxId + 1
}

favouritesRouter.post('/', (request, response) => {
  const body = request.body

  if (!body.favourite.name) {
    return response.status(400).json({
      error: 'name missing'
    })
  }

  const newFavourite = {
    id: body.favourite.id || generateId(),
    beverage: body.favourite.beverage,
    name: body.favourite.name,
    weight: body.favourite.weight,
    price: body.favourite.price,
    roast: body.favourite.roast
  }

  try {
      favourites = favourites.concat(newFavourite)
      response.json(newFavourite)
  } catch (e) {
      console.log(e);
  }
})

// for test initialization purpose only
favouritesRouter.delete('/:id', (request, response) => {
  const id = Number(request.params.id)
  favourites = favourites.filter(note => note.id !== id)
  response.status(204).end()
})

module.exports = {
  favouritesRouter: favouritesRouter,
  favourites
}
