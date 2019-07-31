const http = require('http')
const url = 'http://nodeprogram.com'

//data returned is in chuncks of strings
http.get(url, (response) => {
    response.on('data', (chunk) => { 
      console.log(chunk.toString('utf8'))
    })
    response.on('end', () => {
      console.log('response has ended')
    })
    response.on('error', () => { //catches other errors
        console.log("no obj here")
      })
  }).on('error', (error) => {
    console.error(`Got error: ${error.message}`) //determines error in connection/port/invalid url
  })