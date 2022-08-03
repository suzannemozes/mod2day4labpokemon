const express = require ('express');
const mongoose = require('mongoose')
require('dotenv').config();
const Pokemon = require('./models/Pokemon')
const app = express();
const port = process.env.PORT || 3003;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});


//midleware
app.use(express.urlencoded({extended:true}));


//setting up views
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine()); //Initializing our engine

app.get('/', (req, res) => {
  res.send('Welcome to the Pokemon App!');
});

app.get('/pokemon', (req, res) => {
  res.render('Index', {pokemon: pokemon});
});

app.get('/pokemon/new', (req, res)=>{
  res.render('New');
});

app.post('/pokemon/', (req, res)=>{
  if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
    req.body.readyToEat = true;
} else { //if not checked, req.body.readyToEat is undefined
    req.body.readyToEat = false;
}
fruits.push(req.body);
});

// app.get('/pokemon/:id'), (req, res) => {
// res.send(req.params.id);
//   };
app.get('/pokemon/:id', function(req, res) {
  res.render('Show', {pokemon: pokemon[req.params.id]}); //sending whole array
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