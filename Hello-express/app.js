import express from 'express';

const port = process.env.PORT || 3000;
const app = express();
// middelware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
// definnig  Routes
app.get('/', (req, res) => {
res.send('Hello Express!');


});

app.get('/hello', (req, res) => {
  res.send('Hello Express 2!');
  
  
  });
  app.get('/salut', (req, res) => {
    res.send('Hello salut!');
    
    
    });

app.listen(port, () => {


console.log(`Example app listening on port ${port}`); });
