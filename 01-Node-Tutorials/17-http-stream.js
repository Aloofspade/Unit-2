const http = require('http');
const fs = require('fs');

http
.createServer()
.on("request", (req, res) => {
    if(req.url === '/write'){
        res.write("more", "utf8", () => {
            setTimeout(() => {
                res.end("timing")
            }, 2000);
        })
        // res.end("testing")
    } else if (req.url === '/stream') {
        const fileStream = fs.createReadStream("./content/big.txt", 'utf8')

        fileStream.on('open', () => {
            fileStream.pipe(res)
        })
        fileStream.on('error', (err) => {
            res.end(err);
        })
    } else {
        res.end("404")
    }
})
.listen(3000, () => {
    console.log(`server running at port 3000`)
})