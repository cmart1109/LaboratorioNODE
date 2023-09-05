import chalk from 'chalk';
const http = require('http');
const port = 8080;
const host = "localhost";

const server = http.createServer((req,res) => {
    if (req.method==='GET'&&req.url==='/info') {
        res.statusCode = 200
        res.setHeader("Content-Type", "application/json")
        res.end("La tarea esta funcionando perfectamente, Gracias por tu colaboracion")
    }
    else { res.statusCode = 404
        res.end("URL no encontrada")
    }; 
    });

server.listen(port,host, ()=>{
    console.log(chalk.green('Hola Christian, El Servidor se esta corriendo normalmente, 0 Errores, La Direccion URL es http://localhost:8080/info'));
});