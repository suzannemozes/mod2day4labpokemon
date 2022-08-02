const express = require ('express');
require('dotenv').config();
const pokemon = require('./models/pokemon')
const app = express();
const port = process.env.PORT || 3003;

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', (req, res) => {
  res.send('Welcome to the Pokemon App!');
});

app.get('/pokemon', (req, res) => {
  res.render('Index', {pokemon: pokemon});
});

// app.get('/pokemon/:id'), (req, res) => {
// res.send(req.params.id);
//   };
app.get('/pokemon/:id', function(req, res) {
  res.send(req.params.id)
})



//our routes
// app.get('/pokemon', function(req, res){
//   res.send('Show', { //second param must be an object
//       fruit: fruits[req.params.indexOfFruitsArray] //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
//   });
// });    

// //add show route
// app.get('/fruits/:indexOfFruitsArray', (req, res) => {
//   res.send(fruits[req.params.indexOfFruitsArray]);
// });

//our port
app.listen(3000, () => {
    console.log('listening');
});