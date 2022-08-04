const React = require('react');
const myStyle = {
  color: '#ffffff',
  backgroundColor: '#000000',
};

class Index extends React.Component {
  render() {
      const { pokemon } = this.props;
      return (
              <div>
                <h1>Pokemon Index Page</h1>
                <nav>
                    <a href="/pokemon/new">Create a new pokemon</a>
                  </nav>
                <div style={myStyle}>My First React Component!</div>
                <ul>
                      {pokemon.map((pokemon) => {
                        console.log(pokemon)
                          return (
                              <li>
                                   The{' '}
                                  <a href={`/pokemon/${pokemon.id}`}>
                 
                                      {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</a>{' '} is {pokemon.color}  <br></br>
                                  {pokemon.readyToBattle
                                      ? `It is ready to battle`
                                      : `It is not ready to battle`}
                                  <br />
                                  <form action={`/pokemon/${pokemon.id}`} method="POST"><button type="submit">Delete</button></form>
                                  <a href={`/pokemon/${pokemon.id}/edit`}>Edit pokemon</a>
                              </li>
                          );
                      })}
                  </ul>
              </div>
      )
  }
}
module.exports = Index;