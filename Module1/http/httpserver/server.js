const http = require('http')
const port = 3000


//Server accepting a post request and prints the body at the server side
http.createServer((request,response) => {

    if(request.method == 'POST'){
        let buffer = ''
        request.on('data', function(chunk){
            buffer += chunk
        })
        request.on('end', function(){
            console.log(`Body: ${buffer}`)
            response.end('\nAccepted body\n\n')
        })
    }else{
        response.writeHead(200, {'Content-Type': 'text/plain'})
        response.write('Hello')
        response.end('Hello World')
    }
    
    console.log(request.headers)
    console.log(request.method)
    console.log(request.url)

}).listen(port)

console.log(`Server running at http://localhost:${port}/`)