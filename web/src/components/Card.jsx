import React from 'react';
import Details from './Details.jsx';
import Respond from './Respond.jsx';
import PeopleService from '../api/people.js';
require('../stylesheets/card.css');

class Card  extends React.Component {

    constructor(props) {
        super(props);
        this.state = {"name":{"title":"","first":"","last":""},"email":"","login":{"username":""},"picture":{"large":"http://placehold.it/200x200"}};
        this.getNext = this.getNext.bind(this);
        this.save = this.save.bind(this);

    }

    componentDidMount() {
        PeopleService.getRandom()
            .then(result => this.setState(result));
    }

    getNext()
    {
        PeopleService.getRandom()
            .then(result => this.setState(result));
    }

    save() 
    {
        console.log
        PeopleService.savePerson(this.state)
            .then(res => {
                this.getNext();
            });
    }

    render() {
        return (
            <div id="card" className="card">
                <div className="title">{this.state.login.username}</div>
                <div className="avatar"><img src={this.state.picture.large} /></div>
                <Details name={this.state.name} email={this.state.email} />
                <Respond accept={this.save} reject={this.getNext} />
            </div>
        );
    }

}

export default Card;
