import React from 'react';
import {render} from 'react-dom';
import Card from './Card.jsx'
import List from './List.jsx';

class App extends React.Component {
  render () {
    return (
    <div>
        <Card/>
        <List/>
    </div>
    );
  }
}

render(<App/>, document.getElementById('app'));