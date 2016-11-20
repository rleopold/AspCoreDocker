import React from 'react';
require('../stylesheets/card.css');

class Card  extends React.Component {

    constructor(props) {
        super(props);
        this.state = {"name":{"title":"mrs","first":"rose","last":"nichols"},"email":"rose.nichols@example.com","login":{"username":"blackpanda918","password":"walrus","salt":"wYsJL3Ef","md5":"5ba0a3f5bb7c3ee8f818d74a79ff5197","sha1":"189f91a34f8f594fa44c418753a14ec6113159be","sha256":"53d397bf83185ea5ca2a07d27207011ba13a51b5ca4751032668ae47b0dd07f9"},"picture":{"large":"https://randomuser.me/api/portraits/women/52.jpg","medium":"https://randomuser.me/api/portraits/med/women/52.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/52.jpg"}};

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
                        <a href="#" className="no">&#x2717;</a>
                        <a href="#" className="yes">&#x2713;</a>
                    </div>
                </div>
            </div>
        );
    }

}

export default Card;
