
# express-die

express handler to kill your node process

## Install

```sh
$ npm install express-die
```

## Description

Kill your node process from a route, handy when used with
a watcher that restarts it, useful for apps that misbehave.

It will also redirect to / after 5 seconds.

## Usage

```js
var die = require('express-die');
app.get('/die', die);
```

## License

MIT
