const http = require('http');
const os = require('os');

console.log('Kubia server starting...');

let requestCount = 0;

const handler = (req, res) => {
	console.log(`Received request from ${req.connection.remoteAddress}`);
requestCount++;
	if (requestCount > 5) {
		res.writeHead(500);
		res.end('I\'m not well. Please restart me');
	} else {
		res.writeHead(200);
		res.end(`You hit ${os.hostname()}`);
	}
}

const www = http.createServer(handler);
www.listen(8080);
