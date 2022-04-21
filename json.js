let car = {
  brand: 'Audi',
  year: 2018,
  model: 'A3',
  miles: 25580,
  color: 'Grey'
}

console.log(car)

const carJson = JSON.stringify(car)

console.log(carJson)

const carParsed = JSON.parse(carJson)

console.log(carParsed)
