const React = require('react');


class Show extends React.Component {
  render(){
      const mons = this.props.pokemon;
      return(
          <html >
          <head>
              <title>{mons.name}</title>
          </head>
          <body >
              <h1>Gotta Catch 'Em All!</h1>
              <h2>{mons.name}</h2>
              <img src={mons.img + '.jpg'}></img>
              <a href="/"><button><h3>Back to Main Directory!</h3></button></a><br/>
              <a href="/pokemon"><button><h3>View Index</h3></button></a><br/>
              
          </body>
          </html>
      )
  };
};

module.exports = Show;