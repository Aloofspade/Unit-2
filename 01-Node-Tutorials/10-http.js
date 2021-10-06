const http = require('http');
const os = require('os');
const user = os.userInfo();
const data = {
    name: [
        'jimmy',
        'john',
        'tommy',
        'doughnut',
        'donut',

    ],
    data: '10/20/30',
    numbers: [1,2,3,4,5,6,7,8],
}

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        console.log(`${user.username} visted your site`);
        res.end(`Welcome to the home page`);
    } else if (req.url === '/about'){
        res.end(`Here is the history of my people`);
    } else if(req.url === '/data'){
        res.end(JSON.stringify(data));
    } else {
        res.end(`
        <h1>Opps!</h1>
        <p>We can't find what you're looking for<p>
        `);
    }
});

server.listen(3000);