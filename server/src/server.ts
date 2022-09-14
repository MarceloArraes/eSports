import express  from "express";

const app = express();

app.get('/games/:id/ads', (req: any, res: any) => {
  return res.json([
    {id: 1, name: 'ad1'},
    {id: 2, name: 'ad2'},
    {id: 3, name: 'ad3'},
    {id: 4, name: 'ad4'},
    {id: 5, name: 'ad5'},
    {id: 6, name: 'ad6'},
  ]);
});

app.post('/ads', (req: any, res: any) => {
  return res.status(201).json([]);
});

app.get('/ads/:id/discord', (req: any, res: any) => {

  return res.status(200).json([
    {id: 1, name: 'ad1'},
    {id: 2, name: 'ad2'},
    {id: 3, name: 'ad3'},
    {id: 4, name: 'ad4'},
    {id: 5, name: 'ad5'},
    {id: 6, name: 'ad6'},
  ]);

});

app.listen(3000)