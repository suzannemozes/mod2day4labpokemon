const React = require('react')
class Show extends React.Component {
  render () {
   const pokemon = this.props.pokemon
    return (
      <div>
      <h1> Show Page </h1>
        The {pokemon.name} is {pokemon.img}
        {fruit.readyToEat? 'Its is ready to eat' : 'It is not ready to eat... Cant touch this' }
      </div>
      );
     }
   }
  module.exports  = Show;