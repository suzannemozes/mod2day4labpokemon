const React = require('react');
const myStyle = {
  color: '#ffffff',
  backgroundColor: '#000000',
};

class Show extends React.Component {
    
  render() {
    console.log(this.props)
    const pokemon = this.props.pokemon
    return (
      <div style={myStyle}>
      <h1> Gotta Catch 'Em All </h1>
        The {pokemon.name} is {pokemon.color}
        {pokemon.readyToBattle? 'Its is ready to battle' : 'It is not ready to battle... Cant do this' }
        <h2>{pokemon.name}</h2>
        <img src={pokemon.img + '.jpg'}></img>
          <a href={/pokemon/}>back to index </a>
      {/* // const { pokemon } = this.props; // this.props is whatever index we passed in from the parent as a property (this.props is the way to refer to it in here)
      // console.log(pokemon.img)
      {return (
      //         <div style={myStyle}>
      //             <h1>Gotta Catch 'Em All</h1>
      //             <h2>{pokemon.name}</h2>
      //             <img src={pokemon.img + '.jpg'}></img>
      //            <a href={/pokemon/}>back to index </a>
               */}
          </div>
          );
      }
    }

module.exports = Show;