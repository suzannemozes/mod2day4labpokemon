const express = require ('express');
const mongoose = require('mongoose')
require('dotenv').config();
const Pokemon = require('./models/pokemon')
const app = express();
const port = process.env.PORT || 3003;
const methodOverride = require('method-override')
const pokemonDate = require('./utilities/pokemonData')

//DB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

//midleware
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'))

//setting up views
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine()); //Initializing our engine

//seed route
// app.get('/pokemon/seed', (req, res) => {
//   //Comment the line below if you don't want to delete your whole entire collection
//   Pokemon.deleteMany({})
//   //Creat a listof pokemon into our database
//   Pokemon.create(pokemonData)
//   process.ext()
// })

app.get('/pokemon/seed', async (req, res) => {
  await Pokemon.deleteMany({}); //Clear database
  await Pokemon.create(pokemonData);
  // await Pokemon.deleteMany({name: /saur/}); //This will filter out all pokemon with 'saur'. We don't really need it. Just showing what it can do
  res.redirect('/pokemon');
})

//signature for git route, we want it to send up "Welcome"
app.get('/', (req, res) => {
  res.send('Welcome to the Pokemon App!');
});

app.get('/pokemon', (req, res) => {
  // res.render('Index', {pokemon: pokemon});
  Pokemon.find({}, (error, allPokemon) => {
    res.render('Index', { 
      pokemon: allPokemon
  });
});
});

app.get('/pokemon/new', (req, res)=>{
  res.render('New');
});

app.post('/pokemon/', (req, res)=>{
    if(req.body.readyToBattle === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToBattle = true;
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToBattle = false;
    }
    Pokemon.create(req.body, (error, createdPokemon)=>{
        res.redirect("/pokemon");
    });
});


app.get('/pokemon/:id', function(req, res) {
  Pokemon.findById(req.params.id, (err, foundPokemon) => {
    res.send(foundPokemon)
    
  })
})

//Edit Page
app.get('/pokemon/:id/edit', (req, res) => {
  Pokemon.findById(req.params.id, (error, foundPokemon) => {
    if(!error) {
      res.render('Edit', {
        pokemon: foundPokemon
      })
    } else {
      res.send({
        message: error.message
      })
    }
  })
})


// Update route
app.put('/pokemon/:id', (req, res) => {
  Pokemon.findByIdAndUpdate(req.params.id, req.body, {
      new: true
  }, (error, pokemon) => {
      res.redirect(`/pokemon/${req.params.id}`)
  })
})

//delete route
app.delete('/pokemon/:id', (req, res) => {
  console.log('we are deleting')
  Pokemon.findByIdAndRemove(req.params.id, (err, data) => {
      res.redirect('/pokemon')
  })
})


//being ref'd to a variable stated above, port variable that was set is being sent to this port 
//when you add the http it will show up as a hyperlink in the terminal and take you directly to the site
app.listen(3000, () => {
    console.log(`listening on http://localhost:${port}`);
});