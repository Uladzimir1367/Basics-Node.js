const http = require('http');

let homeCounter = 0;
let aboutCounter = 0;

const server = http.createServer((req, res) => {
   if (req.url === '/') {
      homeCounter++;
      res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
      res.end(`
      <h1>Добро пожаловать на мой сайт! Посещений главной страницы: ${homeCounter}</h1>
      <a href="/about">О нас</a>
      `);
   } else if (req.url === '/about') {
      aboutCounter++;
      res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
      res.end(`
      <h1>О нас. Посещений страницы "О нас": ${aboutCounter}</h1>
      <a href="/">Главная</a>
   `);
   } else {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
      res.end('<h1>Страница не найдена</h1>');
   }
});

const port = 3000;

server.listen(port, () => {
console.log(`Сервер запущен на порту ${port}`);
});