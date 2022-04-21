import fetch from 'node-fetch'

// async function getDataAsync() {
//   let fname;
//   try {
//     const response = await fetch('https://api.sampleapis.com/beers/ale') // GET -> Promise
//     const data = await response.json()
//     fname = data[11].name
//     console.log("Hey, what's up, " + fname +"?")
//   } catch (err) {
//     console.error(err)
//   }
// }
// getDataAsync()

// ------------------------

// fetch('https://api.sampleapis.com/beers/ale')
//   .then(response => {
//     return response.json()
//   })
//   .then(data => {
//     console.log(data[87])
//   })
//   .catch(err => {
//     console.error(err)
//   })

// // ------------------------

// fetch('https://api.sampleapis.com/beers/ale')
//   .then(response => response.json())
//   .then(beers => console.log(beers[99]))
//   .catch(err => console.error(err))

// // ------------------------

// fetch('https://api.sampleapis.com/beers/ale')
//   .then(response => response.json())
//   .then(beers => {
//     for (let i = 0; i < beers.length; i++) {
//       console.log(beers[i].name)
//     }
//   })
//   .catch(err => console.error(err))

// GET fetch
function goGetMyBeers() {
  let allBeers
  let coffees

  const newBeer = { price: '$7', name: 'Stela Artois', id: 220 }

  fetch('https://api.sampleapis.com/beers/ale') // go and get data API
    .then(myResponse => myResponse.json()) // formating the response
    .then(data => {
      data.push(newBeer) // manipulating data and adding a new beer
      allBeers = data
    })
    .catch(myErr => console.error('we got an error:', myErr))

  fetch('https://api.sampleapis.com/coffee/hot')
    .then(allCoffees => allCoffees.json())
    .then(formattedCoffees => (coffees = formattedCoffees))
    .catch(err => console.err(err))

  console.log(allBeers, allCoffees)
}

goGetMyBeers()
// // one way to write anonymous
// function (myErr) {
//   return console.log(myErr)
//   console.log('test') // this line will never run
// }

// // arrow function way
// () => {}

// () => {
//   return console.log('test') // explicit return
//   console.log('test') // this line will never run
// }

// () => console.log('test') // implicit return
