const express = require('express');
const next = require('next');
// const routes = require('./routes');

const app = next({ dev: process.env.NODE_ENV !== 'production', dir: './src' });
const handler = app.getRequestHandler();

app.prepare().then(() => {
  express().use(handler).listen(3001);
});
