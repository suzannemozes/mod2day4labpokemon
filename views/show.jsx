const React = require('react');
const myStyle = {
  color: '#ffffff',
  backgroundColor: '#000000',
};

class Show extends React.Component {
  render() {
      const { pokemon } = this.props;
      return (
              <div style={myStyle}>
                  <h1>Gotta Catch 'Em All</h1>
                  <h2>{pokemon.name}</h2>
                  <img src={pokemon.img}></img>
                  {/* <a href={/pokemon/}>back</a>
              <ul>
                      {pokemon.map((pokemon, i) => {
                          return (
                              <li>
                                  <a href={`/pokemon/${i}`}>
                                      {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</a>
                              </li>
                          );
                      })}
                  </ul> */}
              </div>
      )
  }
}
module.exports = Show;