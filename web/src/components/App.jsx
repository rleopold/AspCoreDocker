import React from 'react';
import {render} from 'react-dom';
import Card from './Card.jsx'

class App extends React.Component {
  render () {
    return (
    <div>
        <Card/>
    </div>
    );
  }
}

render(<App/>, document.getElementById('app'));