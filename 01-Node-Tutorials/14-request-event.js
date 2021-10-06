const http = require('http');

http
.createServer()
//on() is using the event emitter API instead
//on emits an event and on request we res 
.on("request", (req, res) => {
if (req.url === '/') res.end("welcome") 
else res.end("404")
})
.listen(3000)