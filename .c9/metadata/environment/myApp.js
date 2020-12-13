{"filter":false,"title":"myApp.js","tooltip":"/myApp.js","undoManager":{"mark":22,"position":22,"stack":[[{"start":{"row":0,"column":0},"end":{"row":14,"column":44},"action":"insert","lines":["// Carrega a biblioteca HTTP do Node.js","var http = require('http');","// Cria uma instância do servidor web","var server = http.createServer(function (request, response) {","// Define os parâmetros do cabeçalho da resposta HTTP","response.writeHead(200, {'Content-Type': 'text/html'});","// Escreve uma mensagem de resposta do servidor","response.write('<html><body><h1>Hello World</h1></body></html>');","// Envia uma resposta para o cliente","response.end();","});","// Coloca o servidor à espera de pedidos através da porta 3000 na máquina local","server.listen(3000);","// Imprime mensagem no terminal do servidor","console.log('Servidor Node.js em execucao');"],"id":1}],[{"start":{"row":11,"column":0},"end":{"row":12,"column":0},"action":"insert","lines":["",""],"id":2}],[{"start":{"row":11,"column":0},"end":{"row":11,"column":1},"action":"insert","lines":["v"],"id":3},{"start":{"row":11,"column":1},"end":{"row":11,"column":2},"action":"insert","lines":["a"]},{"start":{"row":11,"column":2},"end":{"row":11,"column":3},"action":"insert","lines":["r"]}],[{"start":{"row":11,"column":3},"end":{"row":11,"column":4},"action":"insert","lines":[" "],"id":4},{"start":{"row":11,"column":4},"end":{"row":11,"column":5},"action":"insert","lines":["p"]},{"start":{"row":11,"column":5},"end":{"row":11,"column":6},"action":"insert","lines":["o"]},{"start":{"row":11,"column":6},"end":{"row":11,"column":7},"action":"insert","lines":["r"]},{"start":{"row":11,"column":7},"end":{"row":11,"column":8},"action":"insert","lines":["t"]}],[{"start":{"row":11,"column":8},"end":{"row":11,"column":9},"action":"insert","lines":[" "],"id":5}],[{"start":{"row":11,"column":9},"end":{"row":11,"column":10},"action":"insert","lines":["="],"id":6}],[{"start":{"row":11,"column":10},"end":{"row":11,"column":11},"action":"insert","lines":[" "],"id":7}],[{"start":{"row":11,"column":11},"end":{"row":11,"column":12},"action":"insert","lines":["p"],"id":8},{"start":{"row":11,"column":12},"end":{"row":11,"column":13},"action":"insert","lines":["r"]},{"start":{"row":11,"column":13},"end":{"row":11,"column":14},"action":"insert","lines":["o"]},{"start":{"row":11,"column":14},"end":{"row":11,"column":15},"action":"insert","lines":["c"]},{"start":{"row":11,"column":15},"end":{"row":11,"column":16},"action":"insert","lines":["e"]},{"start":{"row":11,"column":16},"end":{"row":11,"column":17},"action":"insert","lines":["s"]}],[{"start":{"row":11,"column":11},"end":{"row":11,"column":17},"action":"remove","lines":["proces"],"id":9},{"start":{"row":11,"column":11},"end":{"row":11,"column":18},"action":"insert","lines":["process"]}],[{"start":{"row":11,"column":18},"end":{"row":11,"column":19},"action":"insert","lines":[" "],"id":10}],[{"start":{"row":11,"column":18},"end":{"row":11,"column":19},"action":"remove","lines":[" "],"id":11}],[{"start":{"row":11,"column":18},"end":{"row":11,"column":19},"action":"insert","lines":["."],"id":12}],[{"start":{"row":11,"column":19},"end":{"row":11,"column":20},"action":"insert","lines":["E"],"id":13},{"start":{"row":11,"column":20},"end":{"row":11,"column":21},"action":"insert","lines":["N"]},{"start":{"row":11,"column":21},"end":{"row":11,"column":22},"action":"insert","lines":["V"]}],[{"start":{"row":11,"column":22},"end":{"row":11,"column":23},"action":"insert","lines":["."],"id":14},{"start":{"row":11,"column":23},"end":{"row":11,"column":24},"action":"insert","lines":["p"]},{"start":{"row":11,"column":24},"end":{"row":11,"column":25},"action":"insert","lines":["o"]},{"start":{"row":11,"column":25},"end":{"row":11,"column":26},"action":"insert","lines":["r"]},{"start":{"row":11,"column":26},"end":{"row":11,"column":27},"action":"insert","lines":["t"]}],[{"start":{"row":11,"column":23},"end":{"row":11,"column":27},"action":"remove","lines":["port"],"id":15},{"start":{"row":11,"column":23},"end":{"row":11,"column":27},"action":"insert","lines":["port"]}],[{"start":{"row":11,"column":21},"end":{"row":11,"column":22},"action":"remove","lines":["V"],"id":16},{"start":{"row":11,"column":20},"end":{"row":11,"column":21},"action":"remove","lines":["N"]},{"start":{"row":11,"column":19},"end":{"row":11,"column":20},"action":"remove","lines":["E"]}],[{"start":{"row":11,"column":19},"end":{"row":11,"column":20},"action":"insert","lines":["e"],"id":17},{"start":{"row":11,"column":20},"end":{"row":11,"column":21},"action":"insert","lines":["n"]},{"start":{"row":11,"column":21},"end":{"row":11,"column":22},"action":"insert","lines":["v"]}],[{"start":{"row":11,"column":27},"end":{"row":11,"column":28},"action":"insert","lines":[" "],"id":18}],[{"start":{"row":13,"column":17},"end":{"row":13,"column":18},"action":"remove","lines":["0"],"id":19},{"start":{"row":13,"column":16},"end":{"row":13,"column":17},"action":"remove","lines":["0"]},{"start":{"row":13,"column":15},"end":{"row":13,"column":16},"action":"remove","lines":["0"]},{"start":{"row":13,"column":14},"end":{"row":13,"column":15},"action":"remove","lines":["3"]}],[{"start":{"row":13,"column":14},"end":{"row":13,"column":15},"action":"insert","lines":["p"],"id":20},{"start":{"row":13,"column":15},"end":{"row":13,"column":16},"action":"insert","lines":["o"]},{"start":{"row":13,"column":16},"end":{"row":13,"column":17},"action":"insert","lines":["r"]},{"start":{"row":13,"column":17},"end":{"row":13,"column":18},"action":"insert","lines":["t"]}],[{"start":{"row":13,"column":14},"end":{"row":13,"column":18},"action":"remove","lines":["port"],"id":21},{"start":{"row":13,"column":14},"end":{"row":13,"column":18},"action":"insert","lines":["port"]}],[{"start":{"row":11,"column":27},"end":{"row":11,"column":28},"action":"remove","lines":[" "],"id":22}],[{"start":{"row":11,"column":27},"end":{"row":11,"column":28},"action":"insert","lines":[";"],"id":23}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":15,"column":44},"end":{"row":15,"column":44},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1605727819528,"hash":"505dc20c2e574774806bc6ba0d7308a0e9f4455d"}