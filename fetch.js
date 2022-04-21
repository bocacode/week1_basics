import fetch from 'node-fetch'

async function getDataAsync() {
  let fname;
  try {
    const response = await fetch('https://api.sampleapis.com/beers/ale') // GET -> Promise
    const data = await response.json()
    fname = data[11].name
    console.log("Hey, what's up, " + fname +"?")
  } catch (err) {
    console.error(err)
  }
}
getDataAsync()

// ------------------------

fetch('https://api.sampleapis.com/beers/ale')
  .then((response) => {
    return response.json()
  })
  .then(data => {
    console.log(data[87])
  })
  .catch((err) => {
    console.error(err)
  })

// ------------------------

fetch('https://api.sampleapis.com/beers/ale')
  .then(response => response.json())
  .then(beers => console.log(beers[99]))
  .catch(err => console.error(err))

// ------------------------

fetch('https://api.sampleapis.com/beers/ale')
  .then(response => response.json())
  .then(beers => {
    for(let i = 0; i < beers.length; i++) {
      console.log(beers[i].name)
    }
  })
  .catch(err => console.error(err))

