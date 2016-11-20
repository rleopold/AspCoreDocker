import React from 'react';
import PeopleService from '../api/people.js';
require('../stylesheets/card.css');

class Card  extends React.Component {

    constructor(props) {
        super(props);
        this.state = {"name":{"title":"","first":"","last":""},"email":"","login":{"username":""},"picture":{"large":"http://placehold.it/200x200"}};
        this.getNext = this.getNext.bind(this);

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

    render() {
        return (
            <div id="card" className="card">
                <div className="title">Bag-A-Douche</div>
                <div className="avatar"><img src={this.state.picture.large} /></div>
                <div className="details">
                    <p>{this.state.name.title} {this.state.name.first} {this.state.name.last}</p>
                    <p>{this.state.login.username}</p>
                    <p>{this.state.email}</p>
                    <div className="respond">
                        <a href="#" onClick={this.getNext} className="no">&#x2717;</a>
                        <a href="#" onClick={this.getNext} className="yes">&#x2713;</a>
                    </div>
                </div>
            </div>
        );
    }

}

export default Card;
