const express = require('express');

const app = express();

app.get('/', (req: any, res: { send: (arg0: string) => void; }) => {
  console.log('req', req);
  res.send('Hello World');
});

app.listen(3000)