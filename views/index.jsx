const React = require('react');

class Index extends React.Component {
  render(){
      const { pokemon } = this.props;
      return(
          <html >
          <head>
              <title>Pokemon Index</title>
          </head>
          <body >
              <h1>Pokemon Index Page</h1><br/>
              <ul>
                  {pokemon.map((mons) => {
                      return (
                          <li>
                              <h3>{mons.name}</h3>
                              <a href={`/pokemon/${mons.id}`}><img src="https://www.freeiconspng.com/uploads/file-pokeball-png-0.png" width="20px" height="20px"></img></a>
                              <br/>
                              <form action={`/pokemon/${mons.id}?_method=DELETE`} method="POST">
                                  <button type="submit"><h4>Delete Entry</h4></button>
                              </form>
                              <a href={`/pokemon/${mons.id}/edit`}><button type="submit" ><h4>Edit Entry</h4></button></a>
                          </li>
                      );
                  })}
              </ul>
              <a href="/"><button><h3>Back to Main Directory!</h3></button></a><br/>
          </body>
          </html>
      )
  };
};

module.exports = Index;