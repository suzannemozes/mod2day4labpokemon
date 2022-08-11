const React = require('react');


class Home extends React.Component {
    render() {
        return (
            <html>
            <head>
                <title>Pokemon Collection</title>
            </head>
            <body >
                <h1 >Pokemon Collection</h1>
                <div>
                    <a href='/pokemon'><button><h3>View Pokemon</h3></button></a>
                    <a href='/pokemon/new'><button><h3>Add New Entry</h3></button></a>
                </div>
            </body>
            </html>
        );
    }
}

module.exports = Home;